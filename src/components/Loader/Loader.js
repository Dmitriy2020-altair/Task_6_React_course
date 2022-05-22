import React from 'react';
import "./Loader.css"

export const Loader = () => {
    console.log("we are here");
    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
}