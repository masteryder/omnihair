"use client"

import {Button} from "../components/Button";
import {useState} from "react";

export const AddClientForm = () => {
    const [clientName, setClientName] = useState('');

    async function addUser() {
        return fetch("http://localhost:3000/api/clients", {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: clientName})
        });
    }

    return (
        <>
            <input type={'text'} value={clientName}
                   onChange={(e) => {
                       console.log('onChange', e)
                       setClientName(e.target.value)
                   }}/>
            <Button onClick={async () => {
                const res = await addUser();
                console.log({res})
                setClientName('');
            }}>Add</Button>
        </>)
}