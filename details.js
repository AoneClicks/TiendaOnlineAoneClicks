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
    description: "Guirnalda de 200 bombillos LED multicolor que funciona con energía solar: su panel se carga con el sol durante el día y las luces se encienden solas al anochecer. Es resistente a la lluvia, ideal para decorar patios, jardines, balcones, terrazas y fachadas, sin cables a la toma ni costos en tu factura de luz.",
    benefits: ["Carga solar automática: 100% ecológica", "Encendido inteligente al anochecer", "Resistente a la lluvia, ideal para exteriores", "200 bombillos LED multicolor para una decoración llamativa"],
    howto: "Ubica el panel en un lugar donde reciba sol directo, distribuye la guirnalda donde quieras decorar y déjala cargar durante el día.",
    specs: [["Bombillos", "200 LED"], ["Color", "Multicolor"], ["Energía", "Solar, con encendido automático"], ["Uso", "Exteriores e interiores, resistente a la lluvia"], ["Incluye", "Guirnalda y panel solar"]],
    note: "La duración de la luz depende de las horas de sol recibidas durante el día."
  },
  13: {
    headline: "El mineral esencial que tu cuerpo necesita",
    description: "Magnesium Citrate es un suplemento de citrato de magnesio de 500 mg en cápsulas, una de las formas de magnesio más usadas en rutinas de bienestar. El magnesio participa en el funcionamiento normal de músculos y nervios, por eso es un buen aliado si buscas sentir menos fatiga y tensión muscular en tu día a día.",
    benefits: ["Apoya el funcionamiento normal de músculos y nervios", "Ayuda a disminuir la sensación de cansancio y fatiga", "Citrato de magnesio de 500 mg por porción", "Frasco de 100 cápsulas, fácil de tomar y de llevar"],
    howto: "Toma las cápsulas indicadas en el empaque con un vaso de agua, preferiblemente junto con las comidas.",
    specs: [["Tipo", "Citrato de magnesio"], ["Concentración", "500 mg"], ["Presentación", "Cápsulas"], ["Contenido", "100 cápsulas"], ["Incluye", "1 frasco por unidad"]],
    note: "Suplemento dietario: no es un medicamento ni reemplaza un tratamiento médico. Consulta a un profesional de la salud antes de usarlo, especialmente si estás embarazada, lactando, tienes problemas renales o tomas medicamentos."
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
  6: { rutina: "Peinado diario sin tirones", filas: [
    ["Sirve para", "Desenredar y dar brillo", "Desenredar sin jalones y dejar el cabello más suave y con brillo."],
    ["Cómo se usa", "De las puntas hacia la raíz", "Cepilla de las puntas hacia la raíz con movimientos suaves, en seco o en húmedo."],
    ["Cuándo", "Todos los días", "Todos los días, después del baño o antes de salir."],
    ["Ideal para", "Cabello largo, rizado o enredado", "Toda la familia, en especial cabello largo, rizado o que se enreda fácil."]
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
    ["Sirve para", "Decorar patios, balcones y jardines", "Decorar patios, balcones, jardines y fachadas con 200 luces de colores."],
    ["Cómo se usa", "Panel al sol y listo", "Pon el panel al sol y distribuye la guirnalda. Se encienden solas al anochecer."],
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
  ]}
};
