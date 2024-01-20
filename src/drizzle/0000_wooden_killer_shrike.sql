CREATE TABLE `client` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text,
	`birthday` text,
	`telephone` text,
	`email` text,
	`address_street` text,
	`address_city` text,
	`address_zip` text,
	`comment` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `client_product_purchase` (
	`id` text PRIMARY KEY NOT NULL,
	`client_purchase_id` text NOT NULL,
	`product_id` text NOT NULL,
	`quantity` integer NOT NULL,
	`discount` real,
	`discount_comment` real,
	`extra` real,
	`extra_comment` real,
	`comment` text,
	`computed_total` real NOT NULL,
	FOREIGN KEY (`client_purchase_id`) REFERENCES `client_purchase`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `client_purchase` (
	`id` text PRIMARY KEY NOT NULL,
	`client_id` text NOT NULL,
	`payment_method` text,
	`discount` real,
	`discount_comment` real,
	`extra` real,
	`extra_comment` real,
	`comment` text,
	`computed_total` real,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`client_id`) REFERENCES `client`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `client_service_purchase` (
	`id` text PRIMARY KEY NOT NULL,
	`client_purchase_id` text NOT NULL,
	`service_id` text NOT NULL,
	`discount` real,
	`discount_comment` real,
	`extra` real,
	`extra_comment` real,
	`comment` text,
	`computed_total` real NOT NULL,
	FOREIGN KEY (`client_purchase_id`) REFERENCES `client_purchase`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`brand` text,
	`price` real,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `service` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`price` real,
	`hair_type` text,
	`gender` text,
	`for_children` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
