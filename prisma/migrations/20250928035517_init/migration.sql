-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "DB_Review";

-- CreateTable
CREATE TABLE "DB_Review"."Shop" (
    "id" SERIAL NOT NULL,
    "shop_uuid" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "place_id" TEXT NOT NULL,
    "formatted_address" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT (now() at time zone '-03'),

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DB_Review"."Review" (
    "id" SERIAL NOT NULL,
    "shop_uuid" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT (now() at time zone '-03'),

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shop_shop_uuid_key" ON "DB_Review"."Shop"("shop_uuid");

-- AddForeignKey
ALTER TABLE "DB_Review"."Review" ADD CONSTRAINT "Review_shop_uuid_fkey" FOREIGN KEY ("shop_uuid") REFERENCES "DB_Review"."Shop"("shop_uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
