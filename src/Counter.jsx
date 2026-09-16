import { useState } from "react"

function Counter({ name }) {
    const [count, setCount] = useState(0);

    console.log(count)

    function increment() {
        setCount(count + 1)

        console.log(count)

        setCount(count + 1)

        console.log(count)
    }

    return ( 
        <>
            <h1>Salut c'est {name}</h1>

            <button onClick={() => increment()}>+</button>
            <p>count : {count}</p> 
        </>
     );
}

export default Counter;

