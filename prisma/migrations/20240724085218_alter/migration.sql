/*
  Warnings:

  - You are about to drop the column `event_id` on the `Event_participants` table. All the data in the column will be lost.
  - Added the required column `event_code` to the `Event_participants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Event_participants` DROP FOREIGN KEY `Event_participants_event_id_fkey`;

-- AlterTable
ALTER TABLE `Event_participants` DROP COLUMN `event_id`,
    ADD COLUMN `event_code` VARCHAR(3) NOT NULL;
