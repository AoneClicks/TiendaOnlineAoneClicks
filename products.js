// Edita aquí tus productos. Coloca las imágenes en la carpeta /images
// prices: precio total en COP (sin puntos ni símbolos) según unidades: 1, 2 o 3.
// badge: "Verificado" | "Premium" | "Exclusivo"
// gallery: fotos adicionales (opcional). Se ven al deslizar la foto principal.
// colors: colores para elegir (opcional). Agrega soldOut: true a un color agotado y no se podrá pedir.
// El orden de esta lista es el orden del catálogo: los productos similares van seguidos.
const PRODUCTS = [
  // Suplementos
  { id: 1, name: "Glucora Berberine Gotero", category: "Salud", stock: 1000, badge: "Premium", prices: { 1: 74900, 2: 100900, 3: 125900 }, image: "glucora-berberine-gotero.jpg" },
  { id: 10, name: "Vyxion Pure Soursop", category: "Salud", stock: 100, badge: "Premium", prices: { 1: 95900, 2: 134800, 3: 173700 }, image: "vyxion-pure-soursop.jpeg" },
  { id: 11, name: "Drenaje Linfatico Gotas", category: "Salud", stock: 150, badge: "Premium", prices: { 1: 90900, 2: 126900, 3: 152900 }, image: "drenaje-linfatico-gotas.jpg" },
  { id: 13, name: "Magnesium Citrate", category: "Salud", stock: 150, badge: "Premium", prices: { 1: 94000, 2: 132900, 3: 161900 }, image: "magnesium-citrate.jpg" },
  // Cuidado facial y del cabello
  { id: 3, name: "Tensorix Ojeras Bolsas Y Lineas", category: "Belleza", stock: 280, badge: "Verificado", prices: { 1: 80900, 2: 113900, 3: 144900 }, image: "tensorix-ojeras.jpg" },
  { id: 2, name: "Pala Ultrasonica Facial Jh", category: "Belleza", stock: 100, badge: "Verificado", prices: { 1: 90900, 2: 131900, 3: 173900 }, image: "pala-ultrasonica-facial-jh.jpg" },
  { id: 6, name: "Cepillo De Cabello Restaurador", category: "Belleza", stock: 48, badge: "Exclusivo", prices: { 1: 95900, 2: 143900, 3: 191900 }, image: "cepillo-restaurador.jpg", gallery: ["cepillo-restaurador-2.jpg", "cepillo-restaurador-3.jpg", "cepillo-restaurador-4.jpg"] },
  { id: 9, name: "Cepillo Alisador De Cabello Fh909", category: "Belleza", stock: 225, badge: "Premium", prices: { 1: 71900, 2: 94900, 3: 116900 }, image: "cepillo-alisador-fh909.jpg", gallery: ["cepillo-alisador-fh909-2.jpg", "cepillo-alisador-fh909-3.jpg"] },
  // Iluminación solar
  { id: 4, name: "Reflector Solar 500 W", category: "Hogar", stock: 193, badge: "Verificado", prices: { 1: 326900, 2: 622900, 3: 923900 }, image: "reflector-solar-500w.jpg" },
  { id: 12, name: "Luces LED Solares 200 Bombillos (12 m)", category: "Hogar", stock: 120, badge: "Verificado", prices: { 1: 99900, 2: 139900 }, image: "luces-led-solar-hd.jpg", gallery: ["luces-led-solar-real.jpg", "luces-led-solar-panel.jpg", "luces-led-solar-control.jpg"], colors: [{ name: "Blanco", swatch: "#f3f6ff" }, { name: "Multicolor", swatch: "conic-gradient(#ff4d4d, #ffd23f, #3ddc84, #3d8bff, #c04dff, #ff4d4d)" }, { name: "Amarillo", swatch: "#ffc53d", soldOut: true }] },
  { id: 14, name: "Luces LED Solares 500 Bombillos (25 m)", category: "Hogar", stock: 120, badge: "Premium", prices: { 1: 119900, 2: 184900 }, image: "luces-led-solar-hd.jpg", gallery: ["luces-led-solar-real.jpg", "luces-led-solar-panel.jpg", "luces-led-solar-control.jpg"], colors: [{ name: "Blanco", swatch: "#f3f6ff" }, { name: "Multicolor", swatch: "conic-gradient(#ff4d4d, #ffd23f, #3ddc84, #3d8bff, #c04dff, #ff4d4d)" }, { name: "Amarillo", swatch: "#ffc53d", soldOut: true }] },
  // Hogar y tecnología
  { id: 5, name: "Limpiador A Vapor Para El Hogar", category: "Tecnología", stock: 68, badge: "Verificado", prices: { 1: 270900, 2: 505900, 3: 744900 }, image: "limpiador-a-vapor.jpg" },
  { id: 8, name: "Organizador Perchero Y Zapatero 4 In 1", category: "Hogar", stock: 192, badge: "Verificado", prices: { 1: 104900, 2: 162900, 3: 219900 }, image: "organizador-perchero-zapatero.jpg" },
  { id: 7, name: "Mini Rastreador Gps", category: "Tecnología", stock: 170, badge: "Exclusivo", prices: { 1: 79900, 2: 109900, 3: 139900 }, image: "mini-rastreador-gps.jpg", gallery: ["mini-rastreador-gps-2.webp", "mini-rastreador-gps-3.webp", "mini-rastreador-gps-4.webp"] }
];

// Configuración general
const STORE_CONFIG = {
  // Producto destacado en la portada (cámbialo cada mes)
  featured: {
    id: 12,
    image: "luces-led-solar-hd.jpg",
    label: "Producto del mes · Especial de Navidad",
    title: "Ilumina tu Navidad con energía solar",
    text: "Cadena de luces LED que se carga con el sol y se enciende sola al anochecer. Elige 200 bombillos (12 m) o 500 bombillos (25 m), en blanco o multicolor."
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
