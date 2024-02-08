import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { observer } from "mobx-react"
import { Form } from 'react-router-dom';

import { CheckLogin } from "../../data/server"
import { useEffect, useState } from 'react';
import dataStore from '../../data/dataStore';

const Login = (observer(() => {

    const [name, setName] = useState('');
    const [password, setpassword] = useState('');

    const handleSetName = (e) => {
        setName(e.target.value)
    }

    const handleSetpassword = (e) => {
        setpassword(e.target.value)
    }

    const CheckLoginCurr = () => {
        CheckLogin(name, password);
        setpassword('');
        setName('');
    }

    useEffect(() => {
        document.title = dataStore.businessData['name']
      }, [dataStore.businessData['name']])

    return (
        <>
            <Form onSubmit={CheckLoginCurr}>
                <TextField
                    id="outlined-read-only-input"
                    label="user name"
                    variant="filled"
                    value={name}
                    onChange={handleSetName}
                    InputProps={{
                        readOnly: false,
                    }} />
                <br />
                <br />
                <TextField
                    id="filled-password-input"
                    label="password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    value={password}
                    onChange={handleSetpassword}
                />
            </Form>
            <br/>
            <Button onClick={CheckLoginCurr}>login</Button>
        </>
    )
}))

export default Login

