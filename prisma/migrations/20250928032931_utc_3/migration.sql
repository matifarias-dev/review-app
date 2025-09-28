-- AlterTable
ALTER TABLE "public"."Review" ALTER COLUMN "created_at" SET DEFAULT timezone('-03:00', now());

-- AlterTable
ALTER TABLE "public"."Shop" ALTER COLUMN "created_at" SET DEFAULT timezone('-03:00', now());
