import {integer, real, sqliteTable, text} from "drizzle-orm/sqlite-core";
import {sql} from "drizzle-orm";

export const client = sqliteTable('client', {
    id: text("id").primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name"),
    birthday: text("birthday"),
    telephone: text("telephone"),
    email: text("email"),
    addressStreet: text("address_street"),
    addressCity: text("address_city"),
    addressZip: text("address_zip"),
    comment: text("comment"),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const clientPurchase = sqliteTable('client_purchase', {
    id: text("id").primaryKey(),
    clientId: text("client_id").references(() => client.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }).notNull(),
    paymentMethod: text("payment_method"),
    discount: real("discount"),
    discountComment: real("discount_comment"),
    extra: real("extra"),
    extraComment: real("extra_comment"),
    comment: text("comment"),
    computedTotal: real("computed_total"),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const product = sqliteTable("product", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    brand: text("brand"),
    price: real("price"),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const service = sqliteTable("service", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    price: real("price"),
    hairType: text("hair_type"),
    gender: text("gender"),
    forChildren: integer("for_children", {mode: 'boolean'}),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const clientProductPurchase = sqliteTable('client_product_purchase', {
    id: text("id").primaryKey(),
    clientPurchaseId: text("client_purchase_id").references(() => clientPurchase.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }).notNull(),
    productId: text("product_id").references(() => product.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }).notNull(),
    quantity: integer('quantity').notNull(),
    discount: real("discount"),
    discountComment: real("discount_comment"),
    extra: real("extra"),
    extraComment: real("extra_comment"),
    comment: text("comment"),
    computedTotal: real("computed_total").notNull(),
});

export const clientServicePurchase = sqliteTable('client_service_purchase', {
    id: text("id").primaryKey(),
    clientPurchaseId: text("client_purchase_id").references(() => clientPurchase.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }).notNull(),
    serviceId: text("service_id").references(() => service.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }).notNull(),
    discount: real("discount"),
    discountComment: real("discount_comment"),
    extra: real("extra"),
    extraComment: real("extra_comment"),
    comment: text("comment"),
    computedTotal: real("computed_total").notNull(),
});