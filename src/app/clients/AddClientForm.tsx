"use client"

import {Button} from "../components/Button";
import {useState} from "react";

export const AddClientForm = () => {
    const [clientName, setClientName] = useState('');
    return <><input type={'text'} value={clientName}
                    onChange={(e) => setClientName(e.target.value)}/>
        <Button onClick={async () => {
            // insertClient({name: clientName});
            setClientName('');
        }}>Add</Button></>
}