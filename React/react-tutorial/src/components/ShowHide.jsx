import React, { useState } from "react";

export default function ShowHide(props){

    const [flag,setFlag]=useState(true);

    function hide(){
        setFlag(false);
    }

    function show(){
        setFlag(true);
    }

    return(
        <>
        <h1>Web Application Development - Effilearn</h1>
       
       {
        flag?
        <h1>Show Hide Component</h1>
        :""
       }

       <button style={{backgroundColor:props.background,color:props.text}} onClick={()=>{hide()}}>Hide</button>
       <button style={{backgroundColor:props.background,color:props.text}} onClick={()=>{show()}}>Show</button>
        </>
    )
}