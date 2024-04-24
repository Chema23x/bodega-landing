// Pdfs
export const pdfs = [
    "Preciador BA MB Oct 23",
    "Garantía Extendida Pago de Incentivos 2023",
    "Contrato BA Planes Protección 2023",
    "Kick Off ABR-24"   
]

//Images

export const imgs = [

]


//Comics
export const comics = [

]

//Videos
export const videos = [
    "Video General",
    "Video 2 Pantallas",
    "Video 3 Línea Blanca",
    "Video 4 Electrónicos",
    "Video 5 Telefonía"
]

//Pages

export const pages = {
    Documentos: "/documentsPage",
    Imagenes: "/imagesPage",
    Historietas: "/comicsPage",
    Videos: "/videosPage"
};

//Keys

export const keys = Object.keys(pages)


//Urls

export const Urls = [
    "/assets/pdfs/PreciadorBAMBOct23.pdf",
    "/assets/pdfs/GarantiaExtendidaPagodeIncentivos2023.pdf",
    "/assets/pdfs/ContratoBAPlanesProteccion2023.pdf",
    "/assets/pdfs/KickoffABR-24.pdf",
    "/assets/videos/Video2Pantallas.mp4",
    "/assets/videos/Video3LineaBlanca.mp4",
    "/assets/videos/Video4Electronicos.mp4",
    "/assets/videos/Video5Telefonia.mp4",
    "/assets/videos/VideoGeneral.mp4"
]

//Function

  // Función para limpiar el título y la URL para hacer coincidir
 export const cleanString = (str) => {
     // Reemplazar caracteres acentuados con sus equivalentes no acentuados
     const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
     return withoutAccents.toLowerCase().replace(/\s+/g, ''); // Elimina espacios y convierte a minúsculas
};