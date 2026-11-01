(() => {
  "use strict";

  const STORAGE_KEY = "aoneclicks_cart_v2";
  const FAV_KEY = "aoneclicks_favs_v1";
  const MAX_QTY = 99;
  const $ = (sel, root = document) => root.querySelector(sel);

  const fmt = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
  const money = (n) => fmt.format(n);

  // Precio total por volumen: paquetes de 3 + resto (1 o 2) con su tarifa
  const lineTotal = (p, qty) => Math.floor(qty / 3) * p.prices[3] + (qty % 3 ? p.prices[qty % 3] : 0);

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

  function loadCart() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const clean = {};
      for (const p of PRODUCTS) {
        const q = Number(raw[p.id]);
        if (Number.isInteger(q) && q > 0) clean[p.id] = Math.min(q, MAX_QTY);
      }
      return clean;
    } catch { return {}; }
  }
  const saveCart = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch { /* sin almacenamiento */ } };
  const cartLines = () => PRODUCTS.filter((p) => cart[p.id]).map((p) => ({ product: p, qty: cart[p.id] }));
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
  function productImg(p) {
    const img = el("img", { src: p.image, alt: p.name, loading: "lazy", width: "400", height: "300" });
    img.addEventListener("error", () => { img.src = FALLBACK_IMG; }, { once: true });
    return img;
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

  // ---------- Catálogo ----------
  function renderCatalog() {
    const grid = $("#productGrid");
    grid.replaceChildren();
    PRODUCTS.forEach((p, i) => {
      let units = 1;
      const priceEl = el("span", { class: "card__price" });
      const unitEl = el("span", { class: "card__unit" });
      const saveEl = el("span", { class: "card__save" });
      const packs = [1, 2, 3].map((n) => el("button", {
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

      const addBtn = el("button", { type: "button", class: "card__add", onclick: () => addToCart(p.id, units) });
      addBtn.innerHTML = CART_ICON + "<span>Agregar</span>";

      const imgBox = el("div", { class: "card__img" }, [productImg(p)]);
      if (badge) {
        const b = el("span", { class: "badge badge--" + badge.cls });
        b.innerHTML = badge.icon + "<span></span>";
        $("span", b).textContent = p.badge;
        imgBox.append(b);
      }
      imgBox.append(heart);
      imgBox.addEventListener("click", () => openProduct(p));

      grid.append(el("article", { class: "card", style: `animation-delay:${i * 60}ms` }, [
        imgBox,
        el("div", { class: "card__body" }, [
          el("div", { class: "card__meta" }, [
            el("span", { class: "card__cat", text: p.category }),
            el("button", { type: "button", class: "card__more", onclick: () => openProduct(p) }, "Ver ficha técnica")
          ]),
          el("h3", { class: "card__title", text: p.name, onclick: () => openProduct(p) }),
          el("div", { class: "packs", role: "group", "aria-label": "Unidades de " + p.name }, packs),
          el("div", { class: "card__pricing" }, [priceEl, saveEl, unitEl]),
          addBtn
        ])
      ]));
      setUnits(1);
    });
  }

  // ---------- Carrito ----------
  function addToCart(id, qty) {
    cart[id] = Math.min(MAX_QTY, (cart[id] || 0) + qty);
    saveCart(); renderCart();
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
    for (const { product: p, qty } of lines) {
      const input = el("input", { type: "number", min: "1", max: String(MAX_QTY), value: String(qty), "aria-label": "Unidades de " + p.name });
      const setQty = (v) => { cart[p.id] = clampQty(v); saveCart(); renderCart(); };
      input.addEventListener("change", () => setQty(input.value));
      list.append(el("li", { class: "cart-item" }, [
        productImg(p),
        el("div", {}, [
          el("div", { class: "cart-item__name", text: p.name }),
          el("div", { class: "cart-item__sub", text: `${qty} ${qty === 1 ? "unidad" : "unidades"} = ${money(lineTotal(p, qty))}` }),
          el("button", { type: "button", class: "cart-item__remove", onclick: () => { delete cart[p.id]; saveCart(); renderCart(); } }, "Eliminar")
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
    for (const { product: p, qty } of cartLines()) {
      list.append(el("li", {}, [el("span", { text: `${qty} × ${p.name}` }), el("span", { text: money(lineTotal(p, qty)) })]));
    }
    $("#summaryTotal").textContent = money(cartTotal());
    checkoutModal.hidden = false; syncScrollLock();
    $("#nombre").focus();
  }
  function closeCheckout() { checkoutModal.hidden = true; syncScrollLock(); }

  function openProduct(p) {
    const d = (typeof PRODUCT_DETAILS !== "undefined" && PRODUCT_DETAILS[p.id]) || { description: "", specs: [], note: "" };
    const badge = BADGES[p.badge];
    let units = 1;
    const priceEl = el("span", { class: "card__price" });
    const unitEl = el("span", { class: "card__unit" });
    const saveEl = el("span", { class: "card__save" });
    const packs = [1, 2, 3].map((n) => el("button", {
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
    const addBtn = el("button", { type: "button", class: "card__add", onclick: () => { addToCart(p.id, units); closeProduct(); } });
    addBtn.innerHTML = CART_ICON + "<span>Agregar al carrito</span>";

    const imgBox = el("div", { class: "pd__img" }, [productImg(p)]);
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
    const info = el("div", { class: "pd__info" }, [
      el("span", { class: "pd__cat", text: p.category }),
      el("h2", { class: "pd__title", id: "pdTitle", text: p.name }),
      d.headline ? el("p", { class: "pd__headline", text: d.headline }) : "",
      el("p", { class: "pd__desc", text: d.description || "" }),
      benefits ? el("h3", { class: "pd__h", text: "¿Por qué te va a encantar?" }) : "",
      benefits || "",
      d.howto ? el("h3", { class: "pd__h", text: "¿Cómo se usa?" }) : "",
      d.howto ? el("p", { class: "pd__text", text: d.howto }) : "",
      el("h3", { class: "pd__h", text: "Ficha técnica" }),
      specs
    ]);
    if (d.note) info.append(el("p", { class: "pd__note", text: d.note }));
    info.append(
      el("div", { class: "packs", role: "group", "aria-label": "Unidades de " + p.name }, packs),
      el("div", { class: "card__pricing" }, [priceEl, saveEl, unitEl]),
      addBtn
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
    const lines = cartLines().map(({ product: p, qty }) => `• ${qty} ${qty === 1 ? "unidad" : "unidades"} de ${p.name} — ${money(lineTotal(p, qty))}`);
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
    const win = window.open(waUrl(buildMessage(data)), "_blank", "noopener,noreferrer");
    if (!win) window.location.href = waUrl(buildMessage(data));
    cart = {}; saveCart(); renderCart(); form.reset(); closeCheckout();
    toast("Pedido enviado a WhatsApp");
  }

  // ---------- Inicialización ----------
  function init() {
    $("#year").textContent = new Date().getFullYear();

    document.querySelectorAll("[data-social]").forEach((a) => {
      const url = STORE_CONFIG.social[a.dataset.social];
      if (url) a.href = url;
    });
    $("#waFloat").href = waUrl(STORE_CONFIG.supportMessage);

    renderCatalog();
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
        window.open(`https://wa.me/573027350151?text=${encodeURIComponent(text)}`, "_blank", "noopener");
        status.textContent = "¡Listo! Continúa el envío en WhatsApp. Te responderemos pronto.";
        status.classList.add("ok");
        contactForm.reset();
        btn.disabled = false; btn.textContent = "Enviar mensaje";
      }, 600);
    });

    const cookieBanner = $("#cookieBanner");
    const COOKIE_KEY = "aoneclicks_cookies";
    let cookieChoice = null;
    try { cookieChoice = localStorage.getItem(COOKIE_KEY); } catch (e) { /* almacenamiento no disponible */ }
    if (!cookieChoice) cookieBanner.hidden = false;
    cookieBanner.addEventListener("click", (e) => {
      const choice = e.target.closest("[data-cookie]")?.dataset.cookie;
      if (!choice) return;
      try { localStorage.setItem(COOKIE_KEY, choice); } catch (err) { /* ignorar */ }
      cookieBanner.hidden = true;
    });
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-cookie-settings]")) cookieBanner.hidden = false;
    });

    const form = $("#orderForm");
    form.addEventListener("submit", onSubmit);
    form.addEventListener("input", (e) => { if (e.target.name in RULES || e.target.name === "terminos") setError(e.target.name, ""); });
  }

  init();
})();
