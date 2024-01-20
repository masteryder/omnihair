CREATE TABLE `account` (
	`userId` text NOT NULL,
	`type` text NOT NULL,
	`provider` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` integer,
	`token_type` text,
	`scope` text,
	`id_token` text,
	`session_state` text,
	PRIMARY KEY(`provider`, `providerAccountId`),
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `network` (
	`id` text PRIMARY KEY NOT NULL,
	`short_name` text,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `session` (
	`sessionToken` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`expires` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text NOT NULL,
	`emailVerified` integer,
	`image` text
);
--> statement-breakpoint
CREATE TABLE `user_network` (
	`user_id` text,
	`network_id` text,
	PRIMARY KEY(`network_id`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`network_id`) REFERENCES `network`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`identifier` text NOT NULL,
	`token` text NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
--> statement-breakpoint
ALTER TABLE client ADD `updated_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE client ADD `created_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client ADD `updated_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client ADD `network_id` text NOT NULL REFERENCES network(id);--> statement-breakpoint
ALTER TABLE client_product_purchase ADD `created_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE client_product_purchase ADD `updated_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE client_product_purchase ADD `created_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client_product_purchase ADD `updated_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client_product_purchase ADD `network_id` text NOT NULL REFERENCES network(id);--> statement-breakpoint
ALTER TABLE client_purchase ADD `updated_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE client_purchase ADD `created_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client_purchase ADD `updated_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client_purchase ADD `network_id` text NOT NULL REFERENCES network(id);--> statement-breakpoint
ALTER TABLE client_service_purchase ADD `created_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE client_service_purchase ADD `updated_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE client_service_purchase ADD `created_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client_service_purchase ADD `updated_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE client_service_purchase ADD `network_id` text NOT NULL REFERENCES network(id);--> statement-breakpoint
ALTER TABLE product ADD `updated_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE product ADD `created_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE product ADD `updated_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE product ADD `network_id` text NOT NULL REFERENCES network(id);--> statement-breakpoint
ALTER TABLE service ADD `updated_at` text DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE service ADD `created_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE service ADD `updated_by` text REFERENCES user(id);--> statement-breakpoint
ALTER TABLE service ADD `network_id` text NOT NULL REFERENCES network(id);--> statement-breakpoint
/*
 SQLite does not support "Creating foreign key on existing column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/