import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import "./Form.css"

function Form() {
    return ( 
        <>
                      
                <h1>Signup</h1>

                <div className="signup">

                    <TextField 
                        className="textfield"
                        id="email-input" 
                        label="Email" 
                        variant="outlined" 
                        type='email'
                        placeholder='Votre email...'
                        sx={{ width: "100%", marginBottom: "1rem" }}
                    />

                    <TextField 
                        className="textfield"
                        id="password-input" 
                        label="Password" 
                        variant="outlined" 
                        type='password'
                        placeholder='Votre mot de passe...'
                        sx={{ width: "100%", marginBottom: "1rem" }}
                    />

                    <TextField 
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
                    >Soumettre</Button>
                </div>
        </>
    );
}

export default Form;