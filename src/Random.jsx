import students from "./data/students.json"
import { useState } from "react";

function Random() {
    const [currentStudent, setCurrentStudent] = useState(null)
    const [remainingStudents, setRemainingStudents ] = useState(students)

    function pickRandomStudent() {
        // On génère un index aléatoire afin de picj un élève au hasard
        let randomIndex = Math.floor(Math.random() * remainingStudents.length)

        // On applique cet index sur la version "filtrée" du tableau d'élèves
        let current = remainingStudents[randomIndex]

        // On set le state pour l'élève random et on l'enlève du tableau d'élèves
        setCurrentStudent(current)
        setRemainingStudents(remainingStudents.filter(student => student != current))
    }

    function handleReset() {
        setRemainingStudents(students)
        setCurrentStudent(null)
    }

    return ( 
        <>
            <h1>Random Student</h1> 

            {/* 1 - Faire apparaitre un bouton - Quand je clique dessus un nom aléatoire parmi les élèves doit apparaitre 
            2 - Pas de doublons, une fois un élève passé il ne peut plus etre appellé avant
            la fin de la liste 
            3 - Une fois la liste finie un bouton nous permet de recommencer 

            Bonus : Faire défiler les noms rapidement puis on s'arrete sur un élève
            effet de SUSPENSE

            Vous pourrez utiliser (bonus) : setTimeout, setInterval */}

            { (remainingStudents.length) 
            
            ? <button onClick={() => pickRandomStudent()}>Pick Student</button> 
        
            : <button onClick={() => handleReset()}>Reset</button> }
            
            <h2>{currentStudent}</h2>
        </>
    )
}

export default Random
