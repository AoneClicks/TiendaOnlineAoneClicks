// Ficha por producto (clave = id de PRODUCTS).
// headline: frase llamativa | description: qué es y cómo funciona | benefits: ventajas | howto: modo de uso
// specs: datos técnicos [etiqueta, valor] | note: aviso importante (opcional)
const PRODUCT_DETAILS = {
  1: {
    headline: "Tu aliado diario para cuidar tu bienestar",
    description: "Glucora Berberine es un suplemento en gotero que combina berberina con canela de Ceilán, cromo, melón amargo y cúrcuma, ingredientes muy usados en rutinas de bienestar. Su formato líquido es fácil de dosificar y se integra a tu día sin complicaciones.",
    benefits: ["Fórmula con 5 ingredientes naturales reconocidos", "Gotero que facilita medir cada dosis", "Presentación práctica para llevar a todas partes", "Ideal para acompañar una alimentación equilibrada y hábitos saludables"],
    howto: "Toma las gotas indicadas en el empaque, directamente o diluidas en agua, preferiblemente antes de las comidas.",
    specs: [["Presentación", "Frasco con gotero"], ["Ingredientes clave", "Berberina, canela de Ceilán, cromo, melón amargo y cúrcuma"], ["Uso", "Oral"], ["Incluye", "1 frasco por unidad"]],
    note: "Suplemento dietario: no es un medicamento ni reemplaza un tratamiento médico. Consulta a tu médico si tienes alguna condición o estás embarazada."
  },
  2: {
    headline: "Cuidado facial de salón, ahora en tu casa",
    description: "La pala ultrasónica facial utiliza vibración ultrasónica de alta frecuencia para ayudar a limpiar los poros en profundidad y a que tu piel absorba mejor tus cremas y sérums. Su diseño ligero y recargable te permite hacer tu rutina cuando quieras, sin salir de casa.",
    benefits: ["Ayuda a limpiar la piel en profundidad", "Mejora la absorción de tus productos de cuidado facial", "Diseño compacto, liviano y fácil de manejar", "Recargable por USB: sin pilas y lista para usar"],
    howto: "Aplica tu crema o sérum, y desliza la pala con suavidad sobre el rostro, siempre en movimientos ascendentes.",
    specs: [["Tipo", "Pala facial ultrasónica"], ["Zona de uso", "Rostro"], ["Alimentación", "Recargable por USB"], ["Incluye", "Equipo y cable de carga"]],
    note: "Uso externo. Evita zonas con heridas, irritación o infecciones en la piel."
  },
  3: {
    headline: "Una mirada más descansada y radiante",
    description: "Tensorix es un tratamiento para el contorno de ojos pensado para cuidar la zona más delicada del rostro. Su fórmula en tubo con aplicador se absorbe fácil y ayuda a hidratar, refrescar y mejorar la apariencia de ojeras, bolsas y líneas de expresión.",
    benefits: ["Cuida ojeras, bolsas y líneas de expresión", "Aplicador cómodo y preciso en la zona del ojo", "Textura ligera de rápida absorción", "Fácil de incluir en tu rutina de mañana y noche"],
    howto: "Aplica una pequeña cantidad en el contorno de los ojos y extiende con suaves toques, mañana y noche.",
    specs: [["Presentación", "Tubo con aplicador"], ["Zona de uso", "Contorno de ojos"], ["Frecuencia sugerida", "Mañana y noche"], ["Incluye", "1 tubo por unidad"]],
    note: "Uso externo. Si sientes irritación, suspende su uso. Los resultados pueden variar entre personas."
  },
  4: {
    headline: "Iluminación potente sin gastar en electricidad",
    description: "El Reflector Solar de 500 W funciona con energía del sol: su panel se carga durante el día y el reflector se enciende por la noche para iluminar tu patio, fachada, parqueadero o negocio. No requiere cableado ni instalación eléctrica.",
    benefits: ["Ahorras en tu factura de luz", "Instalación sencilla, sin cableado", "Gran potencia para exteriores amplios", "Ideal para seguridad de tu casa o negocio"],
    howto: "Ubica el panel en un lugar con buena exposición al sol, instala el reflector donde necesites luz y déjalo cargar durante el día.",
    specs: [["Potencia", "500 W"], ["Energía", "Solar"], ["Uso", "Exteriores"], ["Incluye", "Reflector y panel solar"]],
    note: "La duración de la luz depende de las horas de sol recibidas durante el día."
  },
  5: {
    headline: "Limpieza profunda y sin químicos fuertes",
    description: "Este limpiador a vapor genera vapor caliente a presión que ayuda a desprender grasa y suciedad difícil y a higienizar superficies con solo agua. Sirve para pisos, baños, cocina, vidrios, muebles y más, con accesorios para cada rincón del hogar.",
    benefits: ["Limpia y desinfecta usando solo agua", "Elimina grasa y suciedad incrustada", "Multiusos: pisos, baños, cocina, vidrios y tapizados", "Incluye accesorios para llegar a todos los espacios"],
    howto: "Llena el depósito con agua, conéctalo, espera a que genere vapor y pasa el accesorio por la superficie a limpiar.",
    specs: [["Tipo", "Limpiador a vapor"], ["Uso", "Pisos, baños, cocina, vidrios y tapizados"], ["Alimentación", "Eléctrica"], ["Incluye", "Equipo y accesorios"]],
    note: "No usar sobre superficies sensibles al calor. Sigue las instrucciones del manual."
  },
  6: {
    headline: "Cabello más suave, cuidado y fácil de peinar",
    description: "El cepillo restaurador está diseñado para desenredar sin tirones y distribuir mejor los aceites naturales del cabello, ayudando a que luzca más suave, brillante y saludable. Perfecto para tu rutina diaria, en cabello seco o húmedo.",
    benefits: ["Desenreda con suavidad, sin jalones", "Ayuda a dar brillo y suavidad al cabello", "Cómodo de sostener y fácil de usar a diario", "Sirve para cabello seco o húmedo"],
    howto: "Cepilla de las puntas hacia la raíz con movimientos suaves, y luego peina de forma normal.",
    specs: [["Tipo", "Cepillo restaurador"], ["Uso", "Cabello seco o húmedo"], ["Categoría", "Belleza"], ["Incluye", "1 cepillo por unidad"]],
    note: ""
  },
  7: {
    headline: "Ten siempre a la vista lo que más te importa",
    description: "El Mini Rastreador GPS es un localizador pequeño y discreto que te permite saber dónde están tus cosas más valiosas. Colócalo en tu vehículo, moto, maleta, llaves o incluso en el collar de tu mascota y consulta su ubicación desde tu celular.",
    benefits: ["Tamaño mini: fácil de ocultar y de llevar", "Localiza vehículos, mascotas, equipaje y objetos", "Consulta la ubicación desde tu celular", "Tranquilidad para ti y tu familia"],
    howto: "Carga el equipo, actívalo y colócalo en el objeto que quieres rastrear. Te ayudamos con la configuración por WhatsApp.",
    specs: [["Tipo", "Rastreador GPS compacto"], ["Uso", "Vehículos, mascotas, equipaje y objetos"], ["Tamaño", "Mini"], ["Incluye", "Equipo y cable de carga"]],
    note: "Algunos modelos requieren SIM o aplicación para funcionar."
  },
  8: {
    headline: "Orden y espacio en un solo mueble",
    description: "Este organizador 4 en 1 une perchero y zapatero en una sola estructura, para que tengas ropa, zapatos, bolsos y accesorios en su lugar. Es ideal para habitaciones, entradas y espacios pequeños, y se arma fácilmente en casa.",
    benefits: ["4 funciones en 1: perchero y zapatero", "Aprovecha al máximo los espacios pequeños", "Fácil de armar, con instrucciones", "Mantiene tu casa ordenada y despejada"],
    howto: "Arma la estructura siguiendo las instrucciones, ubícala en tu espacio y organiza tus prendas y zapatos.",
    specs: [["Tipo", "Perchero y zapatero 4 en 1"], ["Uso", "Interior del hogar"], ["Armado", "Fácil, con instrucciones"], ["Incluye", "Estructura y piezas de ensamble"]],
    note: ""
  },
  9: {
    headline: "Cabello liso y arreglado en minutos",
    description: "El cepillo alisador FH909 combina cepillo y calor en un solo accesorio: mientras peinas, el calor ayuda a alisar y dar forma al cabello. Es una forma rápida y práctica de lucir un look liso y arreglado sin complicaciones.",
    benefits: ["Alisa y peina al mismo tiempo", "Calentamiento rápido para ahorrar tiempo", "Fácil de usar, ideal para principiantes", "Look liso y pulido desde casa"],
    howto: "Con el cabello seco, conecta el cepillo, espera que caliente y pásalo por secciones de la raíz a las puntas.",
    specs: [["Modelo", "FH909"], ["Tipo", "Cepillo alisador"], ["Uso", "Cabello seco"], ["Incluye", "1 cepillo por unidad"]],
    note: "Evita el contacto con agua mientras está conectado y no lo dejes encendido sin supervisión."
  }
};
