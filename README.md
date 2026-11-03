# LA RONDA
### Lo que compartimos nos enriquece.

Biblioteca digital comunitaria impulsada por Ocarina Producciones, con San Patricio del Chañar como punto de partida.

## Estado
**Fase 2 — Primeros materiales imprimibles publicados.**

La biblioteca ya contiene tres materiales originales de Ocarina Producciones:
- Organizador semanal imprimible.
- Etiquetas para semillas y plantines.
- Cuaderno de observación para infancias.

Se identifican claramente como materiales originales. El catálogo externo se ampliará únicamente cuando la redistribución esté permitida y documentada. No se incorporan obras ficticias ni enlaces que manden a otro sitio para obtener el archivo.

## Ver el sitio
Cuando GitHub Pages esté habilitado:
https://eliasmartinezcultural-glitch.github.io/RUMA/

## Estructura
- `index.html`: portada y estructura principal.
- `assets/css/styles.css`: diseño responsive y fichas de materiales.
- `assets/js/catalog.js`: categorías y catálogo maestro.
- `assets/js/app.js`: búsqueda, filtros, vistas previas y descargas.
- `assets/archivos/`: archivos descargables autorizados.
- `REGISTRO-DERECHOS.md`: autoría, procedencia y permisos.
- `REGLAMENTO-LA-RONDA.md`: reglas fundacionales.

## Incorporar un material
1. Obtener el archivo final y comprobar que abre correctamente.
2. Verificar que se permite redistribuirlo y alojarlo.
3. Registrar autor/titular, procedencia, licencia y evidencia del permiso.
4. Guardar el archivo dentro de `assets/archivos/`.
5. Preparar una vista previa local cuando corresponda.
6. Completar todos los campos de `assets/js/catalog.js` y usar `verified: true` solo tras la revisión.
7. Comprobar manualmente que la descarga funciona en la página publicada.

El motor descarta registros sin verificación, archivo local, vista previa local, autoría y datos de derechos.

## Tecnologías
HTML, CSS y JavaScript sin frameworks, backend ni base de datos. No se cargan fuentes, imágenes ni archivos de contenido desde servicios externos.

## Responsable
Ocarina Producciones · San Patricio del Chañar, Neuquén.
