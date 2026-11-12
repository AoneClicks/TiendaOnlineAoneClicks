(() => {
  "use strict";

  const STORAGE_KEY = "aoneclicks_cart_v2";
  const FAV_KEY = "aoneclicks_favs_v1";
  const MAX_QTY = 99;
  const $ = (sel, root = document) => root.querySelector(sel);

  const fmt = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
  const money = (n) => fmt.format(n);

  // ---------- Meta Pixel (solo con cookies aceptadas) ----------
  const META_PIXEL_ID = "2907640152948509";
  function loadPixel() {
    if (window.fbq) return;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }
  const track = (event, params) => { if (window.fbq) window.fbq("track", event, params); };

  // Precio total por volumen: paquetes de 3 + resto (1 o 2) con su tarifa
  // Si un producto no tiene precio para 3 unidades, se usa su paquete más grande disponible
  const packSizes = (p) => [1, 2, 3].filter((n) => p.prices[n]);
  const lineTotal = (p, qty) => {
    const max = Math.max(...packSizes(p));
    return Math.floor(qty / max) * p.prices[max] + (qty % max ? p.prices[qty % max] : 0);
  };

  const FALLBACK_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#ece9f7"/>' +
    '<text x="50%" y="50%" fill="#9a94c0" font-family="sans-serif" font-size="22" text-anchor="middle">AoneClicks</text></svg>'
  );

  const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const HEART = svg('<path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 2.7 5 6 5c2 0 3.4 1 4.4 2.4h3.2C14.6 6 16 5 18 5c3.3 0 5.1 3.3 3.6 6.7C19.5 16.4 12 21 12 21z"/>');
  const CART_ICON = svg('<path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM1 2v2h2l3.6 7.6-1.4 2.4A2 2 0 0 0 7 17h12v-2H7.4l1.1-2h7.5a2 2 0 0 0 1.7-1l3.6-6.5A1 1 0 0 0 20.4 4H5.2l-.9-2H1z"/>');
  const BADGES = {
    "Verificado": { cls: "verified", icon: svg('<path d="M12 1l3 2.2 3.7-.2 1.1 3.5 3 2.2-1.1 3.5 1.1 3.5-3 2.2-1.1 3.5-3.7-.2L12 23l-3-2.2-3.7.2-1.1-3.5-3-2.2 1.1-3.5-1.1-3.5 3-2.2 1.1-3.5 3.7.2L12 1zm-1.2 14.4l5.6-5.6-1.4-1.4-4.2 4.2-2-2-1.4 1.4 3.4 3.4z"/>') },
    "Premium": { cls: "premium", icon: svg('<path d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.9L12 17.6 5.9 20.9 7.1 14 2.1 9.2 9 8.3 12 2z"/>') },
    "Exclusivo": { cls: "exclusive", icon: svg('<path d="M3 8l4 3 5-7 5 7 4-3-2 11H5L3 8z"/>') }
  };
  function iconEl(tag, cls, html) {
    const n = document.createElement(tag);
    n.className = cls;
    n.innerHTML = html;
    return n;
  }
  let favs;
  try { favs = new Set(JSON.parse(localStorage.getItem(FAV_KEY)) || []); } catch { favs = new Set(); }
  const saveFavs = () => { try { localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); } catch {} };


  // ---------- Estado ----------
  let cart = loadCart();

  // Colores disponibles de un producto (los agotados no se pueden pedir)
  const availableColors = (p) => (p.colors || []).filter((c) => !c.soldOut);
  const cartKey = (id, color) => (color ? `${id}|${color}` : String(id));
  function parseKey(key) {
    const [idPart, color] = String(key).split("|");
    const product = PRODUCTS.find((p) => String(p.id) === idPart);
    if (!product) return null;
    if (product.colors && product.colors.length) {
      if (!availableColors(product).some((c) => c.name === color)) return null;
    } else if (color) return null;
    return { product, color: color || "" };
  }
  function loadCart() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const clean = {};
      for (const [key, val] of Object.entries(raw)) {
        const q = Number(val);
        if (parseKey(key) && Number.isInteger(q) && q > 0) clean[key] = Math.min(q, MAX_QTY);
      }
      return clean;
    } catch { return {}; }
  }
  const saveCart = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch { /* sin almacenamiento */ } };
  const lineName = (l) => l.product.name + (l.color ? ` – Color ${l.color}` : "");
  const cartLines = () => Object.entries(cart)
    .map(([key, qty]) => { const k = parseKey(key); return k && { key, product: k.product, color: k.color, qty }; })
    .filter(Boolean)
    .sort((a, b) => PRODUCTS.indexOf(a.product) - PRODUCTS.indexOf(b.product));
  const cartTotal = () => cartLines().reduce((s, l) => s + lineTotal(l.product, l.qty), 0);
  const cartUnits = () => cartLines().reduce((s, l) => s + l.qty, 0);

  // ---------- Utilidades DOM ----------
  function el(tag, props = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) node.append(c);
    return node;
  }
  function productImg(p, src) {
    const img = el("img", { src: src || p.image, alt: p.name, loading: "lazy", width: "400", height: "300" });
    img.addEventListener("error", () => { img.src = FALLBACK_IMG; }, { once: true });
    return img;
  }
  const productPhotos = (p) => [p.image].concat(p.gallery || []);

  // ---------- "¿Para qué sirve?" ----------
  const INFO_ICONS = { "Sirve para": "🎯", "Cómo se toma": "💧", "Cómo se usa": "👉", "Cuándo": "⏰", "Dónde": "📍", "Ideal para": "👥" };
  const getInfo = (p) => (typeof PRODUCT_INFO !== "undefined" && PRODUCT_INFO[p.id]) || null;
  // Diapositiva corta (se desliza después de las fotos)
  function infoSlide(p) {
    const info = getInfo(p);
    if (!info) return null;
    return el("div", { class: "info" }, [
      el("span", { class: "info__kicker", text: "¿Para qué sirve?" }),
      el("strong", { class: "info__rutina", text: info.rutina }),
      el("ul", { class: "info__list" }, info.filas.map(([k, short]) => el("li", {}, [
        el("span", { class: "info__ic", "aria-hidden": "true", text: INFO_ICONS[k] || "•" }),
        el("span", { class: "info__txt" }, [el("small", { text: k }), el("span", { text: short })])
      ])))
    ]);
  }
  // Texto completo dentro de la descripción del producto
  function infoText(p) {
    const info = getInfo(p);
    if (!info) return null;
    return el("div", { class: "pd__uses" }, [
      el("p", { class: "pd__rutina" }, [el("span", { text: "Rutina ideal: " }), el("strong", { text: info.rutina })]),
      ...info.filas.map(([k, , long]) => el("p", { class: "pd__use" }, [
        el("span", { class: "info__ic", "aria-hidden": "true", text: INFO_ICONS[k] || "•" }),
        el("span", {}, [el("strong", { text: k + ": " }), long])
      ]))
    ]);
  }

  // ---------- Visor de fotos ampliadas ----------
  let lightbox;
  let lbStep = () => {};
  function openLightbox(p, index) {
    const photos = productPhotos(p);
    let i = index;
    if (!lightbox) {
      lightbox = el("div", { class: "lb", role: "dialog", "aria-modal": "true", "aria-label": "Foto ampliada", hidden: "" });
      document.body.append(lightbox);
      document.addEventListener("keydown", (e) => {
        if (lightbox.hidden) return;
        if (e.key === "Escape") { e.stopImmediatePropagation(); lightbox.hidden = true; }
        if (e.key === "ArrowRight") lbStep(1);
        if (e.key === "ArrowLeft") lbStep(-1);
      }, true);
    }
    const img = el("img", { class: "lb__img", alt: p.name });
    const count = el("span", { class: "lb__count" });
    const show = () => {
      img.src = photos[i];
      img.classList.remove("zoom");
      count.textContent = photos.length > 1 ? `${i + 1} / ${photos.length}` : "";
    };
    const step = (d) => { i = (i + d + photos.length) % photos.length; show(); };
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      const r = img.getBoundingClientRect();
      img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
      img.classList.toggle("zoom");
    });
    const close = el("button", { type: "button", class: "lb__close", "aria-label": "Cerrar", onclick: () => { lightbox.hidden = true; } }, "×");
    const kids = [el("div", { class: "lb__stage", onclick: () => { lightbox.hidden = true; } }, [img]), close, count,
      el("p", { class: "lb__tip", text: "Toca la foto para acercar · pellizca para hacer zoom" })];
    if (photos.length > 1) kids.push(
      el("button", { type: "button", class: "lb__nav lb__nav--prev", "aria-label": "Foto anterior", onclick: () => step(-1) }, "‹"),
      el("button", { type: "button", class: "lb__nav lb__nav--next", "aria-label": "Foto siguiente", onclick: () => step(1) }, "›"));
    lightbox.replaceChildren(...kids);
    lbStep = step;
    show();
    lightbox.hidden = false;
    close.focus();
  }

  // ---------- Galería deslizable: fotos + "¿Para qué sirve?" ----------
  function gallery(p, zoomable) {
    const photos = productPhotos(p);
    const slides = photos.map((src, n) => {
      const s = el("div", { class: "gal__slide" }, [productImg(p, src)]);
      if (zoomable) s.addEventListener("click", () => openLightbox(p, n));
      return s;
    });
    const info = infoSlide(p);
    const infoIndex = info ? slides.length : -1;
    if (info) slides.push(el("div", { class: "gal__slide gal__slide--info", role: "group", "aria-label": "Para qué sirve y cómo se usa" }, [info]));
    const track = el("div", { class: "gal__track" }, slides);
    const wrap = el("div", { class: "gal" + (zoomable ? " gal--zoom" : "") }, [track]);
    if (slides.length < 2) return wrap;
    let cur = 0;
    const stop = (fn) => (e) => { e.stopPropagation(); fn(); };
    const go = (i) => track.scrollTo({ left: Math.max(0, Math.min(slides.length - 1, i)) * track.clientWidth, behavior: "smooth" });
    const dots = slides.map((_, i) => el("button", { type: "button", class: "gal__dot" + (i === infoIndex ? " gal__dot--info" : ""), "aria-label": i === infoIndex ? "Ver para qué sirve" : `Ver foto ${i + 1}`, onclick: stop(() => go(i)) }));
    const prev = el("button", { type: "button", class: "gal__arrow gal__arrow--prev", "aria-label": "Anterior", onclick: stop(() => go(cur - 1)) }, "‹");
    const next = el("button", { type: "button", class: "gal__arrow gal__arrow--next", "aria-label": "Siguiente", onclick: stop(() => go(cur + 1)) }, "›");
    wrap.append(prev, next, el("div", { class: "gal__dots" }, dots));
    let hint = null;
    if (info) {
      hint = el("button", { type: "button", class: "gal__hint", onclick: stop(() => go(infoIndex)) }, "¿Para qué sirve? ›");
      wrap.append(hint);
    }
    if (photos.length > 1) wrap.append(el("span", { class: "gal__count", text: `📷 ${photos.length} fotos` }));
    if (zoomable) wrap.append(el("span", { class: "gal__zoomtip", "aria-hidden": "true", text: "🔍 Toca para ampliar" }));
    const sync = () => {
      cur = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
      dots.forEach((d, j) => d.classList.toggle("on", cur === j));
      wrap.classList.toggle("at-start", cur === 0);
      wrap.classList.toggle("at-end", cur === slides.length - 1);
      wrap.classList.toggle("on-info", cur === infoIndex);
      wrap.parentElement && wrap.parentElement.classList.toggle("not-first", cur > 0);
    };
    track.addEventListener("scroll", sync, { passive: true });
    sync();
    return wrap;
  }

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
  }
  const clampQty = (v) => Math.min(MAX_QTY, Math.max(1, parseInt(v, 10) || 1));

  // ---------- Descuentos por cantidad ----------
  function dealLine(p) {
    const max = Math.max(...packSizes(p));
    const saving = p.prices[1] * max - p.prices[max];
    if (saving <= 0) return null;
    return el("p", { class: "card__deal" }, [el("span", { "aria-hidden": "true", text: "🔥 " }), `Lleva ${max} y ahorra ${money(saving)}`]);
  }
  function wholesaleLink(p) {
    const from = (STORE_CONFIG.wholesaleFrom || 4);
    const msg = `¡Hola AoneClicks! Quiero precio por mayor de "${p.name}". Necesito ${from} o más unidades.`;
    return el("a", { class: "pd__wholesale", href: waUrl(msg), target: "_blank", rel: "noopener noreferrer" }, [
      el("span", { "aria-hidden": "true", text: "📦 " }),
      el("span", {}, [`¿Necesitas ${from} o más unidades? `, el("strong", { text: "Pide precio por mayor por WhatsApp" })])
    ]);
  }

  // ---------- Selector de color ----------
  function colorPicker(p, onChange) {
    if (!p.colors || !p.colors.length) return { el: "", get: () => "" };
    let current = (availableColors(p)[0] || {}).name || "";
    const label = el("strong", { text: current });
    const swatches = p.colors.map((c) => {
      const b = el("button", {
        type: "button", class: "swatch" + (c.soldOut ? " swatch--out" : ""),
        title: c.soldOut ? `${c.name} – Agotado` : c.name,
        "aria-label": c.soldOut ? `${c.name}, agotado` : `Color ${c.name}`,
        "aria-pressed": String(c.name === current), style: `--sw:${c.swatch}`,
        onclick: (e) => {
          e.stopPropagation();
          if (c.soldOut) { toast(`El color ${c.name} está agotado por alta demanda`); return; }
          current = c.name; label.textContent = current;
          swatches.forEach((x, i) => x.setAttribute("aria-pressed", String(p.colors[i].name === current)));
          onChange && onChange(current);
        }
      });
      return b;
    });
    const out = p.colors.filter((c) => c.soldOut).map((c) => c.name);
    const box = el("div", { class: "colors" }, [
      el("span", { class: "colors__label" }, ["Color: ", label]),
      el("div", { class: "colors__opts", role: "group", "aria-label": "Color de " + p.name }, swatches),
      out.length ? el("span", { class: "colors__out", text: `🔥 ${out.join(", ")} agotado por alta demanda` }) : ""
    ]);
    return { el: box, get: () => current };
  }

  // ---------- Catálogo ----------
  function renderCatalog() {
    const grid = $("#productGrid");
    grid.replaceChildren();
    PRODUCTS.forEach((p, i) => {
      let units = 1;
      const priceEl = el("span", { class: "card__price" });
      const unitEl = el("span", { class: "card__unit" });
      const saveEl = el("span", { class: "card__save" });
      const packs = packSizes(p).map((n) => el("button", {
        type: "button", class: "pack", "aria-pressed": "false", "data-units": String(n),
        onclick: () => setUnits(n)
      }, `${n} ${n === 1 ? "unidad" : "unidades"}`));

      function setUnits(n) {
        units = n;
        const total = p.prices[n];
        priceEl.textContent = money(total);
        unitEl.textContent = n === 1 ? "Impuestos incluidos" : `${money(Math.round(total / n))} c/u · Impuestos incluidos`;
        const saving = p.prices[1] * n - total;
        saveEl.textContent = saving > 0 ? `Ahorras ${money(saving)}` : "";
        saveEl.hidden = saving <= 0;
        packs.forEach((b) => {
          const on = Number(b.dataset.units) === n;
          b.classList.toggle("active", on);
          b.setAttribute("aria-pressed", String(on));
        });
        priceEl.classList.remove("flash"); void priceEl.offsetWidth; priceEl.classList.add("flash");
      }

      const badge = BADGES[p.badge];
      const heart = iconEl("button", "card__fav" + (favs.has(p.id) ? " on" : ""), HEART);
      heart.type = "button";
      heart.setAttribute("aria-label", "Agregar a favoritos");
      heart.setAttribute("aria-pressed", String(favs.has(p.id)));
      heart.addEventListener("click", (e) => {
        e.stopPropagation();
        const on = !favs.has(p.id);
        on ? favs.add(p.id) : favs.delete(p.id);
        saveFavs();
        heart.classList.toggle("on", on);
        heart.setAttribute("aria-pressed", String(on));
      });

      const picker = colorPicker(p);
      const addBtn = el("button", { type: "button", class: "card__add", onclick: () => addToCart(p.id, units, picker.get()) });
      addBtn.innerHTML = CART_ICON + "<span>Agregar</span>";

      const imgBox = el("div", { class: "card__img" }, [gallery(p)]);
      if (badge) {
        const b = el("span", { class: "badge badge--" + badge.cls });
        b.innerHTML = badge.icon + "<span></span>";
        $("span", b).textContent = p.badge;
        imgBox.append(b);
      }
      imgBox.append(heart);
      if (STORE_CONFIG.featured && STORE_CONFIG.featured.id === p.id) imgBox.append(el("span", { class: "card__star", text: "⭐ Producto del mes" }));
      imgBox.addEventListener("click", () => openProduct(p));

      grid.append(el("article", { class: "card", style: `animation-delay:${i * 60}ms` }, [
        imgBox,
        el("div", { class: "card__body" }, [
          el("div", { class: "card__meta" }, [
            el("span", { class: "card__cat", text: p.category }),
            el("button", { type: "button", class: "card__more", onclick: () => openProduct(p) }, "Ver detalles")
          ]),
          el("h3", { class: "card__title", text: p.name, onclick: () => openProduct(p) }),
          picker.el,
          el("div", { class: "packs", role: "group", "aria-label": "Unidades de " + p.name }, packs),
          dealLine(p) || "",
          el("div", { class: "card__pricing" }, [priceEl, saveEl, unitEl]),
          addBtn
        ])
      ]));
      setUnits(1);
    });
  }

  // ---------- Producto del mes (portada) ----------
  function renderFeatured() {
    const box = $("#featured");
    const f = STORE_CONFIG.featured;
    const p = f && PRODUCTS.find((x) => x.id === f.id);
    if (!box || !p) return;
    const max = Math.max(...packSizes(p));
    const addBtn = el("button", { type: "button", class: "btn btn--primary", onclick: () => {
      if (p.colors && p.colors.length) { openProduct(p); return; }
      addToCart(p.id, 1); openDrawer();
    } });
    addBtn.innerHTML = CART_ICON + "<span>Comprar ahora</span>";
    box.replaceChildren(el("article", { class: "feat" }, [
      el("button", { type: "button", class: "feat__img", "aria-label": "Ver " + p.name, onclick: () => openProduct(p) }, [productImg(p, f.image)]),
      el("div", { class: "feat__body" }, [
        el("span", { class: "feat__label" }, [el("span", { "aria-hidden": "true", text: "⭐ " }), f.label]),
        el("h2", { class: "feat__title", text: f.title }),
        el("p", { class: "feat__text", text: f.text }),
        el("p", { class: "feat__price" }, [
          el("strong", { text: money(p.prices[1]) }),
          max > 1 ? el("span", { text: ` · ${max} por ${money(p.prices[max])}` }) : ""
        ]),
        el("div", { class: "feat__actions" }, [
          addBtn,
          el("button", { type: "button", class: "btn btn--ghost", onclick: () => openProduct(p) }, "Más información")
        ])
      ])
    ]));
  }

  // ---------- Carrito ----------
  function addToCart(id, qty, color) {
    const key = cartKey(id, color);
    if (!parseKey(key)) { toast("Elige un color disponible"); return; }
    cart[key] = Math.min(MAX_QTY, (cart[key] || 0) + qty);
    saveCart(); renderCart();
    const added = PRODUCTS.find((x) => x.id === id);
    if (added) track("AddToCart", { content_ids: [String(id)], content_name: added.name + (color ? " – " + color : ""), content_type: "product", contents: [{ id: String(id), quantity: qty }], num_items: qty, value: lineTotal(added, qty), currency: "COP" });
    const badge = $("#cartCount");
    badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
    toast("Producto agregado al carrito");
  }

  function renderCart() {
    const lines = cartLines();
    $("#cartCount").textContent = cartUnits();
    $("#cartTotal").textContent = money(cartTotal());
    $("#cartEmpty").hidden = lines.length > 0;
    $("#checkoutOpen").disabled = lines.length === 0;

    const list = $("#cartList");
    list.replaceChildren();
    for (const line of lines) {
      const { product: p, qty, key } = line;
      const input = el("input", { type: "number", min: "1", max: String(MAX_QTY), value: String(qty), "aria-label": "Unidades de " + lineName(line) });
      const setQty = (v) => { cart[key] = clampQty(v); saveCart(); renderCart(); };
      input.addEventListener("change", () => setQty(input.value));
      list.append(el("li", { class: "cart-item" }, [
        productImg(p),
        el("div", {}, [
          el("div", { class: "cart-item__name", text: lineName(line) }),
          el("div", { class: "cart-item__sub", text: `${qty} ${qty === 1 ? "unidad" : "unidades"} = ${money(lineTotal(p, qty))}` }),
          el("button", { type: "button", class: "cart-item__remove", onclick: () => { delete cart[key]; saveCart(); renderCart(); } }, "Eliminar")
        ]),
        el("div", { class: "qty" }, [
          el("button", { type: "button", "aria-label": "Quitar una unidad", onclick: () => setQty(qty - 1) }, "−"),
          input,
          el("button", { type: "button", "aria-label": "Agregar una unidad", onclick: () => setQty(qty + 1) }, "+")
        ])
      ]));
    }
  }

  // ---------- Drawer / Modales ----------
  const overlay = $("#overlay");
  const drawer = $("#cartDrawer");
  const checkoutModal = $("#checkoutModal");
  const policyModal = $("#policyModal");
  const productModal = $("#productModal");
  let lastFocus = null;

  function syncScrollLock() {
    const open = drawer.classList.contains("open") || !checkoutModal.hidden || !policyModal.hidden || !productModal.hidden;
    document.body.classList.toggle("no-scroll", open);
    overlay.hidden = !drawer.classList.contains("open");
  }
  function openDrawer() { lastFocus = document.activeElement; drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); syncScrollLock(); $("[data-close]", drawer).focus(); }
  function closeDrawer() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); syncScrollLock(); lastFocus && lastFocus.focus(); }

  function openCheckout() {
    closeDrawer();
    const list = $("#summaryList");
    list.replaceChildren();
    for (const line of cartLines()) {
      const { product: p, qty } = line;
      list.append(el("li", {}, [el("span", { text: `${qty} × ${lineName(line)}` }), el("span", { text: money(lineTotal(p, qty)) })]));
    }
    $("#summaryTotal").textContent = money(cartTotal());
    checkoutModal.hidden = false; syncScrollLock();
    track("InitiateCheckout", cartParams());
    $("#nombre").focus();
  }
  function closeCheckout() { checkoutModal.hidden = true; syncScrollLock(); }

  function cartParams() {
    return {
      content_ids: cartLines().map((l) => String(l.product.id)),
      content_type: "product",
      contents: cartLines().map((l) => ({ id: String(l.product.id), quantity: l.qty })),
      num_items: cartUnits(),
      value: cartTotal(),
      currency: "COP"
    };
  }

  function openProduct(p) {
    track("ViewContent", { content_ids: [String(p.id)], content_name: p.name, content_type: "product", contents: [{ id: String(p.id), quantity: 1 }], value: p.prices[1], currency: "COP" });
    const d = (typeof PRODUCT_DETAILS !== "undefined" && PRODUCT_DETAILS[p.id]) || { description: "", specs: [], note: "" };
    const badge = BADGES[p.badge];
    let units = 1;
    const priceEl = el("span", { class: "card__price" });
    const unitEl = el("span", { class: "card__unit" });
    const saveEl = el("span", { class: "card__save" });
    const packs = packSizes(p).map((n) => el("button", {
      type: "button", class: "pack", "data-units": String(n), onclick: () => setUnits(n)
    }, `${n} ${n === 1 ? "unidad" : "unidades"}`));
    function setUnits(n) {
      units = n;
      const total = p.prices[n];
      priceEl.textContent = money(total);
      unitEl.textContent = n === 1 ? "Impuestos incluidos" : `${money(Math.round(total / n))} c/u · Impuestos incluidos`;
      const saving = p.prices[1] * n - total;
      saveEl.textContent = saving > 0 ? `Ahorras ${money(saving)}` : "";
      saveEl.hidden = saving <= 0;
      packs.forEach((b) => b.classList.toggle("active", Number(b.dataset.units) === n));
    }
    const pdPicker = colorPicker(p);
    const addBtn = el("button", { type: "button", class: "card__add", onclick: () => { addToCart(p.id, units, pdPicker.get()); closeProduct(); } });
    addBtn.innerHTML = CART_ICON + "<span>Agregar al carrito</span>";

    const imgBox = el("div", { class: "pd__img" }, [gallery(p, true)]);
    if (badge) {
      const b = el("span", { class: "badge badge--" + badge.cls });
      b.innerHTML = badge.icon + "<span></span>";
      $("span", b).textContent = p.badge;
      imgBox.append(b);
    }
    const specs = el("dl", { class: "pd__specs" }, (d.specs || []).map(([k, v]) =>
      el("div", {}, [el("dt", { text: k }), el("dd", { text: v })])));
    const benefits = (d.benefits || []).length
      ? el("ul", { class: "pd__benefits" }, d.benefits.map((b) => el("li", { text: b }))) : null;
    const uses = infoText(p);
    const info = el("div", { class: "pd__info" }, [
      el("span", { class: "pd__cat", text: p.category }),
      el("h2", { class: "pd__title", id: "pdTitle", text: p.name }),
      d.headline ? el("p", { class: "pd__headline", text: d.headline }) : "",
      el("h3", { class: "pd__h", text: "Descripción" }),
      el("p", { class: "pd__desc", text: d.description || "" }),
      uses || "",
      benefits ? el("h3", { class: "pd__h", text: "¿Por qué te va a encantar?" }) : "",
      benefits || "",
      !uses && d.howto ? el("h3", { class: "pd__h", text: "¿Cómo se usa?" }) : "",
      !uses && d.howto ? el("p", { class: "pd__text", text: d.howto }) : "",
      el("h3", { class: "pd__h", text: "Ficha técnica" }),
      specs
    ]);
    if (d.note) info.append(el("p", { class: "pd__note", text: d.note }));
    info.append(
      pdPicker.el,
      el("div", { class: "packs", role: "group", "aria-label": "Unidades de " + p.name }, packs),
      dealLine(p) || "",
      el("div", { class: "card__pricing" }, [priceEl, saveEl, unitEl]),
      addBtn,
      wholesaleLink(p)
    );
    $("#pdBody").replaceChildren(imgBox, info);
    setUnits(1);
    productModal.hidden = false; syncScrollLock();
    $(".modal__box", productModal).scrollTop = 0;
  }
  function closeProduct() { productModal.hidden = true; syncScrollLock(); }

  function openPolicy(key) {
    const pol = POLICIES[key];
    if (!pol) return;
    $("#policyTitle").textContent = pol.title;
    $("#policyBody").innerHTML = pol.html; // contenido estático definido en este archivo
    policyModal.hidden = false; syncScrollLock();
    $("[data-close]", policyModal).focus();
  }
  function closePolicy() { policyModal.hidden = true; syncScrollLock(); }

  // ---------- Formulario ----------
  const RULES = {
    nombre: (v) => (v.length >= 3 && /\p{L}/u.test(v) && /\s/.test(v)) || "Ingresa tu nombre y apellido.",
    telefono: (v) => /^(\+?57)?3\d{9}$/.test(v.replace(/[\s-]/g, "")) || "Ingresa un celular válido (ej. 3001234567).",
    whatsapp: (v) => v === "" || /^(\+?57)?3\d{9}$/.test(v.replace(/[\s-]/g, "")) || "Ingresa un número válido (ej. 3109876543) o déjalo vacío.",
    ciudad: (v) => v.length >= 2 || "Ingresa tu ciudad.",
    departamento: (v) => v.length >= 3 || "Ingresa tu departamento.",
    direccion: (v) => v.length >= 5 || "Ingresa tu dirección exacta.",
    barrio: (v) => v.length >= 2 || "Ingresa el nombre de tu barrio.",
    referencia: (v) => v.length >= 3 || "Ingresa un punto de referencia."
  };

  function setError(name, msg) {
    const input = $("#" + name);
    const holder = input.closest(".field");
    holder.classList.toggle("invalid", Boolean(msg));
    $(`[data-error-for="${name}"]`).textContent = msg || "";
    input.setAttribute("aria-invalid", msg ? "true" : "false");
  }

  function validateForm(form) {
    let firstInvalid = null;
    for (const [name, rule] of Object.entries(RULES)) {
      const res = rule(form[name].value.trim());
      setError(name, res === true ? "" : res);
      if (res !== true && !firstInvalid) firstInvalid = form[name];
    }
    const accepted = form.terminos.checked;
    setError("terminos", accepted ? "" : "Debes aceptar los términos para continuar.");
    if (!accepted && !firstInvalid) firstInvalid = form.terminos;
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  const oneLine = (s) => s.replace(/[\r\n]+/g, " ").trim();

  function buildMessage(data) {
    const lines = cartLines().map((l) => `• ${l.qty} ${l.qty === 1 ? "unidad" : "unidades"} de ${lineName(l)} — ${money(lineTotal(l.product, l.qty))}`);
    return [
      "🛍️ *NUEVO PEDIDO - AoneClicks Shopping*",
      "",
      "📦 *Productos:*",
      ...lines,
      "",
      `💰 *Total:* ${money(cartTotal())}`,
      "🚚 Envío GRATIS a nivel nacional",
      "💵 Pago contraentrega",
      "",
      "👤 *Datos del cliente*",
      `• Nombre: ${oneLine(data.nombre)}`,
      `• Celular: ${oneLine(data.telefono)}`,
      `• WhatsApp: ${oneLine(data.whatsapp) || "Mismo celular"}`,
      "",
      "📍 *Datos de entrega*",
      `• Ciudad: ${oneLine(data.ciudad)}`,
      `• Departamento: ${oneLine(data.departamento)}`,
      `• Dirección: ${oneLine(data.direccion)}`,
      `• Barrio: ${oneLine(data.barrio)}`,
      `• Punto de referencia: ${oneLine(data.referencia)}`,
      "",
      "✅ Acepto el tratamiento de datos y los Términos y Condiciones."
    ].join("\n");
  }

  function waUrl(text) {
    return `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(text)}`;
  }

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!cartLines().length) { toast("Tu carrito está vacío."); return; }
    if (!validateForm(form)) return;
    const data = Object.fromEntries(new FormData(form).entries());
    track("Lead", cartParams());
    const win = window.open(waUrl(buildMessage(data)), "_blank", "noopener,noreferrer");
    if (!win) window.location.href = waUrl(buildMessage(data));
    cart = {}; saveCart(); renderCart(); form.reset(); closeCheckout();
    toast("Pedido enviado a WhatsApp");
  }

  // ---------- Datos para Google (lista de productos) ----------
  function addProductSchema() {
    const base = "https://aoneclicks.com.co/";
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Productos AoneClicks Shopping",
      itemListElement: PRODUCTS.map((p, i) => {
        const d = (typeof PRODUCT_DETAILS !== "undefined" && PRODUCT_DETAILS[p.id]) || {};
        return {
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: p.name,
            image: base + p.image,
            description: d.description || p.name,
            category: p.category,
            brand: { "@type": "Brand", name: "AoneClicks Shopping" },
            offers: {
              "@type": "Offer",
              url: base + "#productos",
              priceCurrency: "COP",
              price: p.prices[1],
              availability: p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@id": base + "#store" }
            }
          }
        };
      })
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.append(s);
  }

  // ---------- Inicialización ----------
  function init() {
    addProductSchema();
    $("#year").textContent = new Date().getFullYear();

    document.querySelectorAll("[data-social]").forEach((a) => {
      const url = STORE_CONFIG.social[a.dataset.social];
      if (url) a.href = url;
    });
    $("#waFloat").href = waUrl(STORE_CONFIG.supportMessage);

    renderCatalog();
    renderFeatured();
    renderCart();

    $("#cartToggle").addEventListener("click", openDrawer);
    $("#checkoutOpen").addEventListener("click", openCheckout);
    overlay.addEventListener("click", closeDrawer);
    $("[data-close]", drawer).addEventListener("click", closeDrawer);
    $("[data-close]", checkoutModal).addEventListener("click", closeCheckout);
    $("[data-close]", policyModal).addEventListener("click", closePolicy);
    $("[data-close]", productModal).addEventListener("click", closeProduct);
    productModal.addEventListener("click", (e) => { if (e.target === productModal) closeProduct(); });
    [checkoutModal, policyModal].forEach((m) => m.addEventListener("click", (e) => {
      if (e.target === m) (m === policyModal ? closePolicy : closeCheckout)();
    }));
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-policy]");
      if (btn) openPolicy(btn.dataset.policy);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (!policyModal.hidden) closePolicy();
      else if (!productModal.hidden) closeProduct();
      else if (!checkoutModal.hidden) closeCheckout();
      else if (drawer.classList.contains("open")) closeDrawer();
    });

    const views = [...document.querySelectorAll("[data-view]")];
    const navLinks = [...document.querySelectorAll("[data-nav]")];
    const nav = $("#mainNav");
    const menuBtn = $("#menuToggle");
    const setMenu = (open) => { nav.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", String(open)); };
    menuBtn.addEventListener("click", (e) => { e.stopPropagation(); setMenu(!nav.classList.contains("open")); });
    document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setMenu(false); });
    function route() {
      const hash = location.hash.slice(1) || "inicio";
      const view = ["inicio", "productos", "contacto", "politicas"].includes(hash) ? hash : "inicio";
      const target = view === "productos" ? "inicio" : view;
      views.forEach((s) => { s.hidden = s.dataset.view !== target; });
      navLinks.forEach((a) => a.classList.toggle("active", a.dataset.nav === view));
      setMenu(false);
      if (view === "productos") $("#catalogo").scrollIntoView();
      else window.scrollTo(0, 0);
    }
    window.addEventListener("hashchange", route);
    route();

    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }), { threshold: 0.2 });
      revealEls.forEach((el) => io.observe(el));
    } else revealEls.forEach((el) => el.classList.add("in"));

    const contactForm = $("#contactForm");
    const CONTACT_RULES = {
      nombre: (v) => (v.length >= 3 ? "" : "Ingresa tu nombre completo."),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Ingresa un correo válido."),
      telefono: (v) => (/^\+?\d{7,15}$/.test(v.replace(/[\s()-]/g, "")) ? "" : "Ingresa un teléfono válido."),
      mensaje: (v) => (v.length >= 10 ? "" : "Cuéntanos un poco más (mínimo 10 caracteres)."),
    };
    const validateContactField = (el) => {
      const msg = CONTACT_RULES[el.name](el.value.trim());
      const holder = el.closest(".cs-field");
      holder.classList.toggle("invalid", !!msg);
      $(".cs-error", holder).textContent = msg;
      return !msg;
    };
    contactForm.addEventListener("input", (e) => {
      if (e.target.name in CONTACT_RULES && e.target.closest(".cs-field").classList.contains("invalid")) validateContactField(e.target);
    });
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = [...contactForm.elements].filter((el) => el.name in CONTACT_RULES);
      const valid = fields.map(validateContactField).every(Boolean);
      const status = $("#csStatus");
      status.className = "cs-status";
      if (!valid) { status.textContent = "Revisa los campos marcados."; fields.find((el) => el.closest(".invalid"))?.focus(); return; }
      const v = Object.fromEntries(fields.map((el) => [el.name, el.value.trim()]));
      const text = `Hola AoneClicks, soy ${v.nombre}.\n${v.mensaje}\n\nCorreo: ${v.email}\nTeléfono: ${v.telefono}`;
      const btn = $("#csSubmit");
      btn.disabled = true; btn.textContent = "Enviando…";
      setTimeout(() => {
        window.open(waUrl(text), "_blank", "noopener");
        status.textContent = "¡Listo! Continúa el envío en WhatsApp. Te responderemos pronto.";
        status.classList.add("ok");
        contactForm.reset();
        btn.disabled = false; btn.textContent = "Enviar mensaje";
      }, 600);
    });

    const cookieBanner = $("#cookieBanner");
    const COOKIE_KEY = "aoneclicks_cookies";
    const lockables = ["header", "main", "footer"].map((s) => $(s));
    // Mientras no se acepten las cookies, la tienda queda bloqueada (muro de cookies)
    const setCookieWall = (on) => {
      cookieBanner.hidden = !on;
      document.body.classList.toggle("no-scroll", on);
      lockables.forEach((n) => n && (on ? n.setAttribute("inert", "") : n.removeAttribute("inert")));
      if (on) $("#cookieAccept").focus();
    };
    let cookieChoice = null;
    try { cookieChoice = localStorage.getItem(COOKIE_KEY); } catch (e) { /* almacenamiento no disponible */ }
    if (cookieChoice === "accepted") loadPixel();
    else if (!cookieChoice) setCookieWall(true);
    cookieBanner.addEventListener("click", (e) => {
      const choice = e.target.closest("[data-cookie]")?.dataset.cookie;
      if (!choice) return;
      try { localStorage.setItem(COOKIE_KEY, choice); } catch (err) { /* ignorar */ }
      setCookieWall(false);
      if (choice === "accepted") loadPixel();
      else if (cookieChoice === "accepted") location.reload(); // retira el Píxel ya cargado
      cookieChoice = choice;
    });
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-cookie-settings]")) setCookieWall(true);
    });

    const form = $("#orderForm");
    form.addEventListener("submit", onSubmit);
    form.addEventListener("input", (e) => { if (e.target.name in RULES || e.target.name === "terminos") setError(e.target.name, ""); });
  }

  init();
})();
