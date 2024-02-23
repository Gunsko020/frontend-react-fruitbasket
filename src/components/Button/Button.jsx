import React from "react";
export default function Button({type,disabled,children,clickHandler,className}) {
    return (

        <button
            type={type}
            disabled={disabled || false}
            onClick={clickHandler}
            className={className}
        >
            {children}
        </button>

    );
}