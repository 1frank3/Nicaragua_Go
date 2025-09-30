import gallopinto from "../assets/img/comidatipica/gallopinto.webp";
import gueguenseImg from "../assets/img/historias/gueguense.webp";
import terremotoImg from "../assets/img/historias/terremotoImg.webp";
import tiscapaImg from "../assets/img/cuentos/tiscapa.webp";
import giocondaBelliImg from "../assets/img/poetas/giocondabelli.webp";
import nacatamalImg from "../assets/img/comidatipica/nacatamal.webp";
import puncheDeOroImg from "../assets/img/cuentos/punchedeoro.webp";
import mercadoMasayaImg from "../assets/img/historias/mercadomasaya.webp";
import vigoronImg from "../assets/img/comidatipica/vigoron.webp";
import ernestoCardenalImg from "../assets/img/poetas/ernestocardenal.webp";
import isletasGranadaImg from "../assets/img/ciudades/IsletaGranada.webp";
import barcoNegroImg from "../assets/img/cuentos/barconegro.webp";
import rubenDarioImg from "../assets/img/poetas/rubend.webp";
import quesilloImg from "../assets/img/comidatipica/quesillo.webp";
import padreSinCabezaImg from "../assets/img/cuentos/padresincabeza.webp";
import griteriaImg from "../assets/img/historias/griteria.webp";
import rosquillasImg from "../assets/img/comidatipica/rosquillas.webp";
import canonSomotoImg from "../assets/img/ciudades/canonSomoto.webp";
import mocuanaImg from "../assets/img/cuentos/lamocuana.webp";
import carlosMartinezImg from "../assets/img/poetas/carlosmartinez.webp";

export const mockStories = [
  // --- MANAGUA ---
  {
    id: 1,
    slug: "gallo-pinto-nicaraguense",
    title: "Gallo Pinto Nicaragüense",
    city: "Managua",
    category: "Comida típica",
    imageUrl: gallopinto,
    content:
      "El gallo pinto es el plato nacional por excelencia de Nicaragua...",
  },
  {
    id: 2,
    slug: "historia-terremoto-managua-1972",
    title: "El Terremoto de 1972",
    city: "Managua",
    category: "Historias",
    imageUrl: terremotoImg,
    content:
      "El 23 de diciembre de 1972, un terremoto de magnitud 6.2 devastó la capital...",
  },
  {
    id: 3,
    slug: "leyenda-tiscapa",
    title: "La Leyenda de la Laguna de Tiscapa",
    city: "Managua",
    category: "Cuentos",
    imageUrl: tiscapaImg,
    content:
      "Se cuenta que en el fondo de la laguna de Tiscapa habita una serpiente emplumada...",
  },
  {
    id: 4,
    slug: "poeta-gioconda-belli",
    title: "Gioconda Belli",
    city: "Managua",
    category: "Poetas",
    imageUrl: giocondaBelliImg,
    content:
      "Nacida en Managua, Gioconda Belli es una de las poetas y novelistas más aclamadas...",
  },

  // --- MASAYA ---
  {
    id: 5,
    slug: "el-gueguense",
    title: "El Güegüense",
    city: "Masaya",
    category: "Historias",
    imageUrl: gueguenseImg,
    content:
      "Obra maestra del Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO...",
  },
  {
    id: 6,
    slug: 'nacatamal-dominguero',
    title: 'El Nacatamal',
    city: 'Masaya',
    category: 'Comida típica',
    imageUrl: nacatamalImg,
    introduction: 'Considerado el plato de fin de semana por excelencia, el nacatamal es una masa de maíz rellena de cerdo, papas, arroz y otros ingredientes, envuelta en hojas de plátano y cocida lentamente. Masaya es famosa por su sazón.',
    ingredients: [
      '1 kg de masa de maíz',
      '500g de lomo de cerdo adobado',
      '2 papas en rodajas',
      '1/2 taza de arroz crudo',
      '1 tomate en rodajas',
      '1 cebolla en rodajas',
      'Hojas de plátano (para envolver)',
      'Hierbabuena'
    ],
    steps: [
      'Acondicionar y limpiar las hojas de plátano.',
      'Preparar la masa con manteca, sal y jugo de naranja agria.',
      'Colocar una base de masa sobre la hoja de plátano.',
      'Añadir una porción de arroz, una pieza de cerdo, rodajas de papa, tomate y cebolla, y una ramita de hierbabuena.',
      'Envolver cuidadosamente para formar el nacatamal y amarrarlo.',
      'Cocer en una olla grande con agua hirviendo durante 3-4 horas.'
    ],
  },
  {
    id: 7,
    slug: "leyenda-punche-de-oro",
    title: "El Punche de Oro",
    city: "Masaya",
    category: "Cuentos",
    imageUrl: puncheDeOroImg,
    content:
      "La leyenda del Volcán Masaya cuenta sobre un cangrejo gigante de oro (punche)...",
  },
  {
    id: 8,
    slug: "artesanias-mercado-masaya",
    title: "Artesanías del Mercado",
    city: "Masaya",
    category: "Historias",
    imageUrl: mercadoMasayaImg,
    content:
      "El Mercado de Artesanías de Masaya, ubicado en una estructura que data de 1891...",
  },

  // --- GRANADA ---
  {
     id: 9,
    slug: 'vigoron-granadino',
    title: 'El Vigorón',
    city: 'Granada',
    category: 'Comida típica',
    imageUrl: vigoronImg,
    introduction: 'Nacido en Granada, el Vigorón es un plato vibrante que consiste en una cama de yuca cocida, cubierta con chicharrón crujiente y una ensalada de repollo y tomate. Es la comida callejera más icónica de la ciudad.',
    ingredients: [
      '1 kg de yuca',
      '500g de chicharrón con carne',
      '1/2 repollo finamente picado',
      '2 tomates en cubos',
      'Jugo de naranja agria o vinagre',
      'Chile congo (opcional)'
    ],
    steps: [
      'Pelar y cocer la yuca en agua con sal hasta que esté suave. Escurrir.',
      'Preparar la ensalada mezclando el repollo, el tomate y el jugo de naranja agria. Sazonar con sal.',
      'Servir en una hoja de plátano (tradicionalmente).',
      'Colocar una base de yuca caliente, añadir el chicharrón encima y coronar con la ensalada fresca.'
    ],
  },
  {
    id: 10,
    slug: "poeta-ernesto-cardenal",
    title: "Ernesto Cardenal",
    city: "Granada",
    category: "Poetas",
    imageUrl: ernestoCardenalImg,
    content:
      "Figura fundamental de la literatura latinoamericana, Ernesto Cardenal fundó una comunidad...",
  },
  {
    id: 11,
    slug: "historia-isletas-granada",
    title: "Las Isletas de Granada",
    city: "Granada",
    category: "Historias",
    imageUrl: isletasGranadaImg,
    content:
      "Formadas hace miles de años por una avalancha del Volcán Mombacho, las 365 isletas...",
  },
  {
    id: 12,
    slug: "leyenda-barco-negro",
    title: "El Barco Negro del Gran Lago",
    city: "Granada",
    category: "Cuentos",
    imageUrl: barcoNegroImg,
    content:
      "Navegantes y pescadores del Gran Lago de Nicaragua cuentan sobre un misterioso barco negro...",
  },

  // --- LEÓN ---
  {
    id: 13,
    slug: "poeta-ruben-dario",
    title: "Rubén Darío",
    city: "León",
    category: "Poetas",
    imageUrl: rubenDarioImg,
    content:
      'Considerado el "Príncipe de las Letras Castellanas", Rubén Darío es la figura literaria más importante...',
  },
  {
      id: 14,
    slug: 'quesillo-leones',
    title: 'El Quesillo',
    city: 'León',
    category: 'Comida típica',
    imageUrl: quesilloImg,
    introduction: 'Originario de La Paz Centro y Nagarote, municipios de León, el quesillo es una trenza de queso servida en una tortilla caliente, bañada en crema, cebolla picada encurtida y un toque de sal. Un manjar inconfundible.',
    ingredients: [
      'Tortillas de maíz',
      'Quesillo (queso de hebra)',
      'Crema fresca (un poco ácida)',
      'Cebolla encurtida (cebolla picada con vinagre y sal)'
    ],
    steps: [
      'Calentar una tortilla de maíz en el comal o sartén.',
      'Colocar una porción generosa de quesillo sobre la tortilla caliente para que se ablande.',
      'Añadir una cucharada de cebolla encurtida y un buen chorro de crema fresca.',
      'Doblar o enrollar la tortilla y servir inmediatamente, a menudo en una bolsita plástica para no derramar.'
    ],
  },
  {
    id: 15,
    slug: "leyenda-padre-sin-cabeza",
    title: "El Padre sin Cabeza",
    city: "León",
    category: "Cuentos",
    imageUrl: padreSinCabezaImg,
    content:
      "La leyenda leonesa cuenta que un sacerdote fue decapitado en 1550 y su espíritu aún pena...",
  },
  {
    id: 16,
    slug: "historia-la-griteria",
    title: "La Gritería Chiquita",
    city: "León",
    category: "Historias",
    imageUrl: griteriaImg,
    content:
      'Celebrada cada 14 de agosto en León, la "Gritería Chiquita" o "de penitencia" se originó en 1947...',
  },

  // --- MADRIZ ---
  {
   id: 17,
    slug: 'rosquillas-somenas',
    title: 'Rosquillas de Somoto',
    city: 'Madriz',
    category: 'Comida típica',
    imageUrl: rosquillasImg,
    introduction: 'Famosas en todo el país, las rosquillas de Somoto, Madriz, son una galleta crujiente a base de maíz y queso seco (cuajada). Son el acompañante perfecto para una taza de café de la región.',
    ingredients: [
      '2 tazas de masa de maíz seco',
      '1 taza de cuajada seca rallada',
      '1/2 taza de manteca de cerdo',
      'Sal al gusto'
    ],
    steps: [
      'Precalentar el horno a 180°C (350°F).',
      'En un tazón grande, mezclar la masa de maíz, la cuajada rallada y la sal.',
      'Incorporar la manteca poco a poco, amasando hasta obtener una masa suave y manejable.',
      'Tomar pequeñas porciones de la masa y formar anillos (rosquillas).',
      'Colocar las rosquillas en una bandeja para hornear y hornear durante 20-25 minutos o hasta que estén doradas y crujientes.',
      'Dejar enfriar completamente antes de servir.'
    ],
  },
  {
    id: 18,
    slug: "canon-de-somoto",
    title: "El Cañón de Somoto",
    city: "Madriz",
    category: "Historias",
    imageUrl: canonSomotoImg,
    content:
      "Descubierto para el turismo apenas en 2004, el Cañón de Somoto es una de las formaciones rocosas...",
  },
  {
    id: 19,
    slug: "leyenda-la-mocuana",
    title: "La Mocuana",
    city: "Madriz",
    category: "Cuentos",
    imageUrl: mocuanaImg,
    content:
      "Aunque se asocia a varias zonas del norte, la leyenda de la Mocuana es fuerte en la región...",
  },
  {
    id: 20,
    slug: "poeta-carlos-martinez-rivas",
    title: "Carlos Martínez Rivas (influencia)",
    city: "Madriz",
    category: "Poetas",
    imageUrl: carlosMartinezImg,
    content:
      "Aunque no es de Madriz, su poesía vanguardista y compleja influyó a generaciones de escritores...",
  },
];

// Creamos un objeto para buscar por slug más fácilmente en la página de detalle
export const storiesBySlug = mockStories.reduce((acc, story) => {
  acc[story.slug] = story;
  return acc;
}, {});
