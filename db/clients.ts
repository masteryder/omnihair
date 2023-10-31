import {db} from "./index";
import {client as clientTable} from "./schema";
import {v4 as uuidv4} from 'uuid';
import {eq} from "drizzle-orm";

export const getClients = () => {
    return db.select().from(clientTable).all()
}

export const getClient = (id: string) => {
    return db.select().from(clientTable).where(eq(clientTable.id, id))
}

export const insertClient = (client) => {
    if (client.id == null) {
        client.id = uuidv4();
    }
    return db.insert(clientTable).values(client);
}