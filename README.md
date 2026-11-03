# LA RONDA
### Lo que compartimos nos enriquece.

Biblioteca digital comunitaria impulsada por Ocarina Producciones, con San Patricio del Chañar como punto de partida.

## Estado
**Fase 1 — Fundación técnica y experiencia inicial.**

Esta primera entrega establece la portada responsive, las nueve puertas temáticas, la búsqueda y el motor inicial del catálogo. El catálogo comienza vacío deliberadamente: no se publican obras ficticias ni materiales sin derechos verificados.

## Ver el sitio
Cuando GitHub Pages esté habilitado, la dirección será:
https://eliasmartinezcultural-glitch.github.io/RUMA/

## Estructura
- `index.html`: portada y estructura principal.
- `assets/css/styles.css`: diseño responsive y accesibilidad.
- `assets/js/catalog.js`: categorías y catálogo maestro.
- `assets/js/app.js`: búsqueda, filtros y renderizado de materiales.
- `assets/archivos/`: destino de los archivos autorizados.
- `assets/vistas-previas/`: miniaturas y vistas previas locales.

## Incorporar un material
No alcanza con agregar una ficha. Antes de publicar:
1. Obtener el archivo final y comprobar que abre correctamente.
2. Verificar que se permite redistribuirlo y alojarlo.
3. Registrar autor/titular, procedencia, licencia y evidencia del permiso.
4. Guardar el archivo dentro de `assets/archivos/`.
5. Preparar una vista previa local cuando corresponda.
6. Completar el registro en `assets/js/catalog.js` con `verified: true`.
7. Comprobar que la descarga funciona desde la página publicada.

El motor descarta registros sin `verified: true`, sin archivo o con URL externa.

## Tecnologías
HTML, CSS y JavaScript sin frameworks, backend ni base de datos. No se utilizan tipografías, imágenes ni archivos de contenido alojados en servicios externos.

## Responsable
Ocarina Producciones · San Patricio del Chañar, Neuquén.
