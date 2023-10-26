import {db} from "./index";
import {client as clientTable} from "./schema";
import {v4 as uuidv4} from 'uuid';

export const getClients = () => {
    return db.select().from(clientTable).all()
}

export const insertClient = (client) => {
    if (client.id == null) {
        client.id = uuidv4();
    }
    return db.insert(clientTable).values(client);
}