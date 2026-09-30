import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Form.css"

function Form() {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        confirm: ""
    })

    function handleChange(e, param) {
        // let objCopy = { ... inputValue }
        setInputValue({ ... inputValue, [param] : e.target.value })
    } 

    return ( 
        <>              
            <h1>Signup</h1>

            <div className="signup">
                <TextField 
                    value={inputValue.email}
                    onChange={(e) => handleChange(e, "email")}
                    className="textfield"
                    id="email-input" 
                    label="Email" 
                    variant="outlined" 
                    type='email'
                    placeholder='Votre email...'
                    sx={{ width: "100%", marginBottom: "1rem" }}
                />

                <TextField 
                    value={inputValue.password}
                    onChange={(e) => handleChange(e, "password")}
                    className="textfield"
                    id="password-input" 
                    label="Password" 
                    variant="outlined" 
                    type='password'
                    placeholder='Votre mot de passe...'
                    sx={{ width: "100%", marginBottom: "1rem" }}
                />

                <TextField 
                    onChange={(e) => handleChange(e, "confirm")}
                    value={inputValue.confirm}
                    className="textfield"
                    id="confirm-input" 
                    label="Confirmation" 
                    variant="outlined" 
                    type='confirm'
                    placeholder='Confirmer votre mot de passe...'
                    sx={{ width: "100%", marginBottom: "1rem" }}
                />

                <Button 
                    variant="contained"
                    sx={{ width: "100%", marginBottom: "1rem", height: "3rem" }}
                >
                    Soumettre
                </Button>
            </div>
        </>
    );
}

export default Form;