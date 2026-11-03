# Arquitectura de La Ronda

## Propósito de la experiencia
La Ronda debe sentirse como una biblioteca amable y ordenada, no como un portal comercial. La persona entra, reconoce una puerta temática, encuentra una ficha, revisa el material y lo abre o descarga sin salir a buscarlo a otro sitio.

## Mapa de la portada
1. **Franja de bienvenida:** identifica el carácter comunitario y el territorio.
2. **Cabecera:** marca y accesos principales.
3. **Hero:** explica en pocas palabras qué es la biblioteca.
4. **Bienvenida breve:** elimina dudas de acceso.
5. **Puertas temáticas:** nueve categorías ilustradas.
6. **Estantes:** buscador, filtros y tarjetas de materiales.
7. **Cómo funciona:** recorrido de tres pasos.
8. **Rincón chañarense:** colección de identidad local.
9. **Principios:** gratuidad, respeto, cercanía y circulación.
10. **Preguntas frecuentes:** resuelve dudas sin obligar a contactar.
11. **Cajita:** donación voluntaria y separada del acceso.
12. **Pie:** navegación de retorno e identificación del proyecto.

## Puertas temáticas
- Lecturas.
- Arte y decoración.
- Mapas y atlas.
- Papelería.
- Aprender.
- Naturaleza.
- Infancias y juegos.
- Vida cotidiana.
- Rincón chañarense.

## Comportamiento
- Las categorías se generan desde `assets/js/catalog.js`.
- Las ilustraciones son archivos SVG locales.
- El buscador filtra nombres, autores, descripciones y categorías.
- Los estantes aplican filtros adicionales sin requerir recarga.
- Cada ficha muestra vista previa, descripción, datos editoriales, crédito y condiciones.
- Ver y Descargar apuntan al archivo alojado localmente en el proyecto.
- Si faltan campos obligatorios o la ruta no es local, el motor no muestra la ficha.

## Estructura
```
/
├── index.html
├── README.md
├── REGLAMENTO-LA-RONDA.md
├── REGISTRO-DERECHOS.md
├── ARQUITECTURA.md
├── GUIA-VISUAL.md
└── assets/
    ├── css/styles.css
    ├── js/app.js
    ├── js/catalog.js
    ├── ilustraciones/
    └── archivos/
```

## Límites deliberados
- Sin cuentas ni perfiles.
- Sin comentarios ni publicaciones de usuarios.
- Sin base de datos ni servidor propio.
- Sin dependencias externas para tipografías o ilustraciones.
- Sin publicidad.
- Sin enlaces externos que sustituyan la descarga del archivo.

## Verificación pendiente
La revisión del código fuente no reemplaza una prueba real en navegador. Antes de anunciar la nueva versión como publicada, probar:
- 320, 390, 768 y 1366 px.
- Navegación por teclado y foco visible.
- Zoom de navegador al 200%.
- Búsqueda, filtros, vista previa y descarga.
- Apertura directa de los SVG y funcionamiento desde GitHub Pages.
- Que todas las rutas locales existan.
