import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Form.css"

// Faire fonctionner le form : signup 

// Rappel : Form de React ---> Back Node-Express ----> En BDD avec SQL (déjà fait coté back)
// On veut que lorsque l'on clique sur le bouton de soumission l'email et le mdp soient envoyés 
// vers notre API express.

// Pour ça on devra faire une requete HTTP avec un body qui contiendra les infos 

// Etapes :
// Créer un state qui sera modifié lorsque le bouton de soumission est cliqué et contient email et mdp (ex : formData)
// Ensuite vous pouvez créer un useEffect qui viendra se déclencher lorsque le state crée change et enverra les données coté back
// On viendra console.log la réponse du back

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