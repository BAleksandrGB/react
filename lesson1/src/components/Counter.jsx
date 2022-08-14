import React,{ useState } from "react";

export function Counter(props){
    const [count,setCount] = useState(0)

    const updateCount=()=>{
        setCount(count=>count + 1)
    }

    console.log(count);

    return (
        <>
        <button className="btn" onClick={updateCount}>click</button>
        <p>{count}</p>
        </>
    )
}