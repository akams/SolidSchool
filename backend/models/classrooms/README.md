CREATE TABLE `solid-school-mysql`.`classrooms` ( `id` INT NOT NULL AUTO_INCREMENT , `label` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `solid-school-mysql`.`gender` ( `id` INT NOT NULL AUTO_INCREMENT, `label` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `solid-school-mysql`.`time_slots` ( `id` INT NOT NULL AUTO_INCREMENT, `label` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
CREATE TABLE `solid-school-mysql`.`type_student` ( `id` INT NOT NULL AUTO_INCREMENT , `label` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


CREATE TABLE `solid-school-mysql`.`users_records` ( `id` INT NOT NULL AUTO_INCREMENT , `lastname` VARCHAR(255) NOT NULL , `firstname` VARCHAR(255) NOT NULL , `birthDate` VARCHAR(255) NOT NULL , `registrationDate` VARCHAR(255) NOT NULL , `lastnameFather` VARCHAR(255) NULL , `phoneNumberFather` VARCHAR(255) NULL , `emailFather` VARCHAR(255) NULL , `employerFather` VARCHAR(255) NULL , `lastnameMother` VARCHAR(255) NULL , `phoneNumberMother` VARCHAR(255) NULL , `emailMother` VARCHAR(255) NULL , `employerMother` VARCHAR(255) NULL , `jobFather` VARCHAR(255) NULL , `jobMother` VARCHAR(255) NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `users_records` ADD `address` INT NOT NULL AFTER `jobMother`;

ALTER TABLE `users_records` ADD `classroomId` INT NOT NULL AFTER `address`;
ALTER TABLE `users_records` ADD `genderId` INT NOT NULL AFTER `classroomId`;
ALTER TABLE `users_records` ADD `timeSlotId` INT NOT NULL AFTER `genderId`;
ALTER TABLE `users_records` ADD `typeStudentId` INT NOT NULL AFTER `timeSlotId`;

ALTER TABLE users_records ADD FOREIGN KEY (`classroomId`) REFERENCES classrooms(id);
ALTER TABLE users_records ADD FOREIGN KEY (`genderId`) REFERENCES gender(id);
ALTER TABLE users_records ADD FOREIGN KEY (`timeSlotId`) REFERENCES time_slots(id);
ALTER TABLE users_records ADD FOREIGN KEY (`typeStudentId`) REFERENCES type_student(id);
