import students from "./data/students.json"

function Random() {
    return ( 
        <>
            <h1>Random Student</h1> 

            1 - Faire apparaitre un bouton - Quand je clique dessus un nom aléatoire parmi les élèves doit apparaitre 
            2 - Pas de doublons, une fois un élève passé il ne peut plus etre appellé avant
            la fin de la liste 
            3 - Une fois la liste finie un bouton nous permet de recommencer 

            Bonus : Faire défiler les noms rapidement puis on s'arrete sur un 
            SUSPENSE

            Vous pourrez utiliser (bonus) : setTimeout, setInterval
        </>
     );
}

export default Random
