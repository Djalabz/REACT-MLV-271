// Regouper ici l'ensemble des states et des opérations liées au User et à son authentification 

// 1 - On fait nos imports (useState, useContext etc )
import { useState, createContext } from "react"

// 2 - On vient créer le contexte (AuthContext)
export const AuthContext = createContext()

// 3 - Enfin on vient implémenter le Context Provider qui lui va contyenir toutes les données et permettre de les partager 
export const AuthContextProvider = ({ children }) => {
    const [view, setView] = useState("login")
    const [inputValue, setInputValue] = useState({
        email: "",
        username: "",
        password: "",
        confirm: ""
    })
    const [error, setError] = useState("")
    const [formData, setFormData] = useState("")

    
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
    }

    let values = {
        view, setView, 
        inputValue, setInputValue,
        error, setError, 
        formData, setFormData, 
        checkFormData, handleChange, handleChangeToggle
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}