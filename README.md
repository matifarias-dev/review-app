# PuntuAr App

App para sistema de reseñas y puntuaciones de comercios.

App en fase MVP

## Tecnologías utilizadas
- **Next.js** (Front y lógica backend)
- **PostgreSQL Neon** (Base de datos)
- **Supabase** (Almacenamiento de imágenes en un bucket)
- **Netlify** (Deploy)

## Estructura

- `/review/[id_comercio]`: Página principal donde el cliente accede vía QR. Muestra logo, nombre, llamada a la acción y permite puntuar de 1 a 5 estrellas al comercio en cuestion.
- Si la puntuación es mayor o igual a 3, se sugiere dejar reseña en Google Maps del comercio.
- Si la puntuacion es menor se mostrara un campo observaciones para que el cliente detalle su desconformidad.
- Todas las puntuaciones se guardan en la base de datos.

## Supabase Bucket

Los logos de comercio deben estar en un bucket de Supabase y accesibles por URL. Rellena el dominio de imágenes en `next.config.js` y la variable de entorno.

## Endpoints

- **GET `/review/[id_comercio]`**: Muestra la pantalla para puntuar.
- **POST `/api/review`**: Guarda la puntuación.

