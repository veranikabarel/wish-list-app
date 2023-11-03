/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Wish` table. All the data in the column will be lost.
  - You are about to drop the column `wishListId` on the `Wish` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WishList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Wish" DROP CONSTRAINT "Wish_wishListId_fkey";

-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_userId_fkey";

-- AlterTable
ALTER TABLE "Wish" DROP COLUMN "imageUrl",
DROP COLUMN "wishListId";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "WishList";
