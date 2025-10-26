-- Crear tabla Shop
CREATE TABLE "Shop" (
    id SERIAL PRIMARY KEY,
    shop_uuid VARCHAR(36) UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    place_id VARCHAR(255) NOT NULL,
    formatted_address TEXT NOT NULL,
    name VARCHAR(255) NOT NULL,
    logo_url VARCHAR(500) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT (NOW() AT TIME ZONE '-03')
);

-- Crear tabla Review
CREATE TABLE "Review" (
    id SERIAL PRIMARY KEY,
    shop_uuid VARCHAR(36) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT (NOW() AT TIME ZONE '-03'),
    CONSTRAINT fk_review_shop 
        FOREIGN KEY (shop_uuid) 
        REFERENCES "Shop"(shop_uuid) 
        ON DELETE CASCADE
);

-- Crear índices para mejor rendimiento
CREATE INDEX idx_shop_shop_uuid ON "Shop"(shop_uuid);
CREATE INDEX idx_review_shop_uuid ON "Review"(shop_uuid);
CREATE INDEX idx_review_rating ON "Review"(rating);
CREATE INDEX idx_review_created_at ON "Review"(created_at);

-- Configurar UTC-3 directamente
ALTER DATABASE neondb SET timezone = '-03';
SET timezone = '-3';
SELECT NOW();
--opcional
ALTER TABLE "Review" ALTER COLUMN created_at SET DEFAULT (NOW() AT TIME ZONE '-03');

-- Insertar datos del Central en Shop
insert into "Shop" (place_id, formatted_address, name, logo_url) values
('ChIJYYJd1T2ZvJURv-9OtoFSGHg', 'Pres. Rivadavia 33, B1665 José C. Paz, Provincia de Buenos Aires, Argentina', 'Central de Pizzas y Empanadas', 'https://wqlshcmualnpoqktavsd.supabase.co/storage/v1/object/sign/files-bucket/logo-comercios/Logo%20Central%20de%20pizza%20y%20empanadas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWE5ZjUxMi05NDRiLTQwYmQtOTNlNi0xNzcwM2I0M2ZjMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy1idWNrZXQvbG9nby1jb21lcmNpb3MvTG9nbyBDZW50cmFsIGRlIHBpenphIHkgZW1wYW5hZGFzLmpwZyIsImlhdCI6MTc1ODk0ODk0OCwiZXhwIjoyMDc0MzA4OTQ4fQ.elS2atREaj1wwjHyPadtoW0eQIEwGp-YHnUq9x7hHB0');

UPDATE "Shop" SET logo_url = 'https://wqlshcmualnpoqktavsd.supabase.co/storage/v1/object/sign/files-bucket/logo-comercios/Logo%20Central%20de%20pizza%20y%20empanadas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mYWE5ZjUxMi05NDRiLTQwYmQtOTNlNi0xNzcwM2I0M2ZjMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmaWxlcy1idWNrZXQvbG9nby1jb21lcmNpb3MvTG9nbyBDZW50cmFsIGRlIHBpenphIHkgZW1wYW5hZGFzLmpwZyIsImlhdCI6MTc1ODk0ODk0OCwiZXhwIjoyMDc0MzA4OTQ4fQ.elS2atREaj1wwjHyPadtoW0eQIEwGp-YHnUq9x7hHB0' WHERE shop_uuid = '63661810-7b5c-4276-ac12-b26a9d1528a7';

select * from "Shop";
--prod
select * from "Review" where shop_uuid = '63661810-7b5c-4276-ac12-b26a9d1528a7' ORDER BY created_at DESC;
--desa
select * from "Review" where shop_uuid = '42382075-17d7-4a8a-8d15-8d1686d12753' ORDER BY created_at DESC;
--validacion timezone en reviews
SELECT created_at, 
       created_at AT TIME ZONE '-3' as gmt_minus_3
FROM "Review";
