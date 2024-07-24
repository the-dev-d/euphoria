/*
  Warnings:

  - You are about to drop the column `upi_transaction_id` on the `Event_participants` table. All the data in the column will be lost.
  - Added the required column `upi_transaction_id` to the `Event_payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event_participants` DROP COLUMN `upi_transaction_id`;

-- AlterTable
ALTER TABLE `Event_payment` ADD COLUMN `upi_transaction_id` VARCHAR(191) NOT NULL;
