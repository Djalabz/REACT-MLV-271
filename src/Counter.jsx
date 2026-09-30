import { useState } from "react"

function Counter({ name }) {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return ( 
        <>
            { count == 0 ? <h4>count est égal à 0</h4> : <h4>count est sup a 0</h4> }

            <h1>Salut c'est {name}</h1>

            <button onClick={() => increment()}>+</button>
            <p>count : {count}</p> 
        </>
     );
}

export default Counter;

