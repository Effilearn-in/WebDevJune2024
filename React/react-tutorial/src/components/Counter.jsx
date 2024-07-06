import React, { useState } from "react";

export default function Counter(props){


    const [count,setCount]=useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }

    return(
       <>
       <h1>Web Application Development - Effilearn</h1>
       
       <h1>Counter :- {count} , {props.name}</h1>

       <button style={{backgroundColor:props.background,color:props.text}} onClick={()=>{increment()}}>Increment</button>
       <button style={{backgroundColor:props.background,color:props.text}} onClick={()=>{decrement()}}>Decrement</button>
       <button style={{backgroundColor:props.background,color:props.text}} onClick={()=>{reset()}}>Reset</button>
       </>
    )
}