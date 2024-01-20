import {
  integer,
  real,
  sqliteTable,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import type { AdapterAccount } from "@auth/core/adapters";

export const network = sqliteTable("network", {
  id: text("id").primaryKey(),
  shortName: text("short_name"),
  name: text("name"),
});

export const user = sqliteTable("user", {
  id: text("id").primaryKey().notNull(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
});

export const account = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const session = sqliteTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationToken = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (verificationToken) => ({
    compoundKey: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
);

export const userNetwork = sqliteTable(
  "user_network",
  {
    userId: text("user_id").references(() => user.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    networkId: text("network_id").references(() => network.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  },
  (userNetwork) => ({
    compoundKey: primaryKey({
      columns: [userNetwork.userId, userNetwork.networkId],
    }),
  }),
);

export const commonProps = {
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
  createdBy: text("created_by").references(() => user.id, {
    onDelete: "set null",
    onUpdate: "set null",
  }),
  updatedBy: text("updated_by").references(() => user.id, {
    onDelete: "set null",
    onUpdate: "set null",
  }),
  networkId: text("network_id")
    .references(() => network.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
};

export const client = sqliteTable("client", {
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
  ...commonProps,
});

export const clientPurchase = sqliteTable("client_purchase", {
  id: text("id").primaryKey(),
  clientId: text("client_id")
    .references(() => client.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  paymentMethod: text("payment_method"),
  discount: real("discount"),
  discountComment: real("discount_comment"),
  extra: real("extra"),
  extraComment: real("extra_comment"),
  comment: text("comment"),
  computedTotal: real("computed_total"),
  ...commonProps,
});

export const product = sqliteTable("product", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  brand: text("brand"),
  price: real("price"),
  ...commonProps,
});

export const service = sqliteTable("service", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  price: real("price"),
  hairType: text("hair_type"),
  gender: text("gender"),
  forChildren: integer("for_children", { mode: "boolean" }),
  ...commonProps,
});

export const clientProductPurchase = sqliteTable("client_product_purchase", {
  id: text("id").primaryKey(),
  clientPurchaseId: text("client_purchase_id")
    .references(() => clientPurchase.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  productId: text("product_id")
    .references(() => product.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  quantity: integer("quantity").notNull(),
  discount: real("discount"),
  discountComment: real("discount_comment"),
  extra: real("extra"),
  extraComment: real("extra_comment"),
  comment: text("comment"),
  computedTotal: real("computed_total").notNull(),
  ...commonProps,
});

export const clientServicePurchase = sqliteTable("client_service_purchase", {
  id: text("id").primaryKey(),
  clientPurchaseId: text("client_purchase_id")
    .references(() => clientPurchase.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  serviceId: text("service_id")
    .references(() => service.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  discount: real("discount"),
  discountComment: real("discount_comment"),
  extra: real("extra"),
  extraComment: real("extra_comment"),
  comment: text("comment"),
  computedTotal: real("computed_total").notNull(),
  ...commonProps,
});
