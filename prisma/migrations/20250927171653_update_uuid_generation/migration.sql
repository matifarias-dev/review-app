-- AlterTable
ALTER TABLE "public"."Review" ALTER COLUMN "created_at" SET DEFAULT (NOW() AT TIME ZONE '-03');

-- AlterTable
ALTER TABLE "public"."Shop" ALTER COLUMN "shop_uuid" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "created_at" SET DEFAULT (NOW() AT TIME ZONE '-03');
