/*
  Warnings:

  - You are about to drop the column `participant_id` on the `Event_payment` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `Event_payment` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `Event_payment` table. All the data in the column will be lost.
  - Added the required column `payment_id` to the `Event_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `Event_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verified` to the `Event_participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `screenshot` to the `Event_payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Event_payment` DROP FOREIGN KEY `Event_payment_participant_id_fkey`;

-- AlterTable
ALTER TABLE `Event_participants` ADD COLUMN `payment_id` INTEGER NOT NULL,
    ADD COLUMN `uuid` VARCHAR(191) NOT NULL,
    ADD COLUMN `verified` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Event_payment` DROP COLUMN `participant_id`,
    DROP COLUMN `uuid`,
    DROP COLUMN `verified`,
    ADD COLUMN `screenshot` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Event_participants` ADD CONSTRAINT `Event_participants_payment_id_fkey` FOREIGN KEY (`payment_id`) REFERENCES `Event_payment`(`payment_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
