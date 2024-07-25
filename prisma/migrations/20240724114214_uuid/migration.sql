/*
  Warnings:

  - A unique constraint covering the columns `[auth_token]` on the table `Participants` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Participants` ADD COLUMN `auth_token` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Participants_auth_token_key` ON `Participants`(`auth_token`);
