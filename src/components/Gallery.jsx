import React from 'react'

function Gallery (props) {
    console.log(props.data)
    return (
        <>
            <h1>{props.data.title}</h1>
            <img 
                style={{width: "600px"}} 
                src={props.data.primaryImage} 
                alt={props.data.title} 
            />
        </>
    )
}

export default Gallery