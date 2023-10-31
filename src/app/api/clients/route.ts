import {getClient, getClients, insertClient} from "../../../../db/clients";

export const GET = (request: Request) => {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    let res;
    if (id != null) {
        res = getClient(id);
    } else {
        res = getClients();
    }
    return Response.json({res})
}


export const PUT = (request: Request) => {
    const object = request.body;
    const res = insertClient(object);
    return Response.json({res});
}