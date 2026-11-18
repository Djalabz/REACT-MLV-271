import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import "./Form.css"

// Ajouter un formulaire de Login 

// On veut un bouton de type switch qui pourra changer la vue selon si on veut se login ou signup


function Form() {
    const [view, setView] = useState("login")
    const [inputValue, setInputValue] = useState({
        email: "",
        username: "",
        password: "",
        confirm: ""
    })
    const [error, setError] = useState("")
    const [formData, setFormData] = useState("")

    // useEffect pour faire la requete lorsque formData change de valeur
    useEffect(() => {
        let endpoint;

        // Selon la vue je chnage l'URL de destination
        (view === "signup") ? endpoint = "signup" : endpoint = "login"

        fetch(`http://www.localhost:3000/user/${endpoint}`, {
            method: "POST", 
            body: JSON.stringify(formData),
            headers : {
                "Content-Type": "application/json"
        }})
        .then(data => data.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))        
    }, [formData])

    function checkFormData() {
        if (view === "signup") {

                // Je vérifie que : aucun champ ne soit vide, email au bon format et le mdp doit correspondre avec le mdp de confirmation
                if (inputValue.email != "" && inputValue.username != "" && inputValue.password != "" && inputValue.confirm != "") {
                    
                    // Verif de l'email 
                    let emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
                    let emailCheck = emailRegex.test(inputValue.email)

                    if (!emailCheck) {
                        setError("L'email n'est pas au bon format")
                        return
                    }

                    // Verif des mdp 
                    if (inputValue.password != inputValue.confirm) {
                        setError("Les mots de passe doivent etre identiques")
                        return
                    }

                    // Une fois les checks terminés je peux ajouter les infos du signup à mon state formData
                    setFormData({ 
                        email : inputValue.email, 
                        username : inputValue.username, 
                        password: inputValue.password
                    })

                } else {
                    setError("Veuillez remplir tous les champs")
                    return
                }

        } else {

            if (inputValue.username != "" && inputValue.password != "") {
                setFormData({ 
                    username : inputValue.username, 
                    password: inputValue.password
                })
            }
        }
    }

    function handleChange(e, param) {
        // let objCopy = { ... inputValue }
        setInputValue({ ... inputValue, [param] : e.target.value })
    } 

    const handleChangeToggle = (event, newAlignment) => {
        setView(newAlignment);
    };

    return ( 
        <>   

        <ToggleButtonGroup
            color="primary"
            value={view}
            exclusive
            onChange={handleChangeToggle}
            aria-label="Platform"
        >
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="signup">Signup</ToggleButton>
        </ToggleButtonGroup>           

            { (view === "signup") ? 
            
            <div className="signup">

                    <h1>Signup</h1>

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
                        value={inputValue.username}
                        onChange={(e) => handleChange(e, "username")}
                        className="textfield"
                        id="username-input" 
                        label="Username" 
                        variant="outlined" 
                        type='username'
                        placeholder='Votre username...'
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
                        onClick={() => checkFormData()}
                    >
                        Soumettre
                    </Button>

                    { error && <h2 className='text-red-500'>{error}</h2> }

                </div> : 

                    // Partie Login 
                <div className="login">
                    <h1>Login</h1>

                    <TextField 
                        value={inputValue.username}
                        onChange={(e) => handleChange(e, "username")}
                        className="textfield"
                        id="username-input" 
                        label="Username" 
                        variant="outlined" 
                        type='username'
                        placeholder='Votre username...'
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

                    <Button 
                        variant="contained"
                        sx={{ width: "100%", marginBottom: "1rem", height: "3rem" }}
                        onClick={() => checkFormData()}
                    >
                        Soumettre
                    </Button>

                </div>}
            


        </>
    );
}

export default Form;