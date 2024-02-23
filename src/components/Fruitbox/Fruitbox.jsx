import Button from "../Button/Button.jsx";
import React from "react";




export default function Fruitbox({setFruitCount,fruitCount}) {
    return (
        <>
            <Button
                type="button"
                disabled={fruitCount===0}
                clickHandler={()=>setFruitCount(fruitCount-1)}>
                -
            </Button>
            <p>{fruitCount}</p>
            <Button
                type="button"
                clickHandler={()=>setFruitCount(fruitCount+1)}>
                +
            </Button>
        </>

    );
}