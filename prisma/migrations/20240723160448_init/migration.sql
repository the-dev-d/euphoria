-- CreateTable
CREATE TABLE `Participants` (
    `participant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `college` VARCHAR(250) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`participant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Events` (
    `event_id` INTEGER NOT NULL AUTO_INCREMENT,
    `event_name` VARCHAR(191) NOT NULL,
    `amount` DOUBLE NOT NULL,

    PRIMARY KEY (`event_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event_payment` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` DOUBLE NOT NULL,
    `uuid` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL,
    `participant_id` INTEGER NOT NULL,

    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event_participants` (
    `event_participant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `event_id` INTEGER NOT NULL,
    `participant_id` INTEGER NOT NULL,

    PRIMARY KEY (`event_participant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event_payment` ADD CONSTRAINT `Event_payment_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `Participants`(`participant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event_participants` ADD CONSTRAINT `Event_participants_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `Events`(`event_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event_participants` ADD CONSTRAINT `Event_participants_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `Participants`(`participant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
