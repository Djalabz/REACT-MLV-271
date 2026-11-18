import { useEffect, useContext } from 'react';
import { useNavigate, redirect } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { AuthContext } from './context/AuthContext';


import "./Form.css"

// Adapter la dernière étape du fetch -> redirection vers login si signup / redirection vers accueil + enregistrement du JWT en LS si login 

function Form() {
    let { 
        view,  
        inputValue, 
        error, 
        formData,  
        handleChange, 
        handleChangeToggle,
        checkFormData } = useContext(AuthContext)


        let navigate = useNavigate()

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
        .then(result => {
            console.log(result)
            if (view === "signup") {
                navigate("/form")
            } else {
                localStorage.setItem("token", result) 
                navigate("/shop")
            }}   // Cas ou on a rempli le login -> on récupère le token, on l'enregistre en LS et on redirige vers la page d'accueil 
        )
        .catch(err => console.log(err))        
    }, [formData])


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