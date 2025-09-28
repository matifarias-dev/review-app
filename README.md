# puntuar-mvp

MVP para sistema de puntuaciones de comercios.

## Tecnologías

- **Next.js** (Front y lógica backend)
- **PostgreSQL Neon** (Base de datos)
- **Supabase** (Almacenamiento de imágenes)
- **Netlify** (Deploy)

## Estructura

- `/review/[id_comercio]`: Página principal donde el cliente accede vía QR. Muestra logo, nombre, llamada a la acción y permite puntuar de 1 a 5 estrellas.
- Si la puntuación es mayor o igual a 3, se sugiere dejar reseña en Google Maps del comercio.
- Todas las puntuaciones se guardan en la base de datos.

## Variables de entorno

Configura las siguientes variables en `.env`:

```
DATABASE_URL= # URL de conexión a Neon PostgreSQL
SUPABASE_BUCKET_URL= # URL base del bucket Supabase donde se alojan logos de comercios
SUPABASE_BUCKET_TOKEN= # Token de acceso al bucket si es necesario
```

## Base de datos

Debe existir una tabla `comercio` con al menos los siguientes campos:

- `id` (int, PK)
- `id_comercio` (string único, hash del comercio)
- `place_id` (string, Google Place ID)
- `formatted_address` (string largo, dirección)
- `name` (string, nombre del comercio)
- `logo_url` (string, URL de imagen en bucket)

Y una tabla `review`:

- `id` (int, PK)
- `id_comercio` (string, FK)
- `rating` (int)
- `created_at` (timestamp)

## Deploy

La app está preparada para deploy en Netlify. Solo debes rellenar las variables de entorno y configurar el dominio.

## Supabase Bucket

Los logos de comercio deben estar en un bucket de Supabase y accesibles por URL. Rellena el dominio de imágenes en `next.config.js` y la variable de entorno.

## Endpoints

- **GET `/review/[id_comercio]`**: Muestra la pantalla para puntuar.
- **POST `/api/review`**: Guarda la puntuación.

## Personalización

- Cambia colores, textos y estilos según la identidad de tu negocio.
- Ajusta los campos de base de datos si necesitas almacenar más información.

## TODO

- Rellenar campos de conexión a base de datos y bucket.
- Cargar comercios en la base de datos previamente con sus logos y Place ID.
- Personalizar estilos.
