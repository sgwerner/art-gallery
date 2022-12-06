import { proposalSyntaxPlugins } from '@babel/preset-env/lib/shipped-proposals'
import React from 'react'

function ButtonBar(props) {
    return (
        <>
        <button value={-5} onClick={props.handleIterate}>Way Back</button>
        <button value={-1} onClick={props.handleIterate}>Back</button>
        <button value={1} onClick={props.handleIterate}>Next</button>
        <button value={5} onClick={props.handleIterate}>Big Jump</button>
        </>
    )
}

export default ButtonBar