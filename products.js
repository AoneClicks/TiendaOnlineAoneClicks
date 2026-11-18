// Edita aquí tus productos. Coloca las imágenes en la carpeta /images
// prices: precio total en COP (sin puntos ni símbolos) según unidades: 1, 2 o 3.
// badge: "Verificado" | "Premium" | "Exclusivo"
// gallery: fotos adicionales (opcional). Se ven al deslizar la foto principal.
// tag: etiqueta corta sobre la foto (opcional), por ejemplo "🔥 +500 vendidos".
// sizes: tallas para elegir (opcional). Agrega soldOut: true a una talla agotada. guide = imagen de la guía de tallas.
// promo: nombre de la promoción (opcional), se muestra en una franja bajo la foto. Ej: "Black Friday".
// compareAt: precio "antes" (opcional). Muestra el precio tachado, el % de descuento y cuánto se ahorra.
// colors: colores para elegir (opcional). Agrega soldOut: true a un color agotado y no se podrá pedir.
// El orden de esta lista es el orden del catálogo: los productos similares van seguidos.
const PRODUCTS = [
  // Suplementos
  { id: 1, name: "Glucora Berberine Gotero – Fórmula 5 en 1 (50 ml)", category: "Salud", stock: 1000, badge: "Premium", prices: { 1: 74900, 2: 100900, 3: 125900 }, image: "img/glucora-berberine-gotero.webp" },
  { id: 10, name: "Vyxion Pure Soursop", category: "Salud", stock: 100, badge: "Premium", prices: { 1: 95900, 2: 134800, 3: 173700 }, image: "img/vyxion-pure-soursop.webp" },
  { id: 11, name: "Drenaje Linfatico Gotas", category: "Salud", stock: 150, badge: "Premium", prices: { 1: 90900, 2: 126900, 3: 152900 }, image: "img/drenaje-linfatico-gotas.webp" },
  { id: 13, name: "Magnesium Citrate", category: "Salud", stock: 150, badge: "Premium", prices: { 1: 94000, 2: 132900, 3: 161900 }, image: "img/magnesium-citrate.webp" },
  // Cuidado facial y del cabello
  { id: 3, name: "Tensorix Ojeras Bolsas Y Lineas", category: "Belleza", stock: 280, badge: "Verificado", prices: { 1: 80900, 2: 113900, 3: 144900 }, image: "img/tensorix-ojeras.webp" },
  { id: 2, name: "Pala Ultrasonica Facial Jh", category: "Belleza", stock: 100, badge: "Verificado", prices: { 1: 90900, 2: 131900, 3: 173900 }, image: "img/pala-ultrasonica-facial-jh.webp" },
  { id: 6, name: "Cepillo De Cabello Restaurador", category: "Belleza", stock: 48, badge: "Exclusivo", prices: { 1: 95900, 2: 143900, 3: 191900 }, image: "img/cepillo-restaurador.webp", gallery: ["img/cepillo-restaurador-2.webp", "img/cepillo-restaurador-3.webp", "img/cepillo-restaurador-4.webp"] },
  { id: 9, name: "Cepillo Alisador De Cabello Fh909", category: "Belleza", stock: 225, badge: "Premium", prices: { 1: 71900, 2: 94900, 3: 116900 }, image: "img/cepillo-alisador-fh909.webp", gallery: ["img/cepillo-alisador-fh909-2.webp", "img/cepillo-alisador-fh909-3.webp"] },
  // Joyería y accesorios
  { id: 15, name: "Conjunto Corona Imperial: Pulsera de Balines 8 mm + Anillo", category: "Joyería", stock: 150, badge: "Exclusivo", tag: "🔥 +500 vendidos", prices: { 1: 119900 }, compareAt: 169900, promo: "Black Friday", image: "img/conjunto-corona-imperial.webp", gallery: ["img/guia-tallas-anillo.webp", "img/conjunto-corona-imperial-video.mp4"],
    sizes: { label: "Talla del anillo", guide: "img/guia-tallas-anillo.webp", values: [{ name: "3", hint: "Ø 14 mm" }, { name: "3.5", hint: "Ø 14,4 mm" }, { name: "4", hint: "Ø 14,8 mm" }, { name: "4.5", hint: "Ø 15,2 mm" }, { name: "5", hint: "Ø 15,6 mm" }, { name: "5.5", hint: "Ø 16 mm" }, { name: "6", hint: "Ø 16,5 mm" }, { name: "6.5", hint: "Ø 16,9 mm" }, { name: "7", hint: "Ø 17,3 mm" }, { name: "7.5", hint: "Ø 17,7 mm" }, { name: "8", hint: "Ø 18,2 mm" }, { name: "8.5", hint: "Ø 18,6 mm" }, { name: "9", hint: "Ø 19 mm" }, { name: "9.5", hint: "Ø 19,4 mm" }, { name: "10", hint: "Ø 19,8 mm" }, { name: "10.5", hint: "Ø 20,2 mm" }, { name: "11", hint: "Ø 20,6 mm" }, { name: "11.5", hint: "Ø 21 mm" }, { name: "12", hint: "Ø 21,4 mm" }, { name: "12.5", hint: "Ø 21,8 mm" }, { name: "13", hint: "Ø 22,2 mm" }] } },
  { id: 16, name: "Conjunto Sagrado Corazón: Cadena + Pulsera Hilo Rojo – Oro Laminado 18K", category: "Joyería", stock: 150, badge: "Premium", prices: { 1: 119900 }, compareAt: 159900, promo: "Black Friday", image: "img/sagrado-corazon-estuche.webp", gallery: ["img/sagrado-corazon-puesto.webp", "img/sagrado-corazon-detalle.webp"] },
  // Iluminación solar
  { id: 4, name: "Reflector Solar 500 W", category: "Hogar", stock: 193, badge: "Verificado", prices: { 1: 326900, 2: 622900, 3: 923900 }, image: "img/reflector-solar-500w.webp" },
  { id: 12, name: "Luces LED Solares 200 Bombillos (12 m)", category: "Hogar", stock: 120, badge: "Verificado", prices: { 1: 99900, 2: 139900 }, image: "img/luces-led-solar-hd.webp", gallery: ["img/luces-led-solar-real.webp", "img/luces-led-solar-panel.webp", "img/luces-led-solar-control.webp"], colors: [{ name: "Blanco", swatch: "#f3f6ff" }, { name: "Multicolor", swatch: "conic-gradient(#ff4d4d, #ffd23f, #3ddc84, #3d8bff, #c04dff, #ff4d4d)" }, { name: "Amarillo", swatch: "#ffc53d", soldOut: true }] },
  { id: 14, name: "Luces LED Solares 500 Bombillos (25 m)", category: "Hogar", stock: 120, badge: "Premium", prices: { 1: 119900, 2: 184900 }, image: "img/luces-led-solar-hd.webp", gallery: ["img/luces-led-solar-real.webp", "img/luces-led-solar-panel.webp", "img/luces-led-solar-control.webp"], colors: [{ name: "Blanco", swatch: "#f3f6ff" }, { name: "Multicolor", swatch: "conic-gradient(#ff4d4d, #ffd23f, #3ddc84, #3d8bff, #c04dff, #ff4d4d)" }, { name: "Amarillo", swatch: "#ffc53d", soldOut: true }] },
  // Hogar y tecnología
  { id: 5, name: "Limpiador A Vapor Para El Hogar", category: "Tecnología", stock: 68, badge: "Verificado", prices: { 1: 270900, 2: 505900, 3: 744900 }, image: "img/limpiador-a-vapor.webp" },
  { id: 8, name: "Organizador Perchero Y Zapatero 4 In 1", category: "Hogar", stock: 192, badge: "Verificado", prices: { 1: 104900, 2: 162900, 3: 219900 }, image: "img/organizador-perchero-zapatero.webp" },
  { id: 7, name: "Mini Rastreador Gps", category: "Tecnología", stock: 170, badge: "Exclusivo", prices: { 1: 79900, 2: 109900, 3: 139900 }, image: "img/mini-rastreador-gps.webp", gallery: ["img/mini-rastreador-gps-2.webp", "img/mini-rastreador-gps-3.webp", "img/mini-rastreador-gps-4.webp"] }
];

// Configuración general
const STORE_CONFIG = {
  // Producto destacado en la portada (cámbialo cada mes)
  featured: {
    id: 15,
    image: "img/conjunto-corona-imperial.webp",
    theme: "blackfriday",
    label: "Black Friday",
    cardTag: "🖤 Black Friday",
    title: "Conjunto Corona Imperial",
    text: "Pulsera de balines diamantados de 8 mm + anillo con corona en alto relieve y microcircones. Oro laminado 18K. El regalo perfecto para esta Navidad."
  },
  // Desde cuántas unidades se ofrece precio por mayor (por WhatsApp)
  wholesaleFrom: 4,
  whatsappNumber: "573238849321",
  supportMessage: "¡Hola AoneClicks Shopping! Deseo más información y asesoría sobre un producto.",
  social: {
    facebook: "https://www.facebook.com/aonecliks.shopping",
    instagram: "https://www.instagram.com/aoneclicks.shopping",
    tiktok: "https://www.tiktok.com/@aoneclicks.shopping"
  }
};
