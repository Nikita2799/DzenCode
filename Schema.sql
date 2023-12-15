CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `email` varchar(255),
  `createdAt` varchar(255),
  `updatedAt` varchar(255)
);

CREATE TABLE `comment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `parent_id` int,
  `text` varchar(255),
  `createdAt` varchar(255),
  `updatedAt` varchar(255)
);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `comment` (`user_id`);

ALTER TABLE `comment` ADD FOREIGN KEY (`id`) REFERENCES `comment` (`parent_id`);
