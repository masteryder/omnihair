import {getClients, insertClient} from "../../../db/clients";
import {useEffect, useState} from "react";
import {Button} from "../components/Button";

export default function Clients() {
  const [clientName, setClientName] = useState('');
  const [clients, setClients] = useState([]);

  const fetchClients = () => {
    getClients.then((res) => {
      setClients(res);
    })
  }

  useEffect(() => {
    fetchClients();
  }, [])
  console.log('clients: ', clients)

  return <div>
    <div className={'bg-primary'}>Clients</div>
    <input type={'text'} value={clientName}
           onChange={() => setClientName(e.target.value)}/>
    <Button onClick={async () => {
      insertClient({name: clientName});
      setClientName('');
    }}>Add</Button>
  </div>
}