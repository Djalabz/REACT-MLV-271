import { useState } from "react"

function Counter({ name }) {
    const [count, setCount] = useState(0);

    console.log(count)

    function increment() {
        setCount(count + 1)
    }

    return ( 
        <>
            {/* && - condition simple "if" */}
            {/* { count > 3 && <h3>count est sup à 3</h3> } */}

            {/* { (condition) ? si vérifié : si non } */}
            { count == 0 ? <h4>count est égal à 0</h4> : <h4>count est sup a 0</h4> }

            <h1>Salut c'est {name}</h1>

            <button onClick={() => increment()}>+</button>
            <p>count : {count}</p> 
        </>
     );
}

export default Counter;

