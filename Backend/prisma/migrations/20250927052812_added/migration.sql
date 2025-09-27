/*
  Warnings:

  - Added the required column `position` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."employee" ADD COLUMN     "position" TEXT NOT NULL;
