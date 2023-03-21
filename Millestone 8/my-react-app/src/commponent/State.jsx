import { useState } from "react"

export function IncrementNumber(){
    const [count,setCount] = useState(0);
    const Increment = ( ) =>{
        setCount(count + 1)
    }
    return(
        <div>
            <h1>Increment number is {count}</h1>
            <button onClick={Increment}>Incremnet number</button>
        </div>
    )
}