/*
 * LA RONDA — Catálogo maestro
 * Solo incorporar materiales terminados, alojados dentro del repositorio
 * y con derechos de redistribución verificados.
 *
 * Ejemplo de registro (no publicar hasta completar y verificar):
 * {
 *   id: "guia-ejemplo",
 *   title: "Título del material",
 *   author: "Autor o institución",
 *   category: "aprender",
 *   description: "Descripción breve y fiel.",
 *   format: "PDF",
 *   size: "2 MB",
 *   file: "assets/archivos/aprender/archivo.pdf",
 *   preview: "assets/vistas-previas/archivo.jpg",
 *   license: "CC BY 4.0",
 *   credit: "Atribución requerida por la licencia",
 *   verified: true
 * }
 */
window.LA_RONDA_CATALOG = [];

window.LA_RONDA_CATEGORIES = [
  {id:"lecturas",name:"Lecturas",description:"Libros, cuentos, poesía y relatos",icon:"📚",tone:"sage"},
  {id:"arte",name:"Arte y decoración",description:"Láminas, cuadros e ilustraciones",icon:"🎨",tone:"yellow"},
  {id:"mapas",name:"Mapas y atlas",description:"Lugares, territorios e historia",icon:"🗺️",tone:"coral"},
  {id:"papeleria",name:"Papelería",description:"Stickers, tarjetas y organizadores",icon:"✂️",tone:"lilac"},
  {id:"aprender",name:"Aprender",description:"Guías, fichas e infografías",icon:"🌱",tone:"blue"},
  {id:"naturaleza",name:"Naturaleza",description:"Plantas, animales y ambiente",icon:"🌼",tone:"peach"},
  {id:"infancias",name:"Infancias y juegos",description:"Actividades, cuentos y pasatiempos",icon:"🪁",tone:"green"},
  {id:"cotidiana",name:"Vida cotidiana",description:"Cocina, hogar y manualidades",icon:"🏡",tone:"pink"},
  {id:"chañar",name:"Rincón chañarense",description:"Memoria, cultura y territorio local",icon:"🌾",tone:"sand"}
];