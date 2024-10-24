import React, { useEffect } from "react";

function Even({ counter, setter }) {
    useEffect(function() {
        console.log('hola');
        return function(){
            console.log('adio');
        }
    })
    return (
        <>
            <span>Even and the value is {counter}</span>
            <button onClick={() => setter (counter + 1)}>one more</button>
        </>
    )
}

export default Even;