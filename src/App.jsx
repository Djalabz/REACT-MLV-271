import Counter from "./Counter"

// Composant fonctionnel 
function App() {
  // 1-Données (states, variables)
  let x = "juju"

  // 2-Opérations (fonctions)

  // 3-Vue (HTML qui ressemble à du JS et qui est l'affichage)
  return (
    <>
      <Counter name={x}/>
    </>
  )
}

export default App
