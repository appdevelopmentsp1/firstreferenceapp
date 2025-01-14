import React from "react"

function Card(props){
    return (
        <>
            <h2>{props.Name}</h2>
            <img 
                srv={props.Img}
                alt={props.AltText}/>
            <p>{props.Phone}</p>
            <p>{props.Email}</p>
        </>
    )
}