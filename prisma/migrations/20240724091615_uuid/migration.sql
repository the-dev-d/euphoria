/*
  Warnings:

  - You are about to drop the column `uuid` on the `Event_participants` table. All the data in the column will be lost.
  - Added the required column `uuid` to the `Event_payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event_participants` DROP COLUMN `uuid`;

-- AlterTable
ALTER TABLE `Event_payment` ADD COLUMN `uuid` VARCHAR(191) NOT NULL;
