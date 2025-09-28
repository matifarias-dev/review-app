-- CreateTable
CREATE TABLE "public"."Shop" (
    "id" SERIAL NOT NULL,
    "shop_uuid" TEXT NOT NULL,
    "place_id" TEXT NOT NULL,
    "formatted_address" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT (NOW() AT TIME ZONE '-03'),

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Review" (
    "id" SERIAL NOT NULL,
    "shop_uuid" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT (NOW() AT TIME ZONE '-03'),

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shop_shop_uuid_key" ON "public"."Shop"("shop_uuid");

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_shop_uuid_fkey" FOREIGN KEY ("shop_uuid") REFERENCES "public"."Shop"("shop_uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
