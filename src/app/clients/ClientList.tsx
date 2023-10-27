import {getClients} from "../../../db/clients";

export const ClientList = () => {
    const clients = getClients();
    return <div>
        <div className={'bg-primary'}>Clients</div>
        {(clients || []).map(client => client.firstName)}
    </div>

}