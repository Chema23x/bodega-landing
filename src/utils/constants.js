// Pdfs
export const pdfs = [
    "Preciador BA MB Oct 23",
    "Garantía Extendida Pago de Incentivos 2023",
    "Contrato BA Planes Protección 2023",
    "Bitácora de Garantía Extendida"   
]

//Images

export const imgs = [
    "TU GUÍA GARANTÍA EXTENDIDA",
    "PAGO DE INCENTIVOS",
    "FALLAS COMUNES PANTALLAS",
    "ELEGIBLES",
    "ELEGIBLES CEL",
    "BENEFICIOS",
    "ACCIDENTES COMUNES CELULARES Y TABLETS"
]


//Comics
export const topStores = [
    "Tiendas TOP en venta de Garantías Extendidas",
    "Tiendas TOP en Conversión",
    "Tiendas TOP en venta ($)",
    "Distritos TOP"
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
    Distritos_y_tiendas_TOP: "/comicsPage",
    Videos: "/videosPage"
}
// Función para formatear las claves
function formatPageName(name) {
    return name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

//Keys

export const keys = Object.keys(pages).map(key => formatPageName(key));


//Urls

export const Urls = [
    "/assets/pdfs/PreciadorBAMBOct23.pdf",
    "/assets/pdfs/GarantiaExtendidaPagodeIncentivos2023.pdf",
    "/assets/pdfs/ContratoBAPlanesProteccion2023.pdf",
    "/assets/pdfs/Bitácora de Garantía Extendida.pdf",
    "/assets/videos/Video2Pantallas.mp4",
    "/assets/videos/Video3LineaBlanca.mp4",
    "/assets/videos/Video4Electronicos.mp4",
    "/assets/videos/Video5Telefonia.mp4",
    "/assets/videos/VideoGeneral.mp4",
    "/assets/topStores/Tiendas TOP en venta de Garantías Extendidas.png",
    "/assets/topStores/Tiendas TOP en Conversión.png",
    "/assets/topStores/Tiendas TOP en venta ($).png",
    "/assets/topStores/Distritos TOP.png",
    "/assets/images/TU GUÍA GARANTÍA EXTENDIDA.png",
    "/assets/images/PAGO DE INCENTIVOS.png",
    "/assets/images/FALLAS COMUNES PANTALLAS.png",
    "/assets/images/ELEGIBLES.png",
    "/assets/images/ELEGIBLES CEL.png",
    "/assets/images/BENEFICIOS.png",
    "/assets/images/ACCIDENTES COMUNES CELULARES Y TABLETS.png",
    
]

//Function

  // Función para limpiar el título y la URL para hacer coincidir
 export const cleanString = (str) => {
     // Reemplazar caracteres acentuados con sus equivalentes no acentuados
     const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
     return withoutAccents.toLowerCase().replace(/\s+/g, ''); // Elimina espacios y convierte a minúsculas
};

// Generar OptionsFrames

export const components = [
    {icon: "assets/icons/pdfIcon.png", altIcon: "icono pdf", iconText:"Documentos",linkTo: "/DocumentsPage"},
    {icon: "assets/icons/imageIcon.png",altIcon:"icono imagen", iconText:"Imagenes",linkTo:"/ImagesPage"},
    {icon: "assets/icons/videosIcon.png",altIcon:"icono video",iconText:"Videos",linkTo:"/VideosPage"},
    {icon: "assets/icons/bookIcon.png",altIcon:"icono book", iconText:"Historietas",linkTo:"/ComicsPage"}
]