// Tema navideño de AoneClicks (complemento): nieve, guirnalda dorada, gorro en el logo,
// esferas, reno y duende animados, y barra con cuenta regresiva.
// Si borras este archivo (y navidad.css) la tienda queda igual que antes.
// Se activa solo del 1 de noviembre al 6 de enero. Para apagarlo antes, cambia ACTIVO a false.
(() => {
  "use strict";
  const ACTIVO = true;
  const SNOW_KEY = "aoneclicks_nieve";

  const now = new Date();
  const y = now.getFullYear();
  const enTemporada = now >= new Date(y, 10, 1) || now < new Date(y, 0, 7);
  if (!ACTIVO || !enTemporada) return;

  document.documentElement.classList.add("xmas");
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s) => document.querySelector(s);
  const h = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const SVGNS = "http://www.w3.org/2000/svg";

  const ICON = {
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 6.9H22l-6 4.5 2.3 7L12 16.2 5.7 20.4 8 13.4 2 8.9h7.6z"/></svg>',
    gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7h-2.2A3 3 0 0 0 12 3.8 3 3 0 0 0 6.2 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-5-1.5a1.5 1.5 0 0 1 0 3h-2v-1A2 2 0 0 1 15 5.5zM9 5.5a2 2 0 0 1 2 2v1H9a1.5 1.5 0 0 1 0-3zM5 9h6v2H5zm1 4h5v6H6zm7 6v-6h5v6zm6-8h-6V9h6z"/></svg>',
    flake: '<svg viewBox="0 0 24 24" aria-hidden="true"><g stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"/><path d="M9.5 3.5 12 6l2.5-2.5M9.5 20.5 12 18l2.5 2.5M3.6 10.4l3.3-1 -.9-3.3M20.4 13.6l-3.3 1 .9 3.3M3.6 13.6l3.3 1-.9 3.3M20.4 10.4l-3.3-1 .9-3.3"/></g></svg>'
  };

  // ---------- Gorro de Papá Noel sobre el cuadro azul del logo ----------
  const logo = $(".logo");
  const logoImg = logo && logo.querySelector("img");
  if (logo && logoImg) {
    const hat = h("span", "xmas-hat", `<svg viewBox="0 0 100 82" aria-hidden="true">
      <defs>
        <linearGradient id="xhRed" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e2384a"/><stop offset=".6" stop-color="#b3172b"/><stop offset="1" stop-color="#7d0f1d"/></linearGradient>
        <linearGradient id="xhFur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe5ef"/></linearGradient>
      </defs>
      <path d="M10 60 C 16 30, 38 8, 62 8 C 78 8, 90 18, 92 34 C 93 40, 92 44, 90 46 L 84 44 C 84 34, 78 28, 70 30 C 60 33, 74 50, 76 60 Z" fill="url(#xhRed)"/>
      <path d="M62 8 C 78 8, 90 18, 92 34 L 88 36 C 84 24, 74 18, 64 18 Z" fill="#ffffff" opacity=".18"/>
      <rect x="3" y="56" width="80" height="18" rx="9" fill="url(#xhFur)"/>
      <path d="M8 62 h70 M10 68 h66" stroke="#c9d2e1" stroke-width="1.4" stroke-dasharray="2 4" stroke-linecap="round"/>
      <circle cx="90" cy="50" r="9" fill="url(#xhFur)"/>
    </svg>`);
    logo.append(hat);
    // En el logo, el cuadro azul ocupa del 30% al 71% del ancho y empieza arriba (5% del alto).
    const placeHat = () => {
      const w = logoImg.offsetWidth, ht = logoImg.offsetHeight;
      if (!w) return;
      // El gorro se lo "pone" la bolsa blanca del logo: inclinado como ella y sin salirse del menú
      const hatW = w * 0.34;
      hat.style.width = hatW + "px";
      hat.style.left = logoImg.offsetLeft + w * 0.46 + "px";
      const hdr = logo.closest(".header") || document.body;
      const minTop = hdr.getBoundingClientRect().top - logo.getBoundingClientRect().top + 1;
      hat.style.top = Math.max(minTop, logoImg.offsetTop - ht * 0.04) + "px";
    };
    if (logoImg.complete) placeHat(); else logoImg.addEventListener("load", placeHat);
    window.addEventListener("resize", placeHat);
  }

  // ---------- Guirnalda dorada bajo el menú (ondas con bombillos) ----------
  const header = $(".header");
  if (header) {
    const wrap = h("div", "xmas-garland");
    wrap.setAttribute("aria-hidden", "true");
    header.append(wrap);
    const drawGarland = () => {
      const W = header.clientWidth, swag = W < 640 ? 70 : 96, depth = 14, H = 30;
      const n = Math.ceil(W / swag);
      let d = "", bulbs = "";
      for (let i = 0; i < n; i++) {
        const x1 = i * swag, x2 = x1 + swag;
        d += `${i ? "" : `M ${x1} 2 `}Q ${x1 + swag / 2} ${2 + depth * 2} ${x2} 2 `;
        for (const t of [0.25, 0.5, 0.75]) {
          const x = x1 + swag * t, yy = 2 + depth * 4 * t * (1 - t);
          const k = (i * 3 + Math.round(t * 4)) % 3;
          bulbs += `<g class="xmas-gbulb xmas-gbulb--${k}" transform="translate(${x.toFixed(1)} ${yy.toFixed(1)})"><rect x="-2" y="-1" width="4" height="4" rx="1" fill="#6b5a2e"/><ellipse cx="0" cy="7" rx="3.6" ry="5" class="xmas-gbulb__glass"/></g>`;
        }
      }
      wrap.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="${SVGNS}">
        <defs><filter id="xgGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <path d="${d}" fill="none" stroke="#3a3324" stroke-width="1.4" opacity=".85"/>
        <g filter="url(#xgGlow)">${bulbs}</g></svg>`;
    };
    drawGarland();
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(drawGarland, 150); });
  }

  // ---------- Portada: barra, esferas, nieve en el suelo, reno y duende ----------
  const hero = $(".hero");
  if (hero) {
    const navidad = new Date(y, 11, 25);
    const dias = Math.ceil((navidad - new Date(y, now.getMonth(), now.getDate())) / 86400000);
    const m = now.getMonth(), dd = now.getDate();
    let msg;
    if (m === 11 && dd === 24) msg = "¡Feliz Nochebuena! Gracias por elegir AoneClicks";
    else if (m === 11 && dd === 25) msg = "¡Feliz Navidad de parte de AoneClicks!";
    else if ((m === 11 && dd >= 26) || m === 0) msg = "¡Feliz Año Nuevo! Empieza el año con AoneClicks";
    else msg = `Temporada navideña · Faltan <strong>${dias} ${dias === 1 ? "día" : "días"}</strong> para Navidad`;
    hero.prepend(h("div", "xmas-bar",
      `<span class="xmas-bar__item">${ICON.star}<span>${msg}</span></span><span class="xmas-bar__sep" aria-hidden="true"></span><span class="xmas-bar__item">${ICON.gift}<span>Regala con envío GRATIS y pago contraentrega</span></span>`));

    const orn = (cls, color) => `<span class="xmas-orn ${cls}"><i class="xmas-orn__line"></i><i class="xmas-orn__cap"></i><i class="xmas-orn__ball xmas-orn__ball--${color}"></i></span>`;
    const orns = h("div", "xmas-orns", orn("xmas-orn--1", "wine") + orn("xmas-orn--2", "gold") + orn("xmas-orn--3", "navy") + orn("xmas-orn--4", "gold"));
    orns.setAttribute("aria-hidden", "true");
    hero.prepend(orns);

    hero.append(h("div", "xmas-drift", `<svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34 C 120 14 220 40 360 30 S 600 8 760 28 S 1020 46 1160 24 S 1360 18 1440 30 L 1440 60 L 0 60 Z"/></svg>`));

    // Papá Noel saludando en lugar del punto verde del slogan
    const eyebrow = hero.querySelector(".hero__eyebrow");
    if (eyebrow) eyebrow.prepend(h("span", "xmas-santa", `<svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <radialGradient id="snFace" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#ffe0c7"/><stop offset="1" stop-color="#f2b896"/></radialGradient>
        <linearGradient id="snRed" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e2384a"/><stop offset="1" stop-color="#9e1426"/></linearGradient>
      </defs>
      <g class="sn-all">
        <path d="M10 64 C 10 52, 18 46, 32 46 C 46 46, 54 52, 54 64 Z" fill="url(#snRed)"/>
        <path d="M30 47 h4 v17 h-4z" fill="#f4f7fb"/>
        <g class="sn-arm">
          <path d="M47 52 C 52 46, 55 40, 56 33" stroke="url(#snRed)" stroke-width="7" stroke-linecap="round" fill="none"/>
          <rect x="51.5" y="29" width="9" height="5" rx="2.5" fill="#f4f7fb" transform="rotate(-12 56 31)"/>
          <circle cx="56.5" cy="25" r="4.6" fill="#f4f7fb"/>
          <path d="M53.6 22.4 v-3 M56.5 21.4 v-3.4 M59.4 22.4 v-3" stroke="#f4f7fb" stroke-width="2.6" stroke-linecap="round"/>
        </g>
        <g class="sn-head">
          <path d="M17 31 C 15 44, 22 54, 32 54 C 42 54, 49 44, 47 31 C 43 37, 21 37, 17 31 Z" fill="#f4f7fb"/>
          <circle cx="32" cy="29" r="12" fill="url(#snFace)"/>
          <circle cx="24.5" cy="32" r="3" fill="#f39a9a" opacity=".6"/><circle cx="39.5" cy="32" r="3" fill="#f39a9a" opacity=".6"/>
          <path d="M25.5 27.5 q 2.5 -2.6 5 0 M33.5 27.5 q 2.5 -2.6 5 0" stroke="#3b2418" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M22 37 C 26 33, 30 34, 32 36 C 34 34, 38 33, 42 37 C 38 40, 34 39, 32 37.5 C 30 39, 26 40, 22 37 Z" fill="#ffffff"/>
          <circle cx="32" cy="33.2" r="2.6" fill="#e98a7a"/>
          <path d="M28.5 42 q 3.5 2.6 7 0" stroke="#b85a4a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
          <g transform="translate(64 0) scale(-1 1)">
            <path d="M19 22 C 20 10, 34 4, 44 9 C 50 12, 53 18, 52 24 L 47 23 C 46 18, 42 15, 38 16 C 40 19, 43 21, 45 22 Z" fill="url(#snRed)"/>
            <circle class="sn-pom" cx="52" cy="26" r="4" fill="#f4f7fb"/>
          </g>
          <rect x="17" y="19" width="30" height="7" rx="3.5" fill="#f4f7fb"/>
        </g>
      </g>
    </svg>`));

    // Reno (izquierda) y duende (derecha)
    const reindeer = h("div", "xmas-char xmas-char--left", `<svg class="xmas-reindeer" viewBox="0 0 220 230" aria-hidden="true">
      <ellipse cx="108" cy="222" rx="78" ry="7" fill="#000" opacity=".18"/>
      <g class="rd-body">
        <g class="rd-leg rd-leg--back-a"><path d="M62 150 L 58 205" stroke="#7b4a28" stroke-width="13" stroke-linecap="round"/><rect x="50" y="200" width="17" height="11" rx="4" fill="#2b2118"/></g>
        <g class="rd-leg rd-leg--front-a"><path d="M128 152 L 130 206" stroke="#7b4a28" stroke-width="13" stroke-linecap="round"/><rect x="122" y="201" width="17" height="11" rx="4" fill="#2b2118"/></g>
        <path d="M40 128 c -12 -6 -14 -20 -2 -24" stroke="#f3e6d6" stroke-width="10" stroke-linecap="round" fill="none"/>
        <ellipse cx="96" cy="138" rx="62" ry="34" fill="#9a6036"/>
        <ellipse cx="100" cy="150" rx="44" ry="18" fill="#d8a874"/>
        <g class="rd-leg rd-leg--back-b"><path d="M76 156 L 74 208" stroke="#8d5730" stroke-width="13" stroke-linecap="round"/><rect x="66" y="203" width="17" height="11" rx="4" fill="#2b2118"/></g>
        <g class="rd-leg rd-leg--front-b"><path d="M142 150 L 146 207" stroke="#8d5730" stroke-width="13" stroke-linecap="round"/><rect x="138" y="202" width="17" height="11" rx="4" fill="#2b2118"/></g>
        <path d="M132 128 C 140 104, 146 88, 150 76 L 170 84 C 166 100, 160 118, 152 136 Z" fill="#9a6036"/>
        <path d="M138 112 C 150 116, 162 116, 168 108 L 166 120 C 158 128, 146 128, 136 124 Z" fill="#8b1e2d"/>
        <circle cx="153" cy="126" r="6" fill="#e7b84a"/><circle cx="153" cy="126" r="2" fill="#7a5a12"/>
        <g class="rd-head">
          <g stroke="#6b4423" stroke-width="5.5" stroke-linecap="round" fill="none">
            <path d="M150 52 C 142 34, 140 22, 146 8"/><path d="M144 28 L 132 18"/><path d="M147 16 L 156 6"/>
            <path d="M166 50 C 174 32, 184 24, 196 22"/><path d="M178 32 L 176 16"/><path d="M188 25 L 198 12"/>
          </g>
          <ellipse cx="146" cy="58" rx="12" ry="6" transform="rotate(-35 146 58)" fill="#86532d"/>
          <ellipse cx="146" cy="58" rx="7" ry="3" transform="rotate(-35 146 58)" fill="#f0c49b"/>
          <ellipse cx="165" cy="70" rx="24" ry="21" fill="#a0683c"/>
          <ellipse cx="184" cy="80" rx="17" ry="12" fill="#d3a273"/>
          <circle cx="160" cy="64" r="4.2" fill="#1d1712"/><circle cx="161.4" cy="62.6" r="1.4" fill="#fff"/>
          <path d="M174 88 q 6 4 12 0" stroke="#5a3a20" stroke-width="2" fill="none" stroke-linecap="round"/>
          <circle class="rd-nose" cx="199" cy="77" r="7.5" fill="#d62839"/>
          <circle cx="197" cy="74.5" r="2.2" fill="#fff" opacity=".7"/>
        </g>
      </g>
    </svg>`);
    const elf = h("div", "xmas-char xmas-char--right", `<svg class="xmas-elf" viewBox="0 0 170 240" aria-hidden="true">
      <ellipse cx="86" cy="232" rx="54" ry="7" fill="#000" opacity=".18"/>
      <g class="elf-body">
        <path d="M70 176 L 68 214" stroke="#fff" stroke-width="14" stroke-linecap="round"/>
        <path d="M70 182 L 69 190 M70 198 L 69 206" stroke="#c8202f" stroke-width="14"/>
        <path d="M100 176 L 102 214" stroke="#fff" stroke-width="14" stroke-linecap="round"/>
        <path d="M100 182 L 101 190 M101 198 L 102 206" stroke="#c8202f" stroke-width="14"/>
        <path d="M56 214 C 56 206, 80 206, 80 214 C 80 222, 60 224, 48 220 C 44 218, 44 212, 50 212 Z" fill="#1e5c38"/>
        <path d="M92 214 C 92 206, 116 206, 116 214 C 124 214, 128 220, 120 222 C 108 224, 92 222, 92 214 Z" fill="#1e5c38"/>
        <path d="M52 128 C 52 108, 118 108, 118 128 L 124 182 C 110 190, 60 190, 46 182 Z" fill="#1f7a43"/>
        <path d="M46 182 l 8 -10 l 8 10 l 8 -10 l 8 10 l 8 -10 l 8 10 l 8 -10 l 8 10 l 8 -10 l 8 10" fill="#1f7a43" stroke="#165c32" stroke-width="2"/>
        <rect x="49" y="150" width="72" height="11" fill="#2b2118"/>
        <rect x="76" y="148" width="18" height="15" rx="3" fill="none" stroke="#e7b84a" stroke-width="3.5"/>
        <path d="M60 116 l 12 10 l 13 -8 l 13 8 l 12 -10" fill="none" stroke="#c8202f" stroke-width="6" stroke-linejoin="round"/>
        <g class="elf-gift">
          <path d="M54 130 C 40 140, 36 156, 40 168" stroke="#1f7a43" stroke-width="13" stroke-linecap="round" fill="none"/>
          <rect x="22" y="160" width="40" height="34" rx="4" fill="#c8202f"/>
          <rect x="38" y="160" width="8" height="34" fill="#e7b84a"/><rect x="22" y="173" width="40" height="8" fill="#e7b84a"/>
          <path d="M42 160 c -10 -12 -18 -4 -10 2 M42 160 c 10 -12 18 -4 10 2" stroke="#e7b84a" stroke-width="4" fill="none"/>
          <circle cx="40" cy="168" r="7" fill="#f2c39f"/>
        </g>
        <g class="elf-arm">
          <path d="M116 130 C 130 118, 138 100, 140 84" stroke="#1f7a43" stroke-width="13" stroke-linecap="round" fill="none"/>
          <circle cx="141" cy="78" r="8" fill="#f2c39f"/>
        </g>
        <g class="elf-head">
          <path d="M52 78 L 34 66 L 50 90 Z" fill="#f2c39f"/><path d="M118 78 L 136 66 L 120 90 Z" fill="#f2c39f"/>
          <circle cx="85" cy="82" r="30" fill="#f6cfaa"/>
          <circle cx="70" cy="92" r="6" fill="#f29a9a" opacity=".55"/><circle cx="100" cy="92" r="6" fill="#f29a9a" opacity=".55"/>
          <circle cx="75" cy="80" r="3.6" fill="#2b2118"/><circle cx="95" cy="80" r="3.6" fill="#2b2118"/>
          <circle cx="76.2" cy="78.8" r="1.2" fill="#fff"/><circle cx="96.2" cy="78.8" r="1.2" fill="#fff"/>
          <path d="M74 95 q 11 9 22 0" stroke="#7a3a24" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M66 70 q 6 -4 12 -1 M92 69 q 6 -3 12 1" stroke="#8a5a2e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <g class="elf-hat">
            <path d="M52 64 C 56 30, 90 14, 116 22 C 130 26, 140 40, 136 56 L 126 52 C 126 40, 116 36, 108 40 C 112 50, 116 58, 118 64 Z" fill="#1f7a43"/>
            <rect x="48" y="58" width="74" height="13" rx="6.5" fill="#f4f7fb"/>
            <g class="elf-bell"><circle cx="135" cy="62" r="7" fill="#e7b84a"/><circle cx="135" cy="64" r="2" fill="#7a5a12"/></g>
          </g>
        </g>
      </g>
    </svg>`);
    hero.append(reindeer, elf);
  }

  // ---------- Nieve ----------
  let snowOn = true;
  try { snowOn = localStorage.getItem(SNOW_KEY) !== "off"; } catch (e) { /* sin almacenamiento */ }
  if (reduceMotion) snowOn = false;

  const canvas = h("canvas", "xmas-snow");
  canvas.setAttribute("aria-hidden", "true");
  document.body.append(canvas);
  const ctx = canvas.getContext("2d");
  let flakes = [], W = 0, H = 0, raf = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(80, Math.max(26, W / 18)));
    flakes = Array.from({ length: count }, () => newFlake(true));
  }
  function newFlake(anywhere) {
    const star = Math.random() < 0.18;
    const r = star ? 3.5 + Math.random() * 3 : 0.8 + Math.random() * 2.2;
    return { x: Math.random() * W, y: anywhere ? Math.random() * H : -12, r, star, rot: Math.random() * 6, vr: (Math.random() - .5) * .01,
      vy: 0.25 + r * 0.18, vx: Math.random() * 0.4 - 0.2, sway: Math.random() * Math.PI * 2, a: 0.35 + Math.random() * 0.4 };
  }
  function drawStar(f) {
    ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.rot);
    ctx.strokeStyle = `rgba(255,255,255,${f.a})`; ctx.lineWidth = 1; ctx.lineCap = "round";
    for (let k = 0; k < 6; k++) {
      ctx.rotate(Math.PI / 3);
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -f.r);
      ctx.moveTo(0, -f.r * .55); ctx.lineTo(f.r * .28, -f.r * .78);
      ctx.moveTo(0, -f.r * .55); ctx.lineTo(-f.r * .28, -f.r * .78);
      ctx.stroke();
    }
    ctx.restore();
  }
  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const f of flakes) {
      f.sway += 0.01; f.rot += f.vr;
      f.x += f.vx + Math.sin(f.sway) * 0.3; f.y += f.vy;
      if (f.y > H + 12 || f.x < -12 || f.x > W + 12) Object.assign(f, newFlake(false));
      if (f.star) drawStar(f);
      else { ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${f.a})`; ctx.fill(); }
    }
    raf = requestAnimationFrame(tick);
  }
  function start() { if (raf || reduceMotion) return; canvas.hidden = false; resize(); raf = requestAnimationFrame(tick); }
  function stop() { cancelAnimationFrame(raf); raf = 0; ctx.clearRect(0, 0, W, H); canvas.hidden = true; }
  window.addEventListener("resize", () => { if (raf) resize(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (snowOn) start(); });

  const btn = h("button", "xmas-toggle");
  btn.type = "button";
  const paint = () => {
    btn.innerHTML = ICON.flake + `<span>${snowOn ? "Quitar nieve" : "Poner nieve"}</span>`;
    btn.setAttribute("aria-pressed", String(snowOn));
    btn.setAttribute("aria-label", snowOn ? "Quitar la nieve" : "Poner la nieve");
  };
  btn.addEventListener("click", () => {
    snowOn = !snowOn;
    try { localStorage.setItem(SNOW_KEY, snowOn ? "on" : "off"); } catch (e) { /* ignorar */ }
    snowOn ? start() : stop();
    paint();
  });
  if (!reduceMotion) { paint(); document.body.append(btn); }
  snowOn ? start() : stop();
})();
