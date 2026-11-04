import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Form.css"

// Faire fonctionner le form : signup 

// Form de React ---> Back Node-Express ----> En BDD avec SQL (déjà fait coté back)

// On veut que lorsque l'on clique sur le bouton de soumission l'email et le mdp soient envoyés 
// vers notre API express.

// Pour ça on devra faire une requete HTTP avec un body qui contiendra les infos 

// Etapes :
// Créer un state qui sera modifié lorsque le bouton de soumission est cliqué et contient email et mdp (ex : formData)
// Ensuite vous pouvez créer un useEffect qui viendra se déclencher lorsque le state crée change et enverra les données coté back
// On viendra console.log la réponse du back

// Bonus : rediriger vers un Form de login une fois le signup validé (redirect() ou useNavigate()) 
// Bonus 2 : Gérer les erreurs -> afficher un message si les mdp sont différents ou le mail au mauvais format (state aussi)

function Form() {
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
        fetch("http://www.localhost:3000/user/signup", {
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
    }

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

            </div>
        </>
    );
}

export default Form;