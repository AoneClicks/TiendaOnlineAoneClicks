// Ficha por producto (clave = id de PRODUCTS).
// headline: frase llamativa | description: qué es y cómo funciona | benefits: ventajas | howto: modo de uso
// specs: datos técnicos [etiqueta, valor] | note: aviso importante (opcional)
const PRODUCT_DETAILS = {
  1: {
    headline: "Fórmula líquida 5 en 1 para acompañar el equilibrio de tu azúcar y tu metabolismo",
    quick: ["50 ml", "Fórmula 5 en 1", "Sin azúcar", "Rinde aprox. 25 días", "Sin tragar pastillas"],
    description: "Olvídate de tragar cápsulas grandes. Glucora Berberine reúne 5 ingredientes en un solo gotero que tomas en un vaso de agua antes de tus comidas principales. Una forma práctica de acompañar tu rutina de alimentación equilibrada y de cuidar tu consumo de azúcar todos los días.",
    benefits: [
      "Fórmula 5 en 1: berberina, canela de Ceilán, cromo, melón amargo y cúrcuma en una sola toma",
      "Fácil de tomar: en gotas, sin pastillas grandes y sin azúcar. Ideal si te cuesta tragar cápsulas",
      "Dosis exacta: el gotero te deja medir cada toma sin complicaciones",
      "Pensado para tu rutina: adultos que cuidan su azúcar, su peso y quieren sentirse livianos después de comer"
    ],
    ingredients: [
      ["Berberina", "Compuesto de origen vegetal, el más usado en rutinas para el equilibrio de la glucosa."],
      ["Canela de Ceilán", "La canela \"verdadera\", usada tradicionalmente para acompañar el azúcar después de las comidas."],
      ["Cromo", "Mineral que contribuye al metabolismo normal de los carbohidratos y a mantener niveles normales de glucosa."],
      ["Melón amargo", "Fruto usado tradicionalmente en rutinas de equilibrio metabólico."],
      ["Cúrcuma", "Raíz conocida por su aporte antioxidante."]
    ],
    howto: "Toma 1 gotero (aprox. 1 ml) en un vaso de agua, 2 veces al día: 15 a 30 minutos antes del desayuno y de la cena.",
    specs: [["Presentación", "Frasco gotero de 50 ml (1 fl oz)"], ["Contenido", "Aprox. 50 goteros de 1 ml"], ["Rendimiento", "Aprox. 25 días tomando 2 goteros al día"], ["Modo de uso", "1 gotero en agua, 2 veces al día"], ["Ingredientes", "Berberina, canela de Ceilán, cromo, melón amargo y cúrcuma"], ["Tipo", "Suplemento dietario líquido"], ["Libre de", "Azúcar"], ["Incluye", "1 frasco por unidad"]],
    note: "Suplemento dietario: no es un medicamento ni reemplaza un tratamiento médico. Si tomas medicamentos para la diabetes, estás embarazada o tienes alguna condición de salud, consulta antes a tu médico."
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
    headline: "Tu rutina capilar con luz LED, en casa",
    description: "Este cepillo capilar combina cepillado, luz LED roja y azul en el cabezal y un rociador de vapor frío para aplicar tus tónicos o aceites mientras peinas. Es inalámbrico y recargable por USB tipo C, así que lo usas donde quieras sin cables ni pilas. Tiene tres botones para encender, cambiar la luz y activar el rociador.",
    benefits: ["Luz LED roja y azul integrada en el cabezal", "Rociador de vapor para aplicar tónicos o aceites", "Inalámbrico y recargable por USB tipo C: no usa pilas", "Incluye guía digital de uso y beneficios"],
    howto: "Carga el cepillo, llena el depósito con tu tónico si quieres usar el rociador, enciéndelo, elige la luz y cepilla suavemente por secciones.",
    specs: [["Tipo", "Cepillo capilar LED con rociador"], ["Luz", "LED roja y azul"], ["Alimentación", "Batería recargable, no usa pilas"], ["Carga", "Puerto USB tipo C (cargador de celular)"], ["Controles", "3 botones: encendido, luz y rociador"], ["Uso", "Cabello seco o húmedo"], ["Incluye", "Cepillo, cable de carga y guía digital"], ["Garantía", "30 días"]],
    note: "Herramienta de cuidado personal: no promete crecimiento del cabello ni reducción de la caída. Si tienes dudas sobre tu salud capilar, consulta a un profesional."
  },
  7: {
    headline: "Ten siempre a la vista lo que más te importa",
    description: "El Mini Rastreador GPS GF-07 es un localizador del tamaño de un llavero que te permite saber dónde están tus cosas más valiosas. Trae un imán fuerte incorporado para pegarlo en la carrocería o el chasis, y es fácil de esconder en tu carro, moto, maleta o pertenencias. Funciona con una tarjeta SIM y consultas la ubicación desde tu celular.",
    benefits: ["Tamaño mini: cabe en la palma de la mano y es fácil de ocultar", "Imán fuerte incorporado: se pega en superficies metálicas sin tornillos", "Localiza vehículos, motos, equipaje y objetos", "Te ayudamos a configurarlo por WhatsApp"],
    howto: "Inserta una tarjeta SIM, carga el equipo, actívalo y colócalo en el objeto que quieres rastrear. Te ayudamos con la configuración por WhatsApp.",
    specs: [["Modelo", "GF-07"], ["Tipo", "Rastreador GPS compacto con imán"], ["Funciona con", "Tarjeta SIM de un operador compatible (no incluida)"], ["Fijación", "Imán incorporado"], ["Alimentación", "Batería recargable"], ["Uso", "Vehículos, motos, equipaje y objetos"], ["Incluye", "Equipo y cable de carga"], ["Garantía", "Por defectos de fábrica"]],
    note: "Requiere una tarjeta SIM de un operador compatible. Las funciones disponibles dependen de la versión del dispositivo."
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
    description: "El cepillo alisador FH909 es peinilla y plancha en un solo equipo: mientras peinas, sus dientes calientes separan, desenredan y alisan el cabello en una sola pasada. Calienta en 20 segundos, tiene 5 niveles de temperatura para tu tipo de cabello y una cubierta antiquemaduras para que no te quemes el cuero cabelludo. Se apaga solo a los 30 minutos.",
    benefits: ["Calienta en solo 20 segundos", "5 niveles de temperatura: elige el ideal para tu cabello", "Cubierta antiquemaduras y calentamiento PTC interno", "Apagado automático a los 30 minutos: sales tranquila"],
    howto: "Con el cabello seco, conecta el cepillo, elige el nivel de temperatura y pásalo por mechones de la raíz a las puntas. Usa protector térmico.",
    specs: [["Modelo", "FH909"], ["Tipo", "Cepillo alisador (peinilla + plancha)"], ["Alimentación", "Con cable, se conecta a la corriente"], ["Calentamiento", "Listo en 20 segundos (PTC)"], ["Temperatura", "5 niveles ajustables"], ["Seguridad", "Cubierta antiquemaduras y apagado automático a los 30 min"], ["Uso", "Cabello seco"], ["Incluye", "1 cepillo con su cable"], ["Garantía", "15 días"]],
    note: "Evita el contacto con agua mientras está conectado y no lo dejes encendido sin supervisión."
  },
  10: {
    headline: "Mezcla líquida de ingredientes naturales en presentación con gotero",
    description: "Vyxion Pure Soursop es un suplemento líquido que combina guanábana (soursop), sea moss, moringa, orégano, cúrcuma y aceite de semilla negra. Su presentación con gotero de 60 ml es práctica para incorporar a tu rutina diaria.",
    benefits: ["Fórmula con seis ingredientes", "Presentación líquida con gotero", "Frasco de 60 ml (2 fl oz)", "Fácil de llevar y almacenar"],
    howto: "Úsalo siguiendo las instrucciones y la porción recomendada que aparecen en el empaque.",
    specs: [["Tipo", "Suplemento líquido"], ["Ingredientes", "Guanábana, sea moss, moringa, orégano, cúrcuma y aceite de semilla negra"], ["Contenido", "60 ml (2 fl oz)"], ["Incluye", "1 frasco con gotero por unidad"]],
    note: "Suplemento dietario: no es un medicamento ni reemplaza un tratamiento médico. Consulta a un profesional de la salud antes de usarlo, especialmente si estás embarazada, lactando o tomas medicamentos."
  },
  11: {
    headline: "Siente tu cuerpo más ligero, libre de pesadez",
    description: "Drenaje Linfático de Linfovit es un complemento alimenticio en gotas orales a base de extractos líquidos de plantas, pensado como apoyo linfático tradicional. Su presentación con gotero de 60 ml es práctica para incluirlo en tu rutina diaria y acompañar hábitos que te ayuden a sentirte con menos pesadez y retención.",
    benefits: ["Fomenta el drenaje linfático", "Apoya una buena circulación", "Ayuda a reducir la sensación de hinchazón", "Contribuye al equilibrio de los líquidos del cuerpo"],
    howto: "Toma las gotas indicadas en el empaque, directamente o diluidas en agua, siguiendo la porción recomendada.",
    specs: [["Marca", "Linfovit"], ["Presentación", "Frasco con gotero"], ["Contenido", "60 ml (2 fl oz)"], ["Tipo", "Extractos de plantas líquidas, gotas orales"], ["Incluye", "1 frasco por unidad"]],
    note: "Suplemento alimenticio: no es un medicamento ni reemplaza un tratamiento médico. Consulta a un profesional de la salud antes de usarlo, especialmente si estás embarazada, lactando o tomas medicamentos."
  },
  12: {
      headline: "Ilumina tu hogar sin gastar en electricidad",
      description: "Cadena de 200 bombillos LED de 12 metros que funciona con energía solar: su panel se carga con el sol durante el día y las luces se encienden solas al anochecer. Trae una caja de control con botón de encendido y botón MODE para cambiar los efectos de luz. Es resistente a la lluvia, ideal para decorar árboles, patios, jardines, balcones y fachadas, sin cables a la toma ni costos en tu factura de luz.",
      benefits: [
          "Carga solar automática: 100% ecológica",
          "Encendido automático al anochecer",
          "Botón MODE para cambiar los efectos de luz",
          "200 bombillos LED en 12 metros de cable"
      ],
      howto: "Ubica el panel donde reciba sol directo, distribuye la cadena donde quieras decorar y déjala cargar durante el día.",
      specs: [
          [
              "Bombillos",
              "200 LED"
          ],
          [
              "Largo",
              "12 metros"
          ],
          [
              "Colores",
              "Blanco o multicolor (amarillo agotado)"
          ],
          [
              "Energía",
              "Panel solar con encendido automático"
          ],
          [
              "Control",
              "Botones ON/OFF y MODE (efectos de luz)"
          ],
          [
              "Uso",
              "Exteriores e interiores, resistente a la lluvia"
          ],
          [
              "Certificaciones",
              "CE, RoHS y FCC (caja de control)"
          ],
          [
              "Incluye",
              "Cadena de luces, caja de control y panel solar con estaca"
          ]
      ],
      note: "La duración de la luz depende de las horas de sol recibidas durante el día."
  },
  14: {
      headline: "Ilumina tu hogar sin gastar en electricidad",
      description: "Cadena de 500 bombillos LED de 25 metros que funciona con energía solar: su panel se carga con el sol durante el día y las luces se encienden solas al anochecer. Trae una caja de control con botón de encendido y botón MODE para cambiar los efectos de luz. Es resistente a la lluvia, ideal para decorar árboles, patios, jardines, balcones y fachadas, sin cables a la toma ni costos en tu factura de luz.",
      benefits: [
          "Carga solar automática: 100% ecológica",
          "Encendido automático al anochecer",
          "Botón MODE para cambiar los efectos de luz",
          "500 bombillos LED en 25 metros de cable"
      ],
      howto: "Ubica el panel donde reciba sol directo, distribuye la cadena donde quieras decorar y déjala cargar durante el día.",
      specs: [
          [
              "Bombillos",
              "500 LED"
          ],
          [
              "Largo",
              "25 metros"
          ],
          [
              "Colores",
              "Blanco o multicolor (amarillo agotado)"
          ],
          [
              "Energía",
              "Panel solar con encendido automático"
          ],
          [
              "Control",
              "Botones ON/OFF y MODE (efectos de luz)"
          ],
          [
              "Uso",
              "Exteriores e interiores, resistente a la lluvia"
          ],
          [
              "Certificaciones",
              "CE, RoHS y FCC (caja de control)"
          ],
          [
              "Incluye",
              "Cadena de luces, caja de control y panel solar con estaca"
          ]
      ],
      note: "La duración de la luz depende de las horas de sol recibidas durante el día."
  },
  13: {
    headline: "El mineral esencial que tu cuerpo necesita",
    description: "Magnesium Citrate es un suplemento de citrato de magnesio de 500 mg en cápsulas, una de las formas de magnesio más usadas en rutinas de bienestar. El magnesio participa en el funcionamiento normal de músculos y nervios, por eso es un buen aliado si buscas sentir menos fatiga y tensión muscular en tu día a día.",
    benefits: ["Apoya el funcionamiento normal de músculos y nervios", "Ayuda a disminuir la sensación de cansancio y fatiga", "Citrato de magnesio de 500 mg por porción", "Frasco de 100 cápsulas, fácil de tomar y de llevar"],
    howto: "Toma las cápsulas indicadas en el empaque con un vaso de agua, preferiblemente junto con las comidas.",
    specs: [["Tipo", "Citrato de magnesio"], ["Concentración", "500 mg"], ["Presentación", "Cápsulas"], ["Contenido", "100 cápsulas"], ["Incluye", "1 frasco por unidad"]],
    note: "Suplemento dietario: no es un medicamento ni reemplaza un tratamiento médico. Consulta a un profesional de la salud antes de usarlo, especialmente si estás embarazada, lactando, tienes problemas renales o tomas medicamentos."
  },
  15: {
    headline: "Presencia, elegancia y brillo en un solo conjunto",
    description: "Conjunto masculino de pulsera y anillo en oro laminado 18K con una corona en alto relieve rodeada de microcircones brillantes. La pulsera combina balines diamantados de 8 mm y 6 mm, tallados con múltiples facetas que reflejan la luz desde todos los ángulos, unidos con hilo negro de tejido artesanal y nudo corredizo para ajustarla a tu muñeca. El anillo, de estilo robusto, lleva la misma corona al frente y grabados decorativos en los laterales. Juntos crean un look que transmite presencia y buen gusto.",
    benefits: ["Diseño exclusivo con corona en alto relieve y microcircones", "Balines diamantados que brillan desde cualquier ángulo", "Pulsera ajustable con nudo corredizo y tejido artesanal", "Ideal para regalar en cumpleaños, aniversarios y fechas especiales"],
    howto: "Elige la talla de tu anillo con la guía de tallas (mide el diámetro interno de un anillo que te quede bien). Ajusta la pulsera deslizando el nudo hasta la medida de tu muñeca. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Incluye", "1 pulsera + 1 anillo"], ["Material", "Oro laminado 18K"], ["Balines de la pulsera", "Diamantados de 8 mm y 6 mm"], ["Emblema", "Corona en alto relieve con microcircones"], ["Hilo", "Negro resistente, tejido artesanal"], ["Ajuste de la pulsera", "Nudo corredizo para diferentes tamaños de muñeca"], ["Anillo", "Estilo robusto, laterales con grabados decorativos"], ["Acabado", "Dorado brillante"], ["Tallas del anillo", "De la 3 a la 13 (incluye medias tallas)"], ["Estilo", "Masculino, elegante y moderno"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  16: {
    headline: "Lleva contigo un símbolo de fe, amor y devoción",
    quick: ["Oro laminado 18K", "Cadena + pulsera", "Pulsera ajustable", "Ideal para regalar"],
    description: "Un conjunto que une elegancia y significado espiritual: una delicada cadena dorada con dije de corazón rojo esmaltado y una pulsera de hilo rojo trenzado con el Sagrado Corazón de Jesús, coronado y con detalles dorados. Más que un accesorio, es un símbolo de fe que puedes llevar contigo todos los días.",
    benefits: [
      "Diseño lleno de significado: el Sagrado Corazón de Jesús, símbolo de fe, amor y protección",
      "Rojo y dorado: una combinación que luce hermosa y resalta con cualquier atuendo",
      "Pulsera ajustable: hilo trenzado con nudo corredizo que se adapta a tu muñeca",
      "Juntas o por separado: lúcelas para el día a día o en ocasiones especiales",
      "El regalo perfecto: para mamá, esposa, pareja o alguien que llevas en el corazón"
    ],
    howto: "Ajusta la pulsera deslizando los extremos del hilo hasta la medida de tu muñeca. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Incluye", "1 cadena con dije + 1 pulsera"], ["Material", "Oro laminado 18K"], ["Cadena", "Dorada, con dije de corazón rojo esmaltado y detalles dorados"], ["Pulsera", "Hilo rojo trenzado, balines dorados y dije del Sagrado Corazón con corona"], ["Ajuste de la pulsera", "Nudo corredizo para diferentes tamaños de muñeca"], ["Acabado", "Dorado brillante con esmalte rojo"], ["Estilo", "Religioso, elegante y delicado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  17: {
    headline: "Estilo y presencia",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Pulsera Corona Balín en oro laminado 18K: un diseño dorado con corona que da presencia y personalidad a tu look. El oro laminado ofrece un brillo muy similar al oro sólido, con gran resistencia al uso diario.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  18: {
    headline: "Estilo y presencia",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Conjunto Corona Cristal: Pulsera + Anillo en oro laminado 18K: un diseño dorado con corona que da presencia y personalidad a tu look. El oro laminado ofrece un brillo muy similar al oro sólido, con gran resistencia al uso diario.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Elige la talla de tu anillo con la guía de tallas. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  19: {
    headline: "Estilo y presencia",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Cadena Singapur de Hombre 60 cm con Dije Corona en oro laminado 18K: un diseño dorado con corona que da presencia y personalidad a tu look. El oro laminado ofrece un brillo muy similar al oro sólido, con gran resistencia al uso diario.",
    benefits: [
      "Acabado premium con 8 laminas de oro de 18K",
      "Color intenso y brillo que luce como el oro auténtico",
      "Mayor resistencia al desgaste y al uso diario",
      "No se oxida ni cambia de color fácilmente con el cuidado adecuado",
      "Material hipoalergénico, cómodo y seguro para la mayoría de las pieles"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  20: {
    headline: "Estilo y presencia",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro Conjunto Corona para hombre, compuesto por una elegante pulsera ajustable de balines tallados y un espectacular anillo tipo corona, ambos con detalles dorados en Oro Laminado 18K.",
    benefits: [
      "CONJUNTO Corona PULSERA + ANILLO — ORO LAMINADO 18K",
      "Elegancia, brillo y distinción en un conjunto diseñado para destacar",
      "Pulsera Corona ajustable",
      "Acabado en Oro Laminado 18K",
      "Balines dorados tallados de gran brillo",
      "Herraje central con diseño de corona tipo corona"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  21: {
    headline: "Elegancia, poder y distinción en un solo conjunto",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre nuestro exclusivo Conjunto Militar Corona Premium en Oro Laminado 18K, una joya diseñada para hombres que buscan proyectar seguridad, personalidad, elegancia y un estilo único en cada ocasión.",
    benefits: [
      "CONJUNTO MILITAR Corona PREMIUM – ORO LAMINADO 18K",
      "No todos nacieron para seguir tendencias, algunos nacieron para imponerlas",
      "El lujo también está en los detalles",
      "Un hombre con estilo no necesita decir mucho para destacar",
      "Sorpréndelo con un detalle que represente lo importante que es",
      "La corona no hace al rey, pero representa su grandeza"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Cadena","Tejido militar con balines diamantados"],["Largo de cadena","60 cm"],["Dije","Corona tipo corona, diseño circular"],["Detalles del dije","Acabados dorados y piedras decorativas brillantes"],["Pulsera","Tejido militar con balines dorados"],["Color","Dorado brillante"],["Estilo","Masculino, elegante, moderno y exclusivo"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  22: {
    headline: "Estilo y presencia",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Luce un estilo imponente y sofisticado con nuestra exclusiva Cadena Militar Diamantada de 60 cm y 4 mm de grosor, acompañada de un elegante dije Corona, elaborada en Oro Laminado 18K.",
    benefits: [
      "Uso: Ideal para ocasiones especiales y uso cotidiano con los cuidados adecuados",
      "Brillo espectacular: Su tejido diamantado proporciona reflejos elegantes que resaltan cada detalle de la cadena",
      "Cadena Militar Diamantada para Hombre + Dije Corona en Oro Laminado 18K",
      "Elegancia, poder y distinción en una sola joya",
      "Una cadena diseñada para hombres que tienen personalidad, seguridad y saben cómo destacar"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Tipo de cadena","Tejido Militar Diamantado"],["Largo","60 centímetros"],["Grosor","4 milímetros"],["Dije","Corona tipo corona en acabado dorado"],["Color","Dorado, tono similar al oro de 18K"],["Estilo","Masculino, elegante, moderno y sofisticado"],["Acabado","Diamantado de alto brillo"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  23: {
    headline: "Un anillo diseñado para hombres que imponen estilo y personalidad",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Descubre nuestro espectacular Anillo tipo corona en Oro Laminado 18K, una joya masculina que combina elegancia, presencia y sofisticación en cada detalle.",
    benefits: [
      "Ideal para: Regalos, cumpleaños, aniversarios y ocasiones especiales",
      "Brillo espectacular: Los microcircones aportan luminosidad y resaltan cada detalle",
      "Anillo Corona para Hombre en Oro Laminado 18K con Microcircones",
      "Elegancia, lujo y poder en una sola joya",
      "Una joya para hombres que saben vestir con elegancia",
      "Copy publicitario con método AIDA"
    ],
    howto: "Elige la talla de tu anillo con la guía de tallas. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Nombre","Anillo Corona Corona para Hombre"],["Material","Oro Laminado 18K"],["Piedras","Microcircones color cristal alrededor de la corona"],["Diseño","Corona en relieve"],["Estructura","Anillo ancho, grueso y de estilo masculino"],["Acabado","Dorado brillante con detalles grabados"],["Estilo","Elegante, moderno, llamativo y sofisticado"],["Diseño imponente","Su corona central proyecta una imagen de elegancia y distinción"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  24: {
    headline: "Abundancia con estilo",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Un diseño elegante y lleno de significado, perfecto para llevar contigo como símbolo de prosperidad, abundancia y buena fortuna.",
    benefits: [
      "Elaborada en Oro Laminado 18K",
      "Diseño elegante, moderno y llamativo",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  25: {
    headline: "Abundancia con estilo",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Dale personalidad a tu estilo con nuestro Anillo Millonario, una pieza llamativa inspirada en la abundancia, diseñada para quienes disfrutan accesorios diferentes, exclusivos y con presencia.",
    benefits: [
      "ANILLO Millonario – DISEÑO DORADO",
      "Diseño frontal inspirado en la abundancia",
      "Detalles relacionados con dinero y riqueza",
      "Acabado dorado brillante",
      "Detalles tipo circones que aportan brillo",
      "Detalles azules en la vestimenta"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  26: {
    headline: "Abundancia con estilo",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Esta hermosa Pulsera Millonario combina un tejido artesanal en hilo negro ajustable con balines tallados en tonos dorado, plateado y dorado claro, creando un atractivo efecto 3 oros.",
    benefits: [
      "PULSERA Millonario 3 OROS – ORO LAMINADO 18K",
      "Una pulsera llamativa, elegante y con mucha personalidad, inspirado en la abundancia",
      "Detalles en Oro Laminado 18K",
      "Combinación estilo 3 oros",
      "Balines tallados que aportan brillo y textura",
      "Sistema ajustable para adaptarse cómodamente a la muñeca"
    ],
    howto: "Elige la talla de tu anillo con la guía de tallas. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  27: {
    headline: "Abundancia con estilo",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Esta hermosa Pulsera Millonario combina un tejido artesanal en hilo negro ajustable con balines tallados en tonos dorado, plateado y dorado claro, creando un atractivo efecto 2 oros.",
    benefits: [
      "PULSERA Millonario 3 OROS – ORO LAMINADO 18K",
      "Una pulsera llamativa, elegante y con mucha personalidad, inspirado en la abundancia",
      "Detalles en Oro Laminado 18K",
      "Combinación estilo oro rosa + amarillo",
      "Balines tallados que aportan brillo y textura",
      "Sistema ajustable para adaptarse cómodamente a la muñeca"
    ],
    howto: "Elige la talla de tu anillo con la guía de tallas. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  28: {
    headline: "Abundancia con estilo",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Un conjunto llamativo que combina elegancia, personalidad y un estilo único. Inspirado en la abundancia, es perfecto para quienes buscan un accesorio diferente que destaque y complemente cualquier outfit.",
    benefits: [
      "CONJUNTO Millonario EN ORO LAMINADO 18K",
      "Cadena tejido lazo delgado de 60 cm x 1 mm",
      "Dije Millonario con diseño detallado",
      "Anillo Millonario a juego",
      "Elaborado en Oro Laminado 18K",
      "Acabado dorado brillante y llamativo"
    ],
    howto: "Elige la talla de tu anillo con la guía de tallas. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  29: {
    headline: "Atrae la abundancia a tu vida",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Diseñada con un elegante billete de 100 dólares en tono dorado, balines diamantados en oro laminado 18K y detalles negros que resaltan su belleza y exclusividad.",
    benefits: [
      "Abundancia: Representa las oportunidades y la riqueza que deseas alcanzar",
      "Prosperidad: Un recordatorio de trabajar cada día por tu crecimiento económico",
      "Éxito: Simboliza la determinación, la confianza y el poder de cumplir tus metas",
      "Balines diamantados en oro laminado 18K",
      "Dije central de billete de 100 dólares",
      "Balines negros que contrastan con el dorado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  30: {
    headline: "Un símbolo de riqueza, prosperidad, abundancia y éxito que puedes llevar en tu muñeca",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Descubre nuestra exclusiva Pulsera Millonario en Oro Laminado 18K, una joya diseñada para quienes aman el lujo, la elegancia y los accesorios con personalidad.",
    benefits: [
      "Ideal para: Hombre o mujer, uso diario, ocasiones especiales o regalos con significado",
      "Prosperidad: Millonario representa la riqueza y el deseo de alcanzar grandes metas económicas",
      "Abundancia: Un accesorio que simboliza las oportunidades, el crecimiento y la mentalidad de éxito",
      "PULSERA Millonario – BALINES BOLA DE FUEGO CON MICROCIRCONES EN ORO LAMINADO 18K",
      "Diseño exclusivo y lleno de detalles",
      "Brillo espectacular gracias a sus balines Bola de Fuego con microcircones"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Balines","Diseño Bola de Fuego con incrustaciones de microcircones brillantes"],["Detalles","Balines lisos dorados combinados con balines de brillo"],["Dije central","Millonario en diseño tridimensional, con detalles dorados y piedras decorativas azules"],["Pulsera","Hilo negro tejido de estilo macramé"],["Tamaño","Ajustable para adaptarse cómodamente a diferentes muñecas"],["Estilo","Elegante, moderno, llamativo y exclusivo"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  31: {
    headline: "El éxito comienza con una mentalidad ganadora",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre nuestro exclusivo Conjunto Millonario en Oro Laminado 18K, una combinación de joyería masculina diseñada para hombres que aman destacar con accesorios llamativos, modernos y llenos de personalidad.",
    benefits: [
      "Ideal para: Uso personal, regalos y ocasiones especiales",
      "CONJUNTO Millonario – PULSERA + ANILLO EN ORO LAMINADO 18K",
      "Un conjunto que representa abundancia, prosperidad, éxito y elegancia masculina",
      "Abundancia: Las bolsas de dinero representan simbólicamente la prosperidad económica y las oportunidades",
      "Recomendaciones de cuidado",
      "Una joya para hombres que piensan en grande"
    ],
    howto: "Elige la talla de tu anillo con la guía de tallas. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Material","Oro laminado 18K"],["Nombre","Conjunto Millonario"],["Contenido","Pulsera + anillo"],["Color","Dorado brillante y negro"],["Diseño de la pulsera","Balines diamantados con dije Millonario"],["Diseño del anillo","Tejido con balines dorados"],["Pedrería del dije","Detalles brillantes tipo circón"],["Tejido","Hilo negro artesanal tipo macramé"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  32: {
    headline: "Abundancia con estilo",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Descubre nuestra exclusiva Pulsera Millonario de la Prosperidad, una pieza de joyería que combina elegancia, lujo y simbolismo en un diseño único y llamativo.",
    benefits: [
      "Uso: Ideal para complementar atuendos casuales y elegantes",
      "Pulsera Millonario de la Prosperidad y Abundancia en Oro Laminado 18K",
      "Una joya que representa riqueza, éxito, prosperidad y grandes sueños",
      "Una combinación espectacular de hilo negro, balines dorados y dijes de lujo en Oro Laminado 18K",
      "Regala un símbolo de prosperidad y buenos deseos a esa persona especial que está construyendo sus sueños",
      "Que cada vez que mires tu pulsera recuerdes que tus metas merecen esfuerzo, dedicación y perseverancia"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Diseño","Pulsera Millonario de la Prosperidad"],["Tejido","Hilo negro trenzado de estilo macramé"],["Balines","Dorados con acabado brillante y detalles grabados"],["Dije central","Millonario con detalles de colores y cristales decorativos"],["Primer dije","Bolsa de dinero con símbolo de dólar y cristales brillantes"],["Segundo dije","Billete de 100 con detalles en relieve"],["Sistema de cierre","Nudo corredizo ajustable"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  33: {
    headline: "El brillo del éxito, la elegancia y la prosperidad en una sola joya",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre nuestro espectacular Conjunto de Cadena Militar de 60 cm y 4 mm de grosor con Dije Millonario en Oro Laminado 18K, una joya masculina que combina lujo, personalidad y un diseño inspirado en la riqueza, la abundancia y el éxito.",
    benefits: [
      "Significado del millonario: Riqueza, éxito y prosperidad",
      "Abundancia: Las bolsas de dinero se asocian con la prosperidad y el bienestar económico",
      "Buena fortuna: Un símbolo para quienes desean atraer oportunidades y mantener una actitud positiva",
      "Cadena Militar 60 cm de 4 mm + Dije Millonario con Microcircones Cristal en Oro Laminado 18K",
      "Copy publicitario con el método AIDA",
      "Dije Millonario con microcircones cristal"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Largo","60 centímetros"],["Grosor","4 milímetros"],["Tejido","Militar"],["Color","Dorado brillante, inspirado en el oro de 18 quilates"],["Diseño","Eslabones decorativos de apariencia robusta y elegante"],["Estilo","Masculino, moderno y sofisticado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  34: {
    headline: "Dos símbolos de fe, amor y protección en un solo conjunto",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Descubre nuestro hermoso Conjunto Sagrado Corazón de Jesús, una combinación especial de elegancia, espiritualidad y devoción, diseñada para quienes desean llevar su fe siempre cerca del corazón.",
    benefits: [
      "Protección espiritual: El hilo rojo es tradicionalmente utilizado como símbolo de protección y buenos deseos",
      "Bendición: Un conjunto ideal para expresar devoción y llevar un recordatorio diario de fe y amor",
      "Amor divino: El Sagrado Corazón de Jesús simboliza el amor incondicional, la compasión y la misericordia",
      "Elegancia en oro laminado 18K",
      "Hermoso dije del Sagrado Corazón de Jesús",
      "Pulsera roja ajustable con balines dorados"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Detalles en oro laminado 18K con un elegante acabado dorado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  35: {
    headline: "Que tu fe sea siempre parte de tu estilo",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre nuestra hermosa Cadena para Dama con Dije del Sagrado Corazón de Jesús en Oro Laminado 18K, una joya delicada, elegante y llena de significado religioso, diseñada para mujeres que desean llevar su fe siempre cerca del corazón.",
    benefits: [
      "Producto: Cadena para dama + dije Sagrado Corazón de Jesús",
      "Uso: Ideal para uso diario y ocasiones especiales",
      "Una joya que representa el amor de Jesús, la fe, la esperanza y la protección espiritual",
      "Recomendaciones de cuidado",
      "Una joya que lleva el amor de Jesús cerca del corazón",
      "Más que una cadena, es un símbolo del amor de Jesús que puedes llevar cerca de tu corazón"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Cadena","Tejido delicado de eslabones dorados"],["Color","Dorado brillante"],["Dije","Sagrado Corazón de Jesús"],["Diseño del dije","Corazón rojo con detalles religiosos dorados"],["Detalles superiores","Llamas y elementos ornamentales"],["Acabado","Elegante y brillante"],["Estilo","Religioso, femenino, delicado y sofisticado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  36: {
    headline: "Que tu fe sea siempre parte de tu estilo",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre nuestra hermosa Cadena para Dama con Dije del Sagrado Corazón de Jesús en Oro Laminado 18K, una joya delicada, elegante y llena de significado religioso, diseñada para mujeres que desean llevar su fe siempre cerca del corazón.",
    benefits: [
      "Producto: Cadena para dama + dije Sagrado Corazón de Jesús",
      "Uso: Ideal para uso diario y ocasiones especiales",
      "Una joya que representa el amor de Jesús, la fe, la esperanza y la protección espiritual",
      "Recomendaciones de cuidado",
      "Una joya que lleva el amor de Jesús cerca del corazón",
      "Más que una cadena, es un símbolo del amor de Jesús que puedes llevar cerca de tu corazón"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Cadena","Tejido delicado de eslabones dorados"],["Color","Dorado brillante"],["Dije","Sagrado Corazón de Jesús"],["Diseño del dije","Corazón rojo con detalles religiosos dorados"],["Detalles superiores","Llamas y elementos ornamentales"],["Acabado","Elegante y brillante"],["Estilo","Religioso, femenino, delicado y sofisticado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  37: {
    headline: "Lleva el amor de Jesús cerca de tu corazón",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre la belleza de nuestro exclusivo Conjunto Cadena Tejido Singapur con Dije del Sagrado Corazón de Jesús en Oro Laminado 18K, una joya femenina que combina elegancia, delicadeza y un profundo significado espiritual.",
    benefits: [
      "Uso: Ideal para ocasiones especiales o para complementar tu estilo diario",
      "Cadena Singapur + Sagrado Corazón de Jesús en Oro Laminado 18K",
      "Una joya que representa amor, fe, protección y devoción",
      "Lleva el Sagrado Corazón de Jesús siempre cerca de ti, como símbolo de amor, fe y protección divina",
      "No regales solamente una joya. Regala un detalle que representa amor, esperanza y fe",
      "Una cadena delicada, un corazón lleno de fe y un brillo que enamora"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Incluye","Dije rojo que destaca por su belleza y simbolismo"],["Material","Oro laminado 18K"],["Tipo de cadena","Tejido Singapur, delicado y elegante"],["Diseño","Femenino, clásico y religioso"],["Dije","Sagrado Corazón de Jesús"],["Color del corazón","Rojo rubí intenso"],["Detalles del dije","Corona de espinas y llamas en acabado dorado"],["Acabado","Dorado brillante"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  38: {
    headline: "Lleva contigo dos hermosos símbolos de fe y amor en una joya llena de significado",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Juego de Dama Cadena Singapur de 45 cm + Virgen de Guadalupe + Pulsera Hilo Rojo Corazón de Jesús en Oro Laminado 18K",
    benefits: [
      "Fe, amor, protección y elegancia en un solo conjunto",
      "Su diseño combina detalles dorados y cristales que resaltan la belleza de la medalla",
      "Una joya especial para mujeres que desean expresar su devoción y mantener presente su fe",
      "Un regalo que va más allá de lo material",
      "Hay regalos que se olvidan, pero también existen detalles que llevan un significado especial",
      "Regala un símbolo de fe, amor y esperanza que pueda acompañarla todos los días"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Longitud","45 cm, ideal para lucir delicadamente sobre el cuello femenino"],["Tejido","Singapur, fino, elegante y sofisticado"],["Material","Oro Laminado 18K, con un hermoso acabado dorado"],["Estilo","Femenino, delicado y versátil, perfecto para usar diariamente o en ocasiones especiales"],["Hilo rojo","Tradicionalmente asociado con la protección, la buena energía y los buenos deseos"],["Corazón de Jesús","Representa el amor, la misericordia, la compasión y la fe"],["Cristales brillantes","Rodean el corazón y aportan un toque delicado de elegancia"],["Detalles dorados","Balines decorativos en Oro Laminado 18K que complementan su diseño"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  39: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Presentamos nuestra hermosa Pulsera Virgen de Guadalupe, elaborada con Balín Italiano de 6 mm en Oro Laminado 18K de 3 Oros, combinando tonos dorado, rosado y plateado para lograr una pieza elegante, llamativa y fácil de combinar.",
    benefits: [
      "Un símbolo de fe, protección y devoción que puedes llevar siempre contigo",
      "Balines Italianos de 6 mm",
      "Dije de Virgen de Guadalupe",
      "Diseño elegante y especial",
      "Ideal para regalar a mamá, pareja, familiares o seres queridos"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Diseño de 3 oros","Dorado, rosado y plateado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  40: {
    headline: "Fe y protección cada día",
    quick: ["Conjunto completo","Ideal para regalar"],
    description: "Presentamos este exclusivo set para dama, que combina una delicada cadena tejido chino de 45 cm y 3 mm, acompañada de una hermosa Virgen de Guadalupe decorada con micro circones verde esmeralda.",
    benefits: [
      "Un hermoso símbolo de fe, elegancia y devoción, diseñado para acompañarte en cada momento especial",
      "Cadena tejido chino para dama",
      "Dije de la Virgen de Guadalupe",
      "Decorado con micro circones color verde esmeralda",
      "Topos de la Virgen de Guadalupe"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  41: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Presentamos nuestro hermoso Collar Tejido Aroa + Dije de la Virgen de Guadalupe, elaborado en Oro Laminado 18K, una combinación delicada y elegante que representa la fe, el amor y la protección.",
    benefits: [
      "Elegancia, fe y protección para llevar siempre contigo",
      "Dije de la Virgen de Guadalupe",
      "Diseño elegante y brillante",
      "Ideal para regalar en cualquier ocasión",
      "Un símbolo de fe, amor y protección"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  42: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Presentamos este elegante conjunto para dama, compuesto por una cadena china de 45 cm, acompañada de un hermoso dije de la Virgen de Guadalupe, más 2 pulseras de hilo rojo con balines dorados y dije de la Virgen de Guadalupe.",
    benefits: [
      "Un hermoso símbolo de fe, protección y amor para llevar siempre contigo",
      "Cadena china de 45 cm x 3 mm",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Largo","45 cm"],["Grosor","3 mm"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  43: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro Dúo de Pulseras Virgen de Guadalupe, elaboradas con balines italianos de 6 mm en Oro Laminado 18K, acompañadas de un hermoso dije de Virgen de Guadalupe en Oro Laminado 18K.",
    benefits: [
      "Balines italianos de 6 mm",
      "Dije de Virgen de Guadalupe en Oro Laminado 18K",
      "Ideales para regalar y compartir",
      "Diseño elegante y moderno",
      "Llévala contigo todos los días y comparte un símbolo de fe, amor y protección"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  44: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Presentamos nuestra hermosa Camándula Virgen de Guadalupe, elaborada con balines italianos diamantados en Oro Laminado 18K, combinados con hilo negro tejido, una delicada medalla de la Virgen de Guadalupe y una elegante cruz con Cristo.",
    benefits: [
      "Fe, protección y elegancia reunidas en una camándula diseñada para llevar contigo todos los días",
      "Camándula completa en balín italiano",
      "Balines en Oro Laminado 18K",
      "Balines diamantados/texturizados de alto brillo",
      "Detalles en hilo negro tejido",
      "Medalla de la Virgen de Guadalupe"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  45: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Una joya llena de fe, significado y versatilidad, creada para acompañarte de diferentes maneras. Su diseño en tono rojo con detalles dorados, medalla religiosa y cruz lo convierte en un accesorio especial para llevar diariamente o regalar a alguien importante.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Choker","Úsalo alrededor del cuello para crear un look diferente y lleno de significado"],["Pulsera","Llévalo enrollado en tu muñeca como accesorio de fe"],["Tobillera","Una forma original de llevarlo contigo en cada paso"],["Accesorio para bolso o llavero","Colócalo en tu bolso, cartera o llaves"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  46: {
    headline: "Una joya que representa fe, protección espiritual, elegancia y devoción",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Presentamos nuestra hermosa Camándula para Hombre de 70 cm, elaborada en Oro Laminado 18K, con un diseño religioso que combina elegancia y tradición.",
    benefits: [
      "Ideal para: Regalos de cumpleaños, Día del Padre, aniversarios y ocasiones religiosas",
      "No es solamente una camándula, es un símbolo de fe que puedes llevar siempre cerca de tu corazón",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Tipo","Camándula religiosa para hombre"],["Largo","70 cm"],["Material","Oro Laminado 18K"],["Diseño","Cadena de balines dorados con eslabones"],["Medalla central","Virgen de Guadalupe"],["Dije final","Crucifijo de Jesucristo"],["Cierre","Broche tipo langosta"],["Acabado","Dorado brillante, elegante y sofisticado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  47: {
    headline: "Lleva siempre contigo el amor y la protección de la Virgen de Guadalupe",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestra hermosa Pulsera Virgen de Guadalupe para Dama en Oro Laminado 18K, una joya que combina la elegancia del dorado con el profundo significado espiritual de la Virgen de Guadalupe, símbolo de amor maternal, esperanza, fe y protección.",
    benefits: [
      "Diseñada para dama: Ideal para uso diario y ocasiones especiales",
      "Regalo con significado: Perfecto para mamá, esposa, novia, hija o una mujer especial",
      "Protección: La Virgen de Guadalupe representa la protección maternal y el acompañamiento espiritual",
      "Amor: Un símbolo del amor incondicional, la ternura y la unión familiar",
      "Fortaleza: Representa la fuerza espiritual para afrontar los desafíos de cada día",
      "Bendición: Una hermosa manera de expresar buenos deseos y cariño hacia una persona especial"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Dije Virgen de Guadalupe","Símbolo de fe, amor y protección espiritual"],["Hilo negro tejido","Estilo moderno, resistente y cómodo"],["Sistema ajustable","Nudo corredizo que permite adaptarla a diferentes tamaños de muñeca"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  48: {
    headline: "Que la Virgen de Guadalupe acompañe cada uno de tus pasos",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Lleva siempre contigo la belleza y el significado espiritual de la Virgen de Guadalupe con este hermoso conjunto elaborado en oro laminado 18K, diseñado especialmente para mujeres que desean lucir una joya delicada, elegante y llena de fe.",
    benefits: [
      "Significado especial: Una joya que representa la devoción y el amor hacia la Virgen de Guadalupe",
      "Un símbolo de fe, protección y elegancia que te acompaña todos los días",
      "Diseño femenino: Ideal para lucir a diario, combinar con diferentes prendas o llevar en ocasiones especiales",
      "Cadena Singapur de 45 cm",
      "Dije Virgen de Guadalupe",
      "Elegancia y devoción en una sola joya"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K, con un elegante acabado dorado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  49: {
    headline: "Lleva contigo un símbolo de fe, amor, protección y elegancia",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre nuestro hermoso Conjunto Virgen de Guadalupe en Oro Laminado 18K, una joya especialmente diseñada para mujeres que desean combinar su fe y devoción con un estilo delicado, femenino y sofisticado.",
    benefits: [
      "Topos Virgen de Guadalupe",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Cadena","45 cm de largo"],["Tejido","Delgado, elegante y brillante"],["Dije","Virgen de Guadalupe con marco ovalado"],["Aretes","Par de topos con imagen religiosa"],["Color","Dorado"],["Estilo","Femenino, religioso, clásico y elegante"],["Contenido","1 cadena + 1 dije + 2 topos"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  50: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Lleva siempre contigo el amor, la esperanza y la protección espiritual que representa la Virgen de Guadalupe con este hermoso conjunto de joyería en oro laminado 18K, diseñado especialmente para mujeres que desean combinar elegancia, devoción y significado en un solo accesorio.",
    benefits: [
      "Ideal para: Uso diario, regalos especiales y ocasiones religiosas",
      "No es solamente una cadena y una pulsera. Es una expresión de fe, una tradición que llevas cerca del corazón",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K en sus piezas doradas"],["Cadena","Tejido Singapur fino y elegante"],["Largo de la cadena","45 cm, ideal para dama"],["Dije","Virgen de Guadalupe dorada con detalles en relieve"],["Pulsera","Hilo beige tejido artesanalmente"],["Medalla de la pulsera","Virgen de Guadalupe en oro laminado 18K"],["Ajuste","Pulsera ajustable mediante nudo corredizo"],["Estilo","Religioso, elegante, delicado y femenino"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  51: {
    headline: "Un símbolo de fe, protección y elegancia que puedes llevar siempre contigo",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre nuestra exclusiva Cadena Militar Diamantada de 60 cm y 4 mm de grosor, acompañada de un hermoso dije de la Virgen de Guadalupe, un conjunto diseñado especialmente para hombres que desean combinar estilo, elegancia y devoción en una sola joya.",
    benefits: [
      "Producto: Cadena Militar Diamantada + Dije Virgen de Guadalupe",
      "Uso: Ideal para uso diario, ocasiones especiales y regalos",
      "Su tejido militar diamantado ofrece un brillo atractivo y elegante",
      "Sus 60 cm de largo permiten lucir cómodamente el dije sobre el pecho",
      "Los balines de 4 mm aportan presencia sin perder la delicadeza del diseño",
      "Su acabado en oro laminado 18K brinda una apariencia dorada sofisticada"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Largo de la cadena","60 cm"],["Grosor de los balines","4 mm"],["Tejido","Militar diamantado"],["Color","Dorado brillante"],["Diseño","Balines diamantados con detalles tallados"],["Dije","Medalla ovalada de la Virgen de Guadalupe en relieve"],["Estilo","Masculino, religioso, elegante y moderno"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  52: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Hermosa Cadena Singapur de 45 cm en Oro Laminado 18K, acompañada de un delicado dije de la Virgen de Guadalupe, símbolo de fe, esperanza, amor maternal y protección espiritual.",
    benefits: [
      "Una joya que combina fe, protección, elegancia y amor",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Cadena","Tejido Singapur, delicado y brillante"],["Largo","45 cm, ideal para dama"],["Dije","Virgen de Guadalupe con detalles religiosos en relieve"],["Color","Dorado elegante"],["Diseño","Fino, femenino, clásico y religioso"],["Contenido","1 cadena Singapur de 45 cm + 1 dije de la Virgen de Guadalupe"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  53: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre nuestro exclusivo Conjunto Rosario Diamantado de 45 cm con Virgen de Guadalupe + Pulsera de Tres Oros con Balines Lisos, una combinación diseñada para mujeres que desean llevar su fe siempre cerca del corazón sin renunciar al estilo y la sofisticación.",
    benefits: [
      "Una joya que une la fe, la protección espiritual y la elegancia en un solo conjunto",
      "Diseño con balines diamantados de acabado brillante",
      "Medalla central con representación de la Virgen de Guadalupe",
      "Cruz colgante que complementa el diseño religioso",
      "Estilo femenino, delicado y espiritual",
      "Balines en tono oro amarillo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Longitud","45 cm"],["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  54: {
    headline: "Lleva tu fe siempre cerca del corazón",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Luce una joya que combina la belleza del oro laminado 18K con el significado espiritual de la Virgen de Guadalupe. Este hermoso conjunto está diseñado para mujeres que desean expresar su fe con elegancia, estilo y distinción.",
    benefits: [
      "Producto: Cadena eslabón italiano + Dije Virgen de Guadalupe",
      "Un regalo lleno de significado: Perfecto para sorprender a mamá, esposa, novia, hermana o a una persona especial",
      "Brillo y sofisticación: Su acabado en oro laminado 18K proporciona una apariencia dorada elegante",
      "Cadena Tejido eslabón italiano + Virgen de Guadalupe de Colores en Oro Laminado 18K",
      "Elegancia, fe y protección en una joya que enamora",
      "Hay regalos bonitos y regalos que llegan al corazón"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Tejido","Eslabón italiano, con eslabones elegantes y brillantes"],["Color de la cadena","Dorado"],["Diseño del dije","Virgen de Guadalupe en relieve"],["Detalles del dije","Acabados en tonos verdes tipo esmeralda"],["Estilo","Religioso, elegante y femenino"],["Contenido del paquete","1 cadena + 1 dije Virgen de Guadalupe"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  55: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre la belleza de nuestro exclusivo Conjunto Camándula de Balín Diamantado de 3,5 mm + Topos Balín Diamantado en Oro Laminado 18K, una combinación perfecta de espiritualidad, delicadeza y sofisticación, diseñada para mujeres que desean llevar su fe siempre cerca del corazón.",
    benefits: [
      "Elegancia: Su diseño diamantado aporta brillo y sofisticación",
      "Fe y devoción: Una joya que representa tus creencias religiosas",
      "Versatilidad: Combina con diferentes estilos y ocasiones",
      "Conjunto Camándula Virgen Guadalupe + Topos Balín Diamantado – Oro Laminado 18K",
      "Fe, protección y elegancia en una joya que ilumina cada momento",
      "Una joya con significado espiritual"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Acabado dorado 18k","Apariencia elegante y luminosa"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  56: {
    headline: "Una joya que combina fe, protección, elegancia y belleza en cada detalle",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre nuestra hermosa Cadena Tejido Chino de Dama de 45 cm con Dije de la Virgen de Guadalupe de Colores en Oro Laminado 18K, una joya diseñada especialmente para mujeres que desean llevar su fe siempre cerca del corazón, sin renunciar al lujo y la elegancia.",
    benefits: [
      "Protección espiritual: Representa la confianza en el cuidado y la intercesión de la Virgen María",
      "Amor maternal: Simboliza el amor incondicional, la ternura y la unión familiar",
      "Paz y esperanza: Recuerda la importancia de mantener la fe incluso en los momentos difíciles",
      "Bendiciones: Es una expresión de buenos deseos para la persona que lleva la joya",
      "Cadena Tejido Chino de Dama 45 cm + Dije Virgen de Guadalupe de Colores en Oro Laminado 18K",
      "Más que una cadena, es una hermosa expresión de fe que puedes llevar cerca del corazón"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Largo","45 centímetros"],["Tejido","Chino, de eslabones entrelazados"],["Color","Dorado brillante"],["Diseño","Elegante, femenino y sofisticado"],["Estilo","Ideal para lucir sola o acompañada de un dije religioso"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  57: {
    headline: "Una joya que combina fe, protección simbólica, elegancia y belleza en cada detalle",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre nuestro hermoso Conjunto de la Virgen de Guadalupe en Oro Laminado 18K, una combinación delicada y sofisticada, diseñada para mujeres que aman expresar su fe sin dejar de lucir elegantes y modernas.",
    benefits: [
      "Combinación de tres tonos: Oro amarillo, oro rosa y tono plateado",
      "Conjunto Cadena Singapur de Dama de 45 cm + Virgen de Guadalupe + Pulsera Hilo de 3 Oros en Oro Laminado 18K",
      "Una pulsera que complementa perfectamente la cadena y el dije"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Largo","45 cm"],["Tejido","Singapur"],["Diseño","Fino, delicado y femenino"],["Estilo","Ideal para uso diario y ocasiones especiales"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  58: {
    headline: "Lleva tu fe siempre contigo y luce una joya llena de significado",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre la belleza de este exclusivo conjunto para dama, elaborado en Oro Laminado 18K, que combina elegancia, delicadeza y devoción a la Virgen de Guadalupe. Un accesorio diseñado para mujeres que desean expresar su fe sin renunciar al estilo y la sofisticación.",
    benefits: [
      "Cadena Tejido Singapur de 45 cm – 1 mm",
      "Dije Virgen de Guadalupe con Microcircones Verdes",
      "Pulsera Italiana con Virgen de Guadalupe",
      "Elaborado en Oro Laminado 18K",
      "Cadena Singapur de 45 cm y 1 mm de grosor",
      "Dije de la Virgen de Guadalupe con microcircones verdes"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Incluye","Dije de la Virgen de Guadalupe con microcircones verdes"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  59: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Un hermoso conjunto de joyería elaborado en oro laminado 18K, diseñado para mujeres que aman los accesorios delicados, elegantes y llenos de significado.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  60: {
    headline: "Un conjunto que representa fe, protección, bendiciones y elegancia",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Descubre nuestro hermoso Conjunto Virgen Milagrosa en Oro Laminado 18K, una combinación especial de espiritualidad, belleza y delicadeza, diseñada para mujeres que desean llevar su fe siempre cerca del corazón.",
    benefits: [
      "Sistema: Ajustable con nudo corredizo",
      "1 camándula Virgen Milagrosa con balines de 3.5 mm",
      "1 medalla central de la Virgen Milagrosa",
      "1 pulsera de hilo negro con balines de 4 mm"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Balines","3.5 mm"],["Medalla central","Virgen Milagrosa"],["Dije inferior","Cruz dorada"],["Acabado","Dorado brillante"],["Diseño","Religioso, delicado y elegante"],["Material de los balines","Oro laminado 18K"],["Tamaño de los balines","4 mm"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  61: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Pulsera San Benito 3 Oros Diamantada en oro laminado 18K: llevar contigo la medalla de San Benito, símbolo de protección y fe. El oro laminado ofrece un brillo muy similar al oro sólido, con gran resistencia al uso diario.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  62: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Dúo de Pulseras San Benito Negras en oro laminado 18K: llevar contigo la medalla de San Benito, símbolo de protección y fe. El oro laminado ofrece un brillo muy similar al oro sólido, con gran resistencia al uso diario.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  63: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Presentamos nuestro dúo de Pulseras SAN BENITO, elaboradas con balines de 6 mm en Oro Laminado 18K y una hermosa SAN BENITO en Oro Laminado 18K.",
    benefits: [
      "Un símbolo de fe, protección y devoción que puedes llevar siempre contigo",
      "Dije San Benito en Oro Laminado 18K",
      "Perfectas para compartir en pareja, regalar o llevar como símbolo de fe"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  64: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Presentamos este elegante set de 2 pulseras de San Benito, elaboradas con balines diamantados en Oro Laminado 18K, combinando los tonos oro amarillo y oro rosa para crear un diseño moderno, delicado y llamativo.",
    benefits: [
      "Fe, protección y elegancia en un hermoso dúo para compartir",
      "1 Pulsera de San Benito en tono Oro Amarillo",
      "1 Pulsera de San Benito en tono Oro Rosa",
      "Acabado en Oro Laminado 18K",
      "Un dúo que combina protección, elegancia y estilo en cada detalle"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  65: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Presentamos nuestra Cadena para Hombre con tejido clásico, elaborada en Oro Laminado 18K, con un elegante dije de San Benito que le da un significado especial a esta pieza.",
    benefits: [
      "CADENA “SAN BENITO” — tejido clásico EN ORO LAMINADO 18K",
      "Un accesorio elegante que combina estilo, carácter y protección",
      "Dije de San Benito en Oro Laminado 18K",
      "Diseño especial para hombre",
      "Elegante, resistente y fácil de combinar"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Largo","60 cm"],["San benito","Símbolo de fe, protección y fortaleza"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  66: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Presentamos nuestro dúo de Pulseras San Benito, elaboradas en Oro Laminado 18K, con hermoso herraje verde esmeralda de 14 mm y combinadas con hilo verde y beige, creando un diseño elegante, moderno y lleno de significado.",
    benefits: [
      "PULSERA “SAN BENITO” HERraje VERDE ESMERALDA — BALINES EN ORO LAMINADO 18K PARA PAREJA",
      "Un símbolo de fe, protección y fortaleza que puedes compartir con esa persona especial",
      "Herraje de San Benito de 14 mm",
      "Detalles en verde esmeralda",
      "Hilo verde y beige tejido"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["San benito","Símbolo de fe, protección y fortaleza"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  67: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro dúo de Pulseras Italiano de 3 Oros, elaboradas con balines italianos de 6 mm en Oro Laminado 18K, combinando delicados tonos dorado, rosado y plateado para crear un diseño moderno, sofisticado y lleno de personalidad.",
    benefits: [
      "Elegancia, brillo y estilo para llevar contigo todos los días",
      "Incluye 2 pulseras, diseñadas para complementar cualquier look y lucir un estilo elegante y especial",
      "Balines italianos de 6 mm",
      "Ideales para regalar, compartir o lucir en conjunto",
      "Una combinación perfecta de los tres tonos de oro en un diseño delicado, moderno y elegante"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["3 oros","Dorado, rosado y plateado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  68: {
    headline: "Protección para tu día a día",
    quick: ["Pieza individual","Ideal para regalar"],
    description: "Presentamos nuestro Colgante Devocional San Benito, elaborado con cordón tejido y acompañado de diferentes medallas y símbolos religiosos, entre ellos la medalla de San Benito. Su diseño permite colocarlo fácilmente en diferentes espacios del hogar o llevarlo en el vehículo.",
    benefits: [
      "Un detalle lleno de fe y significado para acompañar y decorar los espacios más importantes de tu vida",
      "Ideal para quienes desean mantener presente su fe y devoción en su día a día",
      "Cordón tejido decorativo resistente y llamativo",
      "Medalla principal de San Benito",
      "Acabado decorativo con lazo y flecos",
      "Ideal para colocar en puertas y chapas del hogar"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  69: {
    headline: "Lleva contigo un símbolo de protección espiritual, fortaleza y energía positiva",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestra hermosa Pulsera San Benito con Balines de Esmeralda Verde y Oro Laminado 18K, una joya que combina la elegancia, la espiritualidad y el significado de la protección.",
    benefits: [
      "Ideal para regalar: Un detalle especial para familiares, pareja, amigos o seres queridos",
      "Equilibrio y armonía: La esmeralda simboliza serenidad, esperanza y estabilidad emocional",
      "Energía positiva: Una joya que invita a mantener pensamientos positivos y afrontar cada día con confianza",
      "Fe y fortaleza: Un recordatorio de que la fe puede acompañarte en cada momento de tu vida",
      "Balines de esmeralda verde natural no tratada: piedras asociadas con la armonía y el equilibrio",
      "Balines diamantados en oro laminado 18k: Aportan brillo, elegancia y un acabado sofisticado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Medalla de San Benito","Símbolo de fe, protección y fortaleza espiritual"],["Hilo negro tejido tipo macramé","Resistente, cómodo y elegante"],["Diseño ajustable","Sistema de nudo corredizo que permite adaptarla a diferentes tamaños de muñeca"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  70: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre la belleza de nuestro exclusivo Conjunto San Benito para Dama en Oro Laminado 18K, una combinación perfecta entre la elegancia de la joyería fina y el profundo significado espiritual de la medalla de San Benito.",
    benefits: [
      "Protección espiritual: Símbolo de fe frente al mal y las adversidades",
      "Fortaleza y esperanza: Recuerda la importancia de mantener la confianza en Dios",
      "Fe y devoción: Una hermosa manera de expresar las creencias religiosas",
      "Paz espiritual: Representa la búsqueda de tranquilidad, armonía y bendición",
      "Producto: Conjunto religioso para dama",
      "Una joya que representa fe, protección, elegancia y bendición"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Longitud","45 centímetros"],["Tejido","Veneciano, de diseño delicado y elegante"],["Material","Oro laminado 18K"],["Acabado","Dorado brillante"],["Cadena","Tejido veneciano"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  71: {
    headline: "Un conjunto que combina fe, protección y elegancia en una sola joya",
    quick: ["Oro laminado 18K","Conjunto completo","Ajustable","Ideal para regalar"],
    description: "Descubre nuestro hermoso Conjunto Religioso San Benito, elaborado en oro laminado 18K, diseñado para mujeres que desean llevar un símbolo de fe y protección espiritual sin perder su estilo y elegancia.",
    benefits: [
      "Más que una joya, un símbolo de fe",
      "Lleva tu fe siempre contigo y luce la elegancia del oro laminado 18K",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Cadena","Tejido Singapur de 45 cm"],["Dije","Medalla de San Benito"],["Pulsera","Hilo negro ajustable con balines dorados diamantados"],["Diseño","Religioso, elegante y femenino"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  72: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Descubre nuestra exclusiva Pulsera San Benito con Balines de Esmeralda Natural No Tratada y Oro Laminado 18K, una joya que combina la belleza de las piedras naturales, el brillo del oro y el profundo significado espiritual de la Medalla de San Benito.",
    benefits: [
      "Fe, protección, tranquilidad y elegancia en una sola joya",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  73: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Lleva contigo un símbolo de fe y protección espiritual con nuestra exclusiva Pulsera de San Benito en Oro Laminado 18K, una joya que combina elegancia, tradición religiosa y un diseño moderno.",
    benefits: [
      "Uso: Ideal para todos los días y ocasiones especiales",
      "Protección espiritual: Un recordatorio de fe frente a las energías negativas y las adversidades",
      "Fe y esperanza: Un símbolo para mantener presentes las creencias y la confianza en Dios",
      "Amor y bendiciones: Un detalle especial para regalar a quienes más queremos",
      "Pulsera San Benito con Balín Italiano Diamantado de 6 mm en Oro Laminado 18K",
      "Fe, protección, elegancia y estilo en una sola joya"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Balines","Italianos diamantados de 6 mm"],["Color","Dorado brillante combinado con negro mate"],["Dije central","Medalla de San Benito"],["Tejido","Hilo negro con sistema ajustable"],["Estilo","Elegante, religioso, moderno y unisex"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  74: {
    headline: "Protección para tu día a día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ajustable","Ideal para regalar"],
    description: "Descubre nuestro hermoso Dúo de Pulseras San Benito Doble Nudo, una combinación especial de elegancia, espiritualidad y significado, diseñada para quienes desean llevar un símbolo de fe y protección en su día a día.",
    benefits: [
      "Producto: Dúo de pulseras San Benito",
      "Ideal para: Parejas, amigos, familiares o uso personal",
      "Dúo de Pulseras San Benito Doble Nudo en Oro Laminado 18K",
      "Dos pulseras, una misma fe, protección y unión",
      "Pulsera roja – Fe, amor y protección",
      "Pulsera negra – Fortaleza, seguridad y elegancia"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Cantidad","2 pulseras (una roja y una negra)"],["Diseño","Hilo tejido con doble nudo ajustable"],["Balines","Dorados diamantados de gran brillo"],["Medalla central","San Benito en acabado dorado"],["Detalles","Borde decorado con cristales brillantes"],["Colores","Rojo y negro"],["Talla","Ajustable mediante nudos corredizos"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  75: {
    headline: "Un conjunto que combina belleza, significado y elegancia",
    quick: ["Conjunto completo","Ideal para regalar"],
    description: "Lleva contigo un símbolo de fe, protección y devoción con nuestro hermoso Conjunto San Benito, una combinación perfecta de elegancia y significado espiritual.",
    benefits: [
      "Contenido: 1 cadena veneciana con dije San Benito + 1 pulsera de hilo rojo San Benito",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  76: {
    headline: "Comparte con esa persona especial un símbolo de amor, unión y protección espiritual",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Descubre nuestro hermoso Dúo de Pulseras San Benito en Oro Laminado 18K, diseñado para quienes desean llevar consigo un accesorio elegante, lleno de significado y tradición.",
    benefits: [
      "Regalo especial: Perfectas para aniversarios, cumpleaños, Navidad y celebraciones religiosas",
      "Un regalo para compartir: Una pulsera para ti y otra para esa persona que siempre llevas en tu corazón",
      "Elegancia y significado: El brillo del oro laminado 18K se combina con un diseño religioso tradicional",
      "Dúo de Pulseras San Benito – Amor, Fe y Protección en Oro Laminado 18K",
      "Dos pulseras, una misma fe y una conexión especial",
      "Perfecto para parejas, esposos, novios, familiares o amigos que desean compartir un detalle especial"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Contenido","2 hermosas pulseras San Benito"],["Material","Balines italianos diamantados en oro laminado 18K"],["Diseño","Balines dorados con acabado diamantado que reflejan la luz y aportan un brillo elegante"],["Medalla de San Benito","Cada pulsera incorpora una medalla central dorada con detalles religiosos"],["Hilo rojo","Tejido artesanal tipo macramé que aporta un contraste hermoso con los balines dorados"],["Estilo unisex","Ideales para hombres y mujeres"],["Un detalle inolvidable","Ideal para demostrar amor, cariño y buenos deseos"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  77: {
    headline: "Lleven juntos un símbolo de amor, elegancia y protección espiritual",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Descubre la elegancia y el significado de nuestro hermoso Dúo de Pulseras Balín Italiano de 6 mm en Oro Laminado 18K, una combinación perfecta para parejas que desean llevar un accesorio lleno de estilo, brillo y significado.",
    benefits: [
      "Producto: Dúo de pulseras Balín Italiano",
      "Ocasión: Regalo para parejas, aniversarios y fechas especiales",
      "Dos pulseras, una conexión especial y un símbolo de fe y protección",
      "Dos pulseras, dos corazones y una misma fe"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Tamaño de los balines","6 mm"],["Diseño","Balines italianos tallados con acabado brillante"],["Dije","Medalla de San Benito en cada pulsera"],["Cantidad","2 pulseras"],["Estilo","Elegante, religioso y unisex"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  78: {
    headline: "Fe y protección cada día",
    quick: ["Pieza individual","Ajustable","Ideal para regalar"],
    description: "Nuestra Pulsera 6 Santos de Protección combina un hermoso hilo rojo tejido y ajustable con 6 medallas religiosas en tono plateado, creando una pieza llena de significado, ideal para quienes desean mantener presentes su fe, su familia y sus devociones.",
    benefits: [
      "Más que una pulsera, un símbolo de fe para llevar contigo todos los días",
      "Hay regalos que se usan… y hay regalos que tienen un significado",
      "Entrégala como un regalo lleno de fe y significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  79: {
    headline: "Fe y protección cada día",
    quick: ["Pieza individual","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro Amuleto Príncipe de la Milicia Celestial, inspirado en San Miguel Arcángel y elaborado con cordón rojo ajustable, balines en tono plateado y diferentes medallas religiosas.",
    benefits: [
      "Un símbolo de fe y protección para llevar contigo y acompañarte en cada camino",
      "Cordón rojo resistente y ajustable",
      "Balines decorativos en tono plateado",
      "Medalla de San Miguel Arcángel",
      "Medalla de la Virgen de Guadalupe"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  80: {
    headline: "Que San Miguel Arcángel te acompañe y proteja en cada paso de tu camino",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Presentamos nuestro hermoso Collar de San Miguel Arcángel en Oro Laminado 18K, una joya llena de fe, elegancia y significado espiritual, diseñada para quienes desean llevar siempre consigo un símbolo de protección divina.",
    benefits: [
      "Significado: Protección espiritual, fe, fortaleza y valentía",
      "Ideal para regalar: A familiares, parejas, amigos o personas especiales",
      "Fuerza y valentía: Un recordatorio de que, con fe, podemos enfrentar las dificultades de la vida",
      "Paz y tranquilidad: Una joya que inspira confianza, esperanza y seguridad espiritual",
      "Fe que te acompaña: Lleva contigo un símbolo de devoción y protección divina a donde vayas",
      "Que San Miguel Arcángel te cuide, te defienda de todo mal y te acompañe siempre, dondequiera que vayas"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Cadena","Diseño delicado, elegante y brillante"],["Dije","Medalla ovalada de San Miguel Arcángel"],["Diseño","Imagen religiosa a color con hermoso borde dorado y detalles decorativos"],["Estilo","Elegante, religioso y perfecto para uso diario"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  81: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Descubre nuestra hermosa Pulsera Sagrada 3 Escudos de Protección en Oro Laminado 18K, una joya exclusiva que combina elegancia, espiritualidad y un profundo significado religioso.",
    benefits: [
      "Tres símbolos sagrados, una sola joya llena de fe, amor y protección espiritual",
      "San benito: Reconocido en la tradición cristiana como símbolo de protección contra el mal, fortaleza y fe",
      "Como pulsera en la muñeca",
      "Como tobillera para complementar tu estilo",
      "Como accesorio decorativo para tu bolso",
      "Como llavero, utilizando un aro adecuado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Virgen de guadalupe","Símbolo de amor maternal, esperanza, bendición y protección espiritual"],["Cruz sagrada","Representa el amor de Dios, la salvación, la esperanza y la confianza espiritual"],["Material de los detalles dorados","Oro laminado 18K"],["Cristales","Rojos facetados de hermoso brillo"],["Balines","Dorados, que aportan elegancia y contraste"],["Hilo","Rojo, con detalles tejidos"],["Dijes","Virgen de Guadalupe, Medalla de San Benito y Cruz"],["Diseño","Religioso, elegante y versátil"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  82: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre nuestro exclusivo Conjunto San Miguel Arcángel en Oro Laminado 18K, una combinación de joyería masculina que representa la fe, la fortaleza espiritual, la valentía y la protección divina.",
    benefits: [
      "Recomendaciones de cuidado",
      "Un conjunto que representa fe y fortaleza",
      "Más que una joya, un símbolo de fe que te acompaña todos los días"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Largo","60 cm"],["Grosor","3 mm"],["Tejido","Cubano"],["Color","Dorado brillante"],["Diseño","Masculino, elegante y moderno"],["Estilo","Ideal para uso diario y ocasiones especiales"],["Alas extendidas","Representan su naturaleza celestial y su misión como mensajero de Dios"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  83: {
    headline: "Lleva tu fe con elegancia y estilo",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Lleva contigo un símbolo de fe, fortaleza y estilo con nuestro exclusivo conjunto de Cadena Tejido Chino de 60 cm y 3 mm + Dije Cruz Cristo Madero Verde, elaborado en Oro Laminado 18K.",
    benefits: [
      "Uso: Ideal para ocasiones especiales y uso diario con los cuidados adecuados",
      "Fe, protección y elegancia en una sola joya",
      "Lleva tu fe siempre cerca del corazón",
      "La elegancia de un hombre también se refleja en los detalles",
      "No regales solamente una joya, regala un símbolo de fe y amor",
      "Una cruz diferente para hombres con personalidad"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Cadena","Tejido Chino para hombre"],["Largo","60 centímetros"],["Grosor","3 milímetros"],["Dije","Cruz Cristo Madero con detalles verdes"],["Color","Dorado brillante, tono oro 18K"],["Estilo","Masculino, elegante y religioso"],["La cruz cristo madero verde","Elegancia con significado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  84: {
    headline: "Que San Judas Tadeo te acompañe en los momentos más difíciles de tu vida",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Lleva siempre contigo un hermoso símbolo de fe y esperanza con nuestro exclusivo Collar de San Judas Tadeo en Oro Laminado 18K, una joya religiosa que combina elegancia, devoción y un profundo significado espiritual.",
    benefits: [
      "Protección espiritual: Su imagen representa la confianza en la protección divina",
      "Fe y devoción: Llevar su imagen es una hermosa manera de expresar tus creencias religiosas",
      "Amor y bendiciones: Un regalo especial para expresar tus mejores deseos hacia familiares y amigos",
      "Fe, esperanza, protección y elegancia en una sola joya",
      "Esperanza en los momentos difíciles: Es reconocido como el patrono de las causas difíciles y desesperadas",
      "Para tu esposo o pareja, como símbolo de amor y buenos deseos"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Detalles dorados en Oro Laminado 18K"],["Diseño","Collar religioso elaborado con balines negros y detalles dorados"],["Balines negros","Esferas de acabado brillante que aportan elegancia y personalidad"],["Balines dorados","Distribuidos estratégicamente para crear una combinación moderna y llamativa"],["Dije","San Judas Tadeo, con detalles dorados y vestimenta verde"],["Color verde","Tradicionalmente asociado con la esperanza, la fe y la renovación"],["Estilo","Religioso, elegante y unisex"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  85: {
    headline: "Dos formas de llevar tu fe, un solo símbolo de protección",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Lleva contigo un hermoso símbolo de fe, esperanza y protección espiritual con nuestro exclusivo Relicario Religioso en Tobillera o Pulsera en Oro Laminado 18K.",
    benefits: [
      "Ocasiones: Cumpleaños, aniversarios, celebraciones religiosas y regalos especiales",
      "Para tu pareja: Un detalle que representa amor, compañía y buenos deseos",
      "Hermosos detalles en Oro Laminado 18K",
      "Posibilidad de lucirlo como pulsera o tobillera",
      "Un regalo con profundo significado espiritual",
      "Dos relicarios religiosos"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Detalles metálicos en Oro Laminado 18K"],["Hilo","Negro tejido, de apariencia elegante y moderna"],["Balines","Diamantados en tono oro rosa, con cortes que reflejan la luz"],["Relicarios","Dos hermosos dijes religiosos con imágenes de devoción"],["Diseño","Religioso, moderno y lleno de significado espiritual"],["Presentación","Puede utilizarse como pulsera o tobillera según su tamaño"],["Sistema de ajuste","Cordón con nudo deslizable para mayor comodidad"],["Estilo","Unisex, ideal para hombres y mujeres"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  86: {
    headline: "Fe y protección cada día",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "La Cadena Aros de Dama con Dije de las 3 Gracias en Oro Laminado 18K es una joya femenina, elegante y profundamente significativa, diseñada para mujeres que desean llevar un accesorio que represente sus valores, su espiritualidad y su estilo personal.",
    benefits: [
      "Ideal para: Uso diario, cumpleaños, aniversarios, Día de la Madre y regalos especiales",
      "Cadena Aros de Dama + Dije de las 3 Gracias en Oro Laminado 18K",
      "Fe, esperanza y amor: Tres símbolos, una sola joya llena de significado",
      "Que nunca te falte la fe para seguir adelante",
      "Que nunca pierdas la esperanza de cumplir tus sueños",
      "Que el amor siempre sea la fuerza que guíe tu camino"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Nombre","Cadena Aros de Dama + Dije de las 3 Gracias"],["Material","Oro laminado 18K"],["Tejido","Cadena de eslabones tipo aro"],["Dijes","Cruz, ancla y corazón"],["Color","Dorado, con acabado brillante"],["Diseño","Femenino, delicado, moderno y simbólico"],["Estilo","Elegante, religioso y versátil"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  87: {
    headline: "Dos símbolos de fe, protección y devoción en una sola joya",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre nuestro exclusivo Collar Doble Escudo de Fe, una joya masculina que combina elegancia, tradición religiosa y un diseño moderno, ideal para hombres que desean llevar sus creencias siempre cerca del corazón.",
    benefits: [
      "Protección: Sus medallas representan la fe y la búsqueda de protección divina en el camino de la vida",
      "Devoción: Una joya que permite expresar las creencias religiosas con orgullo y elegancia",
      "Fortaleza: Simboliza la esperanza, la confianza y la fortaleza espiritual frente a los desafíos diarios"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Balines","6 mm en oro rosa laminado 18K, con acabado diamantado"],["Cordón","Negro, resistente, con tejido artesanal y nudos decorativos"],["Dijes","Dos medallas religiosas con imágenes a color y detalles en relieve"],["Diseño","Masculino, elegante, religioso y moderno"],["Combinación de colores","Negro, dorado y oro rosa"],["Estilo","Ideal para uso diario, ocasiones especiales o como regalo significativo"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  88: {
    headline: "Una combinación perfecta para la mujer que ama lucir elegante sin dejar de expresar su fe",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre nuestro hermoso Conjunto de Dama en Oro Laminado 18K, una combinación de accesorios que reúne belleza, delicadeza, espiritualidad y estilo.",
    benefits: [
      "Conjunto de dama: Collar de Cruz + Denario + Topos + Reloj en Oro Laminado 18K",
      "Collar: Diseño religioso con cruz",
      "Ideal para: Cumpleaños, aniversarios, Día de la Madre y regalos especiales",
      "Elegancia, fe y sofisticación en un solo conjunto",
      "Una combinación de belleza, esperanza y espiritualidad",
      "Un regalo pensado para hacerla sentir especial"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material de las joyas","Oro Laminado 18K"],["Denario","Balines dorados con medalla de la Virgen"],["Topos","Diseño femenino y elegante"],["Reloj","Acabado dorado"],["Estilo","Religioso, femenino, moderno y sofisticado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  89: {
    headline: "Un hombre con fe también luce con estilo",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Luce un estilo imponente y sofisticado con nuestro exclusivo Conjunto de Cadena Militar Canotillo de 60 cm + Dije de Cruz + Pulsera Cruz, elaborado en Oro Laminado 18K. Una combinación diseñada para hombres que desean proyectar seguridad, personalidad y elegancia, llevando siempre consigo un símbolo de fe.",
    benefits: [
      "Conjunto Masculino Cruz de Fe – Oro Laminado 18K",
      "Elegancia, fe y protección en un solo conjunto",
      "Su acabado en Oro Laminado 18K proporciona un brillo atractivo y una apariencia sofisticada",
      "En el centro destaca la figura de Cristo crucificado, símbolo de fe, esperanza, amor y sacrificio",
      "Un accesorio que combina el significado espiritual con un diseño moderno y masculino"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  90: {
    headline: "Lleva la suerte y la elegancia siempre contigo",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Descubre nuestra hermosa Pulsera Trébol de la Suerte un accesorio que combina la belleza de los balines verdes de esmeralda natural no tratada con delicados balines diamantados de 4 mm en oro laminado 18K.",
    benefits: [
      "Balines verdes de esmeralda natural no tratada, según especificación del producto",
      "Balines diamantados de 4 mm en oro laminado 18K",
      "Trébol de cuatro hojas en tono dorado",
      "Hilo negro tejido artesanalmente",
      "Diseño ajustable para mayor comodidad",
      "Combinación de verde esmeralda y dorado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  91: {
    headline: "Buena suerte con estilo",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Descubre nuestro exclusivo Juego de Choker Doble para Dama en Oro Laminado 18K, una combinación sofisticada de dos hermosas cadenas que resaltan la belleza femenina y aportan un toque moderno, delicado y elegante a cualquier look.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Primera cadena","Tejido eslabón italiano para dama, de eslabones elegantes y brillantes"],["Dije de cruz","Diseño clásico que simboliza fe, esperanza y protección espiritual"],["Segunda cadena","Tejido Singapur de 45 cm, delicado y de acabado brillante"],["Estilo","Choker doble, moderno, femenino y sofisticado"],["Contenido","2 cadenas + 1 dije de cruz + 1 dije de trébol"],["La cruz de fe","Representa la confianza en Dios, el amor, la esperanza y la fortaleza espiritual"],["Dos cadenas que se complementan","Una representa la fe y la otra la buena suerte. Juntas crean una joya que enamora"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  92: {
    headline: "Lleva la herradura de la suerte siempre contigo",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Descubre nuestro espectacular Anillo de Herradura de la Suerte en Oro Laminado 18K, una joya diseñada para quienes aman el lujo, los accesorios exclusivos y los símbolos de prosperidad.",
    benefits: [
      "Buena suerte: Tradicionalmente se considera un amuleto que representa oportunidades y fortuna",
      "Prosperidad y abundancia: Simboliza el deseo de atraer éxito económico, crecimiento y bienestar",
      "Protección: En distintas tradiciones se utiliza como símbolo para alejar las malas energías",
      "Fortaleza y éxito: Representa la perseverancia, la seguridad y la determinación para alcanzar los objetivos",
      "Anillo de Herradura de la Suerte en Oro Laminado 18K con Microcircones",
      "Elegancia, prosperidad y buena fortuna en una sola joya"
    ],
    howto: "Elige la talla de tu anillo con la guía de tallas. Para conservar el brillo, guarda las piezas secas y evita el contacto con perfumes y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  93: {
    headline: "Un detalle con significado",
    quick: ["Oro laminado 18K","Dúo de piezas","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro dúo de Pulseras de Hilo Rojo con Letra Inicial, elaboradas con balines lisos dorados y detalles en Oro Laminado 18K, perfectas para representar un vínculo de amor, amistad y conexión especial.",
    benefits: [
      "Un detalle especial para llevar contigo a esa persona que hace parte de tu vida",
      "Balines y detalles en Oro Laminado 18K",
      "Perfectas para parejas, mejores amigos, hermanos o personas especiales",
      "Ideal para regalar en Amor y Amistad"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Inicial personalizada","Elige la letra que deseas"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  94: {
    headline: "Elige tu letra favorita y luce tu inicial en Oro Laminado 18K",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Dale un toque único y especial a tu estilo con nuestras cadenas para dama y caballero, elaboradas en Oro Laminado 18K y personalizadas con la inicial que tú elijas.",
    benefits: [
      "Cadena para dama y caballero",
      "Disponible con cualquier letra o inicial",
      "Diseño elegante, moderno y delicado",
      "Perfectas para usar en pareja o individualmente",
      "Ideales para regalar y llevar siempre contigo una letra con significado especial"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  95: {
    headline: "Un detalle con significado",
    quick: ["Oro laminado 18K","Trío de piezas","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro dúo de Pulseras de Hilo Rojo con Letra Inicial, elaboradas con balines lisos dorados y detalles en Oro Laminado 18K, perfectas para representar un vínculo de amor, amistad y conexión especial.",
    benefits: [
      "Un detalle especial para llevar contigo a esa persona que hace parte de tu vida",
      "Balines y detalles en Oro Laminado 18K",
      "Perfectas para parejas, mejores amigos, hermanos o personas especiales",
      "Ideal para regalar en Amor y Amistad"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Inicial personalizada","Elige la letra que deseas"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  96: {
    headline: "Una joya que combina lujo, naturaleza y significado en cada detalle",
    quick: ["Oro laminado 18K","Dúo de piezas","Ajustable","Ideal para regalar"],
    description: "Descubre la belleza de nuestra exclusiva Pulsera de Esmeralda Natural No Tratada en Oro Laminado 18K, una pieza diseñada para quienes aman las joyas elegantes, sofisticadas y llenas de simbolismo.",
    benefits: [
      "Pulsera Esmeralda Natural No Tratada en Oro Laminado 18K – Elegancia, Prosperidad y Protección",
      "Una esmeralda que simboliza prosperidad y armonía",
      "Elegante combinación de oro laminado 18K y piedra verde natural",
      "Pulsera ajustable, cómoda y fácil de combinar",
      "Ideal para uso diario y ocasiones especiales",
      "Excelente opción de regalo para alguien especial"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Incluye","Diseño exclusivo y artesanal"],["Material","Oro laminado 18K de excelente presentación y acabado brillante"],["Piedra central","Esmeralda natural no tratada, con tonalidad verde elegante"],["Balines","Italianos diamantados, con cortes que reflejan la luz"],["Diseño","Combinación de balines dorados, plateados y oro rosa"],["Tejido","Macramé artesanal, resistente y elegante"],["Colores disponibles","Hilo verde esmeralda y beige"],["Tamaño","Ajustable mediante nudo corredizo para adaptarse cómodamente a diferentes muñecas"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  97: {
    headline: "Una combinación perfecta de fe, elegancia, tradición y exclusividad",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Descubre la belleza de nuestro exclusivo Conjunto de Rosario en Balín Italiano Diamantado de 8 mm + Pulsera en Balín Italiano de 6 mm con detalles en verde esmeralda, elaborado en Oro Laminado 18K.",
    benefits: [
      "Elegancia: El acabado diamantado de los balines italianos proporciona un brillo atractivo",
      "Fe y tradición: Un accesorio que permite expresar las creencias religiosas con estilo",
      "Regalo especial: Ideal para cumpleaños, aniversarios, celebraciones religiosas y ocasiones importantes",
      "Versatilidad: Perfecto para complementar atuendos casuales y elegantes",
      "Conjunto de Rosario Balín Italiano 8 mm + Pulsera Balín Italiano 6 mm con Esmeralda Verde en Oro Laminado 18K",
      "Cruz: Hermoso dije de cruz dorada decorada con piedras de tonalidad verde esmeralda y detalles brillantes"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Balines","Italianos diamantados de 8 mm, con acabado brillante y textura tallada"],["Diseño","Rosario con cordón negro resistente que contrasta elegantemente con los balines dorados"],["Dije central","Medalla religiosa que aporta un detalle especial de devoción"],["Estilo","Elegante, religioso y llamativo, ideal para hombres y mujeres"],["Diseño exclusivo","La combinación de dorado, negro y verde crea una apariencia elegante y diferente"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  98: {
    headline: "Elegancia con color",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Dos pulseras, una conexión especial y el hermoso significado de la esmeralda verde: esperanza, prosperidad, armonía y renovación.",
    benefits: [
      "Prosperidad y abundancia: Simboliza el crecimiento y las nuevas oportunidades",
      "Renovación y esperanza: Su color verde representa la vida y los nuevos comienzos",
      "Armonía y tranquilidad: Se asocia simbólicamente con el equilibrio emocional",
      "Amor y unión: Representa los vínculos especiales entre dos personas",
      "Protección espiritual: En algunas tradiciones se utiliza como símbolo de protección y energía positiva",
      "Dúo de Pulseras Balín Italiano Diamantado de 6 mm con Esmeralda Natural – Oro Laminado 18K"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  99: {
    headline: "Una joya que combina lujo, naturaleza y significado en cada detalle",
    quick: ["Oro laminado 18K","Dúo de piezas","Ajustable","Ideal para regalar"],
    description: "Descubre la belleza de nuestra exclusiva Pulsera de Esmeralda Natural No Tratada en Oro Laminado 18K, una pieza diseñada para quienes aman las joyas elegantes, sofisticadas y llenas de simbolismo.",
    benefits: [
      "Pulsera Esmeralda Natural No Tratada en Oro Laminado 18K – Elegancia, Prosperidad y Protección",
      "Una esmeralda que simboliza prosperidad y armonía",
      "Elegante combinación de oro laminado 18K y piedra verde natural",
      "Pulsera ajustable, cómoda y fácil de combinar",
      "Ideal para uso diario y ocasiones especiales",
      "Excelente opción de regalo para alguien especial"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Incluye","Diseño exclusivo y artesanal"],["Material","Oro laminado 18K de excelente presentación y acabado brillante"],["Piedra central","Esmeralda natural no tratada, con tonalidad verde elegante"],["Balines","Italianos diamantados, con cortes que reflejan la luz"],["Diseño","Combinación de balines dorados, plateados y oro rosa"],["Tejido","Macramé artesanal, resistente y elegante"],["Colores disponibles","Hilo verde esmeralda y beige"],["Tamaño","Ajustable mediante nudo corredizo para adaptarse cómodamente a diferentes muñecas"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  100: {
    headline: "Orgullo colombiano",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Dúo de Pulseras Tricolor Colombia en oro laminado 18K: llevar los colores de Colombia con orgullo, ideal para los partidos y el día a día. El oro laminado ofrece un brillo muy similar al oro sólido, con gran resistencia al uso diario.",
    benefits: [
      "Acabado premium con 8 laminas de oro de 18K",
      "Color intenso y brillo que luce como el oro auténtico",
      "Mayor resistencia al desgaste y al uso diario",
      "No se oxida ni cambia de color fácilmente con el cuidado adecuado",
      "Material hipoalergénico, cómodo y seguro para la mayoría de las pieles"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  101: {
    headline: "Brillo para cada día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ideal para regalar"],
    description: "Dúo de Pulseras 3 Carriles Balín Italiano en oro laminado 18K: un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche. El oro laminado ofrece un brillo muy similar al oro sólido, con gran resistencia al uso diario.",
    benefits: [
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo",
      "Ideal para regalar: un detalle bonito y con significado"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  102: {
    headline: "Brillo para cada día",
    quick: ["Oro laminado 18K","Dúo de piezas","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro dúo de pulseras tejidas, elaboradas con balines lisos de 4 mm en Oro Laminado 18K, cuidadosamente integrados en un delicado tejido que combina el acabado artesanal con un toque sofisticado.",
    benefits: [
      "Elegancia, sencillez y brillo para complementar tu estilo todos los días",
      "Diseño delicado, cómodo y ajustable",
      "Perfectas para compartir en pareja, regalar o complementar diferentes estilos"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  103: {
    headline: "Brillo para cada día",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Presentamos nuestro hermoso Conjunto Rosario de Dama + Pulsera Diamantada, elaborado en Oro Laminado 18K, una combinación delicada y sofisticada que realza cualquier look y es perfecta para llevar todos los días.",
    benefits: [
      "Elegancia, fe y brillo para llevar siempre contigo",
      "Rosario de dama de 45 cm",
      "Pulsera diamantada a juego",
      "Excelente acabado y brillo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  104: {
    headline: "Brillo para cada día",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Presentamos nuestro Dúo de Pulseras de 3 Carriles, elaboradas con balines italianos de 6 mm y 4 mm en Oro Laminado 18K, creando una combinación moderna, sofisticada y llamativa.",
    benefits: [
      "Balín italiano de 6 mm y 4 mm",
      "Ideales para regalar y compartir",
      "Diseño moderno, elegante y versátil",
      "Tres carriles que se combinan para crear un look con mayor presencia y brillo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  105: {
    headline: "Brillo para cada día",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Una joya que enamora a primera vista, diseñada para mujeres que aman los detalles delicados, elegantes y llenos de significado.",
    benefits: [
      "Ideal para: Regalos de cumpleaños, aniversarios, San Valentín o cualquier ocasión especial",
      "Porque una mujer elegante merece una joya que refleje su belleza",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Largo de la cadena","45 cm, ideal para dama"],["Cadena","Tejido delicado de eslabones ovalados, elegante y femenino"],["Dije","Corazón con centro de acabado nacarado blanco"],["Detalles","Borde decorado con pequeñas piedras brillantes tipo circón"],["Color","Dorado brillante con detalles blancos"],["Diseño","Femenino, romántico, moderno y sofisticado"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  106: {
    headline: "Una joya que combina fe, protección espiritual, elegancia y estilo masculino",
    quick: ["Oro laminado 18K","Cadena + dije","Ideal para regalar"],
    description: "Descubre nuestra exclusiva Camándula Italiana en Oro Laminado 18K, diseñada para hombres que desean llevar consigo un símbolo de fe y devoción sin renunciar a la elegancia.",
    benefits: [
      "Fe y devoción: Representa la conexión espiritual con Dios y la Virgen María",
      "Su diseño de balines diamantados italianos aporta un brillo especial",
      "Sus 60 cm ofrecen una presentación masculina y elegante",
      "Combina dos símbolos religiosos importantes: la Virgen Milagrosa y Cristo crucificado",
      "Es perfecta para regalar a papá, esposo, novio, hermano o a una persona especial",
      "Ideal para hombres que valoran la fe, la tradición y la elegancia"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Longitud","60 cm"],["Balines","Italianos diamantados de 6 mm"],["Color","Dorado brillante"],["Diseño","Camándula religiosa para hombre"],["Medalla central","Virgen Milagrosa con detalles decorativos"],["Dije final","Cruz de Cristo crucificado"],["Acabado","Brillante, elegante y llamativo"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  107: {
    headline: "Elegancia, estilo y distinción en cada detalle",
    quick: ["Oro laminado 18K","Conjunto completo","Ideal para regalar"],
    description: "Luce un estilo moderno, masculino y sofisticado con nuestro exclusivo conjunto de cadena y pulsera en Oro Laminado 18K, diseñado para hombres que buscan destacar con accesorios elegantes y versátiles.",
    benefits: [
      "Un conjunto que representa estilo y personalidad",
      "Acabado dorado brillante: luce elegante en el día a día y en ocasiones especiales",
      "Cómodo de usar: liviano y fácil de combinar con cualquier atuendo"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Cadena","60 cm de largo"],["Grosor de la cadena","3 mm"],["Pulsera","20 cm de largo"],["Grosor de la pulsera","3 mm"],["Color","Dorado, tono oro 18K"],["Diseño","Tejido de eslabones entrelazados con acabado brillante"],["Estilo","Masculino, elegante y moderno"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  108: {
    headline: "Una pulsera que impone presencia y refleja tu personalidad",
    quick: ["Oro laminado 18K","Pieza individual","Ideal para regalar"],
    description: "Descubre la elegancia y el diseño imponente de nuestra exclusiva Pulsera Tejido Chino Grueso de 1 CM en Oro Laminado 18K, una joya diseñada especialmente para hombres que buscan destacar con accesorios de gran presencia, brillo y sofisticación.",
    benefits: [
      "Regalo: Perfecto para cumpleaños, aniversarios, Día del Padre o cualquier ocasión especial",
      "Elegancia, poder y estilo en una sola joya",
      "Tejido: Chino grueso, formado por eslabones entrelazados que crean un acabado elegante y de gran presencia",
      "Uso: Ideal para ocasiones especiales, reuniones, celebraciones o para complementar tu vestuario diario"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Grosor","1 CM (10 mm), diseño grueso y llamativo"],["Color","Dorado brillante, con una hermosa tonalidad inspirada en el oro de 18K"],["Estilo","Masculino, moderno, elegante y sofisticado"],["Acabado","Eslabones pulidos que resaltan el brillo y la belleza del tejido"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  109: {
    headline: "Tres tamaños, un mismo brillo y toda la elegancia del oro",
    quick: ["Oro laminado 18K","Trío de piezas","Ideal para regalar"],
    description: "Descubre nuestro hermoso Trío de Topos Balín Diamantado x3 en Oro Laminado 18K, un conjunto de aretes diseñado para mujeres que aman la elegancia, la delicadeza y los accesorios que nunca pasan de moda.",
    benefits: [
      "Excelente opción de regalo: Tres pares en un solo conjunto, ideales para sorprender a una persona especial",
      "Trío de Topos Balín Diamantado x3 en Oro Laminado 18K",
      "Tres tamaños para diferentes estilos",
      "Copy publicitario con el método AIDA",
      "Elegante tonalidad dorada"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro Laminado 18K"],["Color","Dorado brillante, con tonalidad inspirada en el oro de 18 quilates"],["Acabado","Diamantado con delicados cortes decorativos"],["Diseño","Balín esférico con grabados en forma de ondas"],["Estilo","Elegante, femenino, moderno y versátil"],["Cantidad","3 pares de topos, para un total de 6 piezas"],["Sistema de cierre","Poste con mariposa de presión"],["Acabado diamantado","Sus grabados crean reflejos de luz que aportan un brillo muy atractivo"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  },
  110: {
    headline: "Tres colores, un solo diseño y un brillo que enamora",
    quick: ["Oro laminado 18K","Pieza individual","Ajustable","Ideal para regalar"],
    description: "Descubre la elegancia y sofisticación de nuestra hermosa Pulsera Balín Italiano Diamantado de 6 mm en 3 Oros, elaborada en oro laminado 18K, una joya diseñada para mujeres que aman destacar con accesorios delicados, modernos y llenos de estilo.",
    benefits: [
      "Oro amarillo: Aporta lujo, elegancia y un brillo clásico",
      "Oro rosa: Representa delicadeza, romanticismo y feminidad",
      "Oro blanco: Brinda sofisticación, modernidad y un toque exclusivo",
      "Pulsera Balín Italiano Diamantado de 6 mm en 3 Oros con Cadena Veneciana – Oro Laminado 18K",
      "Balines italianos diamantados de 6 mm",
      "Cadena veneciana con cierre ajustable"
    ],
    howto: "Para conservar el brillo, guarda las piezas secas, por separado, y evita el contacto con perfumes, cremas y químicos.",
    specs: [["Material","Oro laminado 18K"],["Diseño","Combinación de tres tonos de oro"]],
    note: "Para que el oro laminado conserve su brillo por más tiempo, evita el contacto con agua, perfumes, cremas y productos químicos."
  }
};

// Segunda imagen deslizable de cada producto: "¿Para qué sirve y cómo se usa?"
// rutina: frase corta que responde "¿para qué tipo de rutina es?"
// filas: [etiqueta, texto corto (tarjeta del catálogo), texto completo (ficha del producto)]
// IMPORTANTE: confirma las dosis de los suplementos con la etiqueta o el proveedor.
const PRODUCT_INFO = {
  1: { rutina: "Control de azúcar y metabolismo", filas: [
    ["Sirve para", "Cuidar el azúcar y el metabolismo", "Apoyar niveles saludables de azúcar en la sangre y el metabolismo de las comidas."],
    ["Cómo se toma", "1 gotero en agua, 2 veces al día", "1 gotero (aprox. 1 ml) directo o en medio vaso de agua, 2 veces al día."],
    ["Cuándo", "Antes del desayuno y la cena", "15 a 30 minutos antes del desayuno y de la cena."],
    ["Ideal para", "Adultos que cuidan su azúcar o peso", "Adultos que cuidan su azúcar o su peso. Si tomas medicamentos para la diabetes, consulta antes a tu médico."]
  ]},
  10: { rutina: "Defensas y bienestar diario", filas: [
    ["Sirve para", "Reforzar defensas y antioxidantes", "Aportar antioxidantes de guanábana, moringa y cúrcuma para apoyar tus defensas."],
    ["Cómo se toma", "1 gotero en agua o jugo", "1 gotero (aprox. 1 ml) en agua o jugo, 1 o 2 veces al día."],
    ["Cuándo", "En la mañana", "En la mañana, con o sin comida. Lo ideal es tomarlo todos los días."],
    ["Ideal para", "Adultos que se enferman seguido", "Adultos que quieren reforzar sus defensas. Adultos mayores: consulta antes a tu médico."]
  ]},
  11: { rutina: "Desinflamar y sentirte ligero", filas: [
    ["Sirve para", "Menos hinchazón y retención", "Ayudar a reducir la hinchazón, la pesadez y la retención de líquidos."],
    ["Cómo se toma", "1 gotero en medio vaso de agua", "1 gotero (aprox. 1 ml) en medio vaso de agua, 2 veces al día."],
    ["Cuándo", "Mañana y tarde", "En la mañana y en la tarde. Toma bastante agua durante el día."],
    ["Ideal para", "Piernas cansadas o hinchadas", "Personas con piernas cansadas o hinchadas, o que pasan muchas horas de pie o sentadas."]
  ]},
  13: { rutina: "Descanso, relajación y músculos", filas: [
    ["Sirve para", "Menos cansancio, calambres y tensión", "Apoyar músculos y nervios: menos cansancio, calambres y tensión. Ayuda a relajarte."],
    ["Cómo se toma", "1 cápsula con un vaso de agua", "1 cápsula con un vaso de agua, 1 o 2 veces al día."],
    ["Cuándo", "Con la comida o en la noche", "Con las comidas. Si buscas dormir mejor, tómala en la noche."],
    ["Ideal para", "Adultos y adultos mayores", "Adultos con estrés, mucha actividad o calambres. Muy usado por adultos mayores (consulta si tienes problemas renales)."]
  ]},
  3: { rutina: "Cuidado de ojeras, mañana y noche", filas: [
    ["Sirve para", "Ojeras, bolsas y líneas finas", "Hidratar el contorno de ojos y mejorar la apariencia de ojeras, bolsas y líneas finas."],
    ["Cómo se usa", "Toquecitos suaves bajo el ojo", "Aplica una pequeña cantidad y extiende con toquecitos suaves, sin frotar."],
    ["Cuándo", "Mañana y noche", "Mañana y noche, con la piel limpia y seca."],
    ["Ideal para", "Si duermes poco o te ves cansado", "Quien duerme poco, trabaja frente a pantallas o nota la mirada cansada."]
  ]},
  2: { rutina: "Limpieza facial profunda en casa", filas: [
    ["Sirve para", "Limpiar poros y puntos negros", "Limpiar los poros a fondo, retirar impurezas y ayudar a que tus cremas penetren mejor."],
    ["Cómo se usa", "Piel húmeda, deslizar suave", "Con la piel húmeda, desliza la pala inclinada suavemente sobre el rostro durante 3 a 5 minutos."],
    ["Cuándo", "2 a 3 veces por semana", "2 o 3 veces por semana, preferiblemente en la noche."],
    ["Ideal para", "Piel grasa o con poros abiertos", "Piel grasa, mixta, con puntos negros o poros abiertos."]
  ]},
  6: { rutina: "Cuidado capilar con luz LED", filas: [
    ["Sirve para", "Cepillar con luz LED y tónico", "Cepillar el cabello mientras usas la luz LED y aplicas tu tónico o aceite con el rociador."],
    ["Cómo se usa", "Enciéndelo y cepilla por secciones", "Enciéndelo, elige la luz, activa el rociador si quieres y cepilla suavemente por secciones."],
    ["Cuándo", "Unos minutos al día", "Unos minutos al día, en tu rutina de la mañana o de la noche."],
    ["Ideal para", "Quien cuida su cabello en casa", "Quien quiere una rutina capilar práctica en casa, sin cables ni pilas."]
  ]},
  9: { rutina: "Liso rápido antes de salir", filas: [
    ["Sirve para", "Alisar y peinar a la vez", "Alisar y peinar en un solo paso, sin necesidad de plancha."],
    ["Cómo se usa", "Cabello seco, por mechones", "Con el cabello seco, pasa el cepillo caliente por mechones de la raíz a las puntas."],
    ["Cuándo", "En minutos, antes de salir", "Cuando quieras un liso rápido: listo en pocos minutos."],
    ["Ideal para", "Quien no tiene tiempo para plancha", "Quien quiere el cabello liso y arreglado sin complicarse."]
  ]},
  4: { rutina: "Iluminación exterior sin pagar luz", filas: [
    ["Sirve para", "Iluminar patios, fachadas y lotes", "Iluminar patios, fachadas, parqueaderos y lotes sin gastar en electricidad."],
    ["Cómo se usa", "Panel al sol, reflector donde quieras", "Pon el panel donde reciba sol directo y el reflector donde necesites luz. Sin cables a la red."],
    ["Cuándo", "Carga de día, alumbra de noche", "Se carga con el sol durante el día y alumbra en la noche."],
    ["Ideal para", "Casas, fincas y negocios", "Casas, fincas, negocios y parqueaderos que quieren más seguridad."]
  ]},
  12: { rutina: "Decoración solar para tus noches", filas: [
    ["Sirve para", "Decorar árboles, patios y balcones", "Decorar árboles, patios, balcones, jardines y fachadas con 200 luces LED."],
    ["Cómo se usa", "Panel al sol y listo", "Pon el panel al sol y distribuye la cadena. Se encienden solas al anochecer y con MODE cambias el efecto."],
    ["Cuándo", "Todas las noches y en fiestas", "Todas las noches, en fiestas, reuniones y Navidad."],
    ["Ideal para", "Hogares, terrazas y eventos", "Hogares, terrazas, negocios y eventos al aire libre (resiste la lluvia)."]
  ]},
  14: { rutina: "Decoración solar para tus noches", filas: [
    ["Sirve para", "Decorar árboles, patios y balcones", "Decorar árboles, patios, balcones, jardines y fachadas con 500 luces LED."],
    ["Cómo se usa", "Panel al sol y listo", "Pon el panel al sol y distribuye la cadena. Se encienden solas al anochecer y con MODE cambias el efecto."],
    ["Cuándo", "Todas las noches y en fiestas", "Todas las noches, en fiestas, reuniones y Navidad."],
    ["Ideal para", "Hogares, terrazas y eventos", "Hogares, terrazas, negocios y eventos al aire libre (resiste la lluvia)."]
  ]},
  5: { rutina: "Limpieza profunda sin químicos", filas: [
    ["Sirve para", "Limpiar y desinfectar con solo agua", "Quitar grasa y mugre pegada, y desinfectar usando solo agua."],
    ["Cómo se usa", "Agua, esperar vapor y pasar", "Llena el depósito con agua, espera a que salga vapor y pasa el accesorio por la superficie."],
    ["Dónde", "Cocina, baños, pisos y muebles", "Cocina, baños, pisos, vidrios, colchones y muebles tapizados."],
    ["Ideal para", "Hogares con niños o mascotas", "Hogares con niños o mascotas que prefieren limpiar sin químicos fuertes."]
  ]},
  8: { rutina: "Orden en espacios pequeños", filas: [
    ["Sirve para", "Ropa, zapatos y bolsos en un mueble", "Organizar ropa, zapatos, bolsos y accesorios en un solo mueble."],
    ["Cómo se usa", "Se arma fácil en casa", "Se arma en casa siguiendo las instrucciones incluidas."],
    ["Dónde", "Habitación o entrada", "Habitaciones, entradas, pasillos y apartaestudios."],
    ["Ideal para", "Espacios pequeños", "Quien tiene poco espacio o no tiene clóset."]
  ]},
  7: { rutina: "Seguridad y tranquilidad", filas: [
    ["Sirve para", "Ubicar carro, moto, mascota u objetos", "Saber dónde están tu vehículo, moto, mascota, maleta u objetos de valor."],
    ["Cómo se usa", "Cárgalo y míralo en tu celular", "Cárgalo, actívalo y consulta la ubicación desde tu celular. Te ayudamos por WhatsApp."],
    ["Cuándo", "Viajes, parqueo y día a día", "En viajes, al dejar el carro parqueado o para cuidar a tu mascota."],
    ["Ideal para", "Conductores, familias y mascotas", "Conductores, familias y dueños de mascotas."]
  ]},
  15: { rutina: "Estilo elegante para toda ocasión", filas: [
    ["Sirve para", "Lucir elegante y con presencia", "Completar tu look con un conjunto dorado que llama la atención y combina pulsera y anillo."],
    ["Cómo se usa", "Ajusta la pulsera con el nudo", "Desliza el nudo corredizo para ajustar la pulsera a tu muñeca y ponte el anillo en tu dedo preferido."],
    ["Cuándo", "Ocasiones especiales y día a día", "En reuniones, celebraciones, salidas o en tu día a día, con ropa casual o elegante."],
    ["Ideal para", "Regalar a un hombre con estilo", "Hombres que cuidan su imagen. Un regalo perfecto para cumpleaños, aniversarios y Navidad."]
  ]},
  16: { rutina: "Fe y elegancia para cada día", filas: [
    ["Sirve para", "Llevar tu fe con estilo", "Llevar contigo un símbolo de fe y amor, con un conjunto dorado y rojo que luce hermoso."],
    ["Cómo se usa", "Ajusta la pulsera con el hilo", "Ponte la cadena y ajusta la pulsera deslizando el nudo hasta la medida de tu muñeca."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en misas, celebraciones y fechas especiales; juntas o por separado."],
    ["Ideal para", "Regalar a mamá, esposa o pareja", "Mamá, esposa, pareja o alguien especial. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  17: { rutina: "Estilo y presencia", filas: [
    ["Sirve para", "Lucir un estilo seguro y elegante", "Un diseño dorado con corona que da presencia y personalidad a tu look."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  18: { rutina: "Estilo y presencia", filas: [
    ["Sirve para", "Lucir un estilo seguro y elegante", "Un diseño dorado con corona que da presencia y personalidad a tu look."],
    ["Cómo se usa", "Elige tu talla", "Mide tu dedo con la guía de tallas y elige la talla correcta al pedir."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  19: { rutina: "Estilo y presencia", filas: [
    ["Sirve para", "Lucir un estilo seguro y elegante", "Un diseño dorado con corona que da presencia y personalidad a tu look."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  20: { rutina: "Estilo y presencia", filas: [
    ["Sirve para", "Lucir un estilo seguro y elegante", "Un diseño dorado con corona que da presencia y personalidad a tu look."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  21: { rutina: "Estilo y presencia", filas: [
    ["Sirve para", "Lucir un estilo seguro y elegante", "Un diseño dorado con corona que da presencia y personalidad a tu look."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  22: { rutina: "Estilo y presencia", filas: [
    ["Sirve para", "Lucir un estilo seguro y elegante", "Un diseño dorado con corona que da presencia y personalidad a tu look."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  23: { rutina: "Estilo y presencia", filas: [
    ["Sirve para", "Lucir un estilo seguro y elegante", "Un diseño dorado con corona que da presencia y personalidad a tu look."],
    ["Cómo se usa", "Elige tu talla", "Mide tu dedo con la guía de tallas y elige la talla correcta al pedir."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  24: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  25: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  26: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  27: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  28: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Elige tu talla", "Mide tu dedo con la guía de tallas y elige la talla correcta al pedir."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  29: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  30: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  31: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Elige tu talla", "Mide tu dedo con la guía de tallas y elige la talla correcta al pedir."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  32: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  33: { rutina: "Abundancia con estilo", filas: [
    ["Sirve para", "Atraer buena energía y prosperidad", "Un símbolo de abundancia y prosperidad que llevas contigo con un acabado dorado brillante."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  34: { rutina: "Fe y elegancia para cada día", filas: [
    ["Sirve para", "Llevar tu fe con estilo", "Llevar contigo el Sagrado Corazón de Jesús, símbolo de fe, amor y protección."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  35: { rutina: "Fe y elegancia para cada día", filas: [
    ["Sirve para", "Llevar tu fe con estilo", "Llevar contigo el Sagrado Corazón de Jesús, símbolo de fe, amor y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  36: { rutina: "Fe y elegancia para cada día", filas: [
    ["Sirve para", "Llevar tu fe con estilo", "Llevar contigo el Sagrado Corazón de Jesús, símbolo de fe, amor y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  37: { rutina: "Fe y elegancia para cada día", filas: [
    ["Sirve para", "Llevar tu fe con estilo", "Llevar contigo el Sagrado Corazón de Jesús, símbolo de fe, amor y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  38: { rutina: "Fe y elegancia para cada día", filas: [
    ["Sirve para", "Llevar tu fe con estilo", "Llevar contigo el Sagrado Corazón de Jesús, símbolo de fe, amor y protección."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  39: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  40: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  41: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  42: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  43: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  44: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  45: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  46: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  47: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  48: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  49: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  50: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  51: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  52: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  53: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  54: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  55: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  56: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  57: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  58: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  59: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen de Guadalupe", "Llevar contigo a la Virgen de Guadalupe, símbolo de amor, esperanza y protección."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  60: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar contigo a la Virgen Milagrosa", "Llevar contigo a la Virgen Milagrosa, símbolo de fe, esperanza y protección."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  61: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  62: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  63: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  64: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  65: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  66: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  67: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  68: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  69: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  70: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  71: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  72: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  73: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  74: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  75: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  76: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  77: { rutina: "Protección para tu día a día", filas: [
    ["Sirve para", "Llevar la protección de San Benito", "Llevar contigo la medalla de San Benito, símbolo de protección y fe."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  78: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  79: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  80: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  81: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  82: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  83: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  84: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  85: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  86: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  87: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  88: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  89: { rutina: "Fe y protección cada día", filas: [
    ["Sirve para", "Llevar un símbolo de fe y protección", "Llevar contigo un símbolo de fe, fortaleza y protección espiritual."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  90: { rutina: "Buena suerte con estilo", filas: [
    ["Sirve para", "Atraer buena suerte y energía positiva", "Un símbolo de buena suerte y energía positiva con un acabado elegante."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  91: { rutina: "Buena suerte con estilo", filas: [
    ["Sirve para", "Atraer buena suerte y energía positiva", "Un símbolo de buena suerte y energía positiva con un acabado elegante."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  92: { rutina: "Buena suerte con estilo", filas: [
    ["Sirve para", "Atraer buena suerte y energía positiva", "Un símbolo de buena suerte y energía positiva con un acabado elegante."],
    ["Cómo se usa", "Elige tu talla", "Mide tu dedo con la guía de tallas y elige la talla correcta al pedir."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  93: { rutina: "Un detalle con significado", filas: [
    ["Sirve para", "Llevar tu inicial o la de alguien especial", "Llevar tu inicial o la de esa persona especial en una joya única y personal."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  94: { rutina: "Un detalle con significado", filas: [
    ["Sirve para", "Llevar tu inicial o la de alguien especial", "Llevar tu inicial o la de esa persona especial en una joya única y personal."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  95: { rutina: "Un detalle con significado", filas: [
    ["Sirve para", "Llevar tu inicial o la de alguien especial", "Llevar tu inicial o la de esa persona especial en una joya única y personal."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  96: { rutina: "Elegancia con color", filas: [
    ["Sirve para", "Lucir el verde esmeralda con el dorado", "Una combinación de verde esmeralda y dorado que luce elegante y llamativa."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  97: { rutina: "Elegancia con color", filas: [
    ["Sirve para", "Lucir el verde esmeralda con el dorado", "Una combinación de verde esmeralda y dorado que luce elegante y llamativa."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  98: { rutina: "Elegancia con color", filas: [
    ["Sirve para", "Lucir el verde esmeralda con el dorado", "Una combinación de verde esmeralda y dorado que luce elegante y llamativa."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  99: { rutina: "Elegancia con color", filas: [
    ["Sirve para", "Lucir el verde esmeralda con el dorado", "Una combinación de verde esmeralda y dorado que luce elegante y llamativa."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  100: { rutina: "Orgullo colombiano", filas: [
    ["Sirve para", "Lucir los colores de Colombia", "Llevar los colores de Colombia con orgullo, ideal para los partidos y el día a día."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  101: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  102: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  103: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  104: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  105: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Mujeres que aman brillar", "Mamá, esposa, novia, hija o amiga. Un regalo con significado para Navidad y cumpleaños."]
  ]},
  106: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  107: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Hombres con estilo", "Hombres que quieren un accesorio con presencia. Un gran regalo para papá, pareja o un amigo."]
  ]},
  108: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  109: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Póntela y luce", "Combínala con tu ropa de diario o con un look elegante para ocasiones especiales."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]},
  110: { rutina: "Brillo para cada día", filas: [
    ["Sirve para", "Lucir un accesorio dorado elegante", "Un accesorio dorado y brillante que eleva cualquier atuendo, de día o de noche."],
    ["Cómo se usa", "Ajústala a tu medida", "Desliza el ajuste hasta la medida de tu muñeca o cuello, y listo."],
    ["Cuándo", "Diario y ocasiones especiales", "En tu día a día, en celebraciones y fechas especiales; sola o combinada con otras joyas."],
    ["Ideal para", "Regalar a alguien especial", "Para ti o para regalar en Navidad, cumpleaños, aniversarios y fechas especiales."]
  ]}
};
