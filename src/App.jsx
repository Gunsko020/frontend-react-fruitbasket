
import './App.css'
import React from "react";




function App() {

    const [strawberry, setStrawberry] = React.useState(0)
    const [banana,setBanana] = React.useState(0)
    const [apple,setApple] = React.useState(0)
    const [kiwi,setKiwi] = React.useState(0)

    const [name,setName] = React.useState("")
    const [lastname,setLastName] = React.useState("")
    const [age,setAge] = React.useState(0)
    const [zipcode,setZipcode] = React.useState("")
    const [deliveryFrequency,toggleDeliveryFrequency] = React.useState("Every-week")
    const [deliveryTime,toggleDeliveryTime] = React.useState("EarlyTime")
    const [comment,setComment] = React.useState("")
    const [condition,toggleCondition] = React.useState(false)

   function resetFruits(){
        setStrawberry(0)
        setApple(0)
        setKiwi(0)
        setBanana(0)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(name,lastname,age,zipcode,deliveryFrequency,deliveryTime,comment,condition)
        console.log(strawberry,banana,apple,kiwi)
    }

  return (
    <>
        <main>
            <section className="outer-container">
                <h1>Fruitmand bezorgservice</h1>
                    <article className="inner-container">
                        <p>
                            <h2>
                                🍓Aardbeien
                            </h2>
                            <button
                            type="button"
                            disabled={(strawberry===0)}
                            onClick={()=>setStrawberry(strawberry-1)}>
                                -
                            </button>
                            <p>{strawberry}</p>
                            <button
                            type="button"
                            onClick={()=>setStrawberry(strawberry+1)}>
                                +
                            </button>
                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🍌Bananen
                            </h2>
                            <button
                                type="button"
                                disabled={(banana===0)}
                                onClick={()=>setBanana(banana-1)}>
                                -
                            </button>
                            <p>{banana}</p>
                            <button
                                type="button"
                                onClick={()=>setBanana(banana+1)}>
                                +
                            </button>
                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🍏Appels
                            </h2>
                            <button
                                type="button"
                                disabled={(apple===0)}
                                onClick={()=>setApple(apple-1)}>
                                -
                            </button>
                            <p>{apple}</p>
                            <button
                                type="button"
                                onClick={()=>setApple(apple+1)}>
                                +
                            </button>
                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🥝Kiwi's
                            </h2>
                            <button
                                type="button"
                                disabled={(kiwi===0)}
                                onClick={()=>setKiwi(kiwi-1)}>
                                -
                            </button>
                            <p>{kiwi}</p>
                            <button
                                type="button"
                                onClick={()=>setKiwi(kiwi+1)}>
                                +
                            </button>
                        </p>
                    </article>
                <article>
                    <button
                        type="submit"
                        className="reset-button"
                        onClick={resetFruits}
                    >
                        Reset
                    </button>
                </article>
                
            </section>
            <form onSubmit={handleSubmit}>
                <section className="outer-container">
                    <fieldset className="inner-container-fieldset">
                        <label htmlFor="details-name">
                            <span>Voornaam</span>
                            <input
                                type="text"
                                name="name"
                                id="details-name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                />
                        </label>
                        <label htmlFor="details-lastname">
                            <span>Achternaam</span>
                            <input
                                type="text"
                                name="lastname"
                                id="details-lastname"
                                value={lastname}
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                        </label>
                        <label htmlFor="details-age">
                            <span>Leeftijd</span>
                            <input
                                type="number"
                                name="age"
                                id="details-age"
                                value={age}
                                onChange={(e)=>setAge(parseInt(e.target.value))}
                            />
                        </label>
                        <label htmlFor="details-zipcode">
                            <span>Postcode</span>
                            <input
                                type="text"
                                name="zipcode"
                                id="details-zipcode"
                                value={zipcode}
                                onChange={(e)=>setZipcode(e.target.value)}
                            />
                        </label>
                        <label htmlFor="details-delivery">
                            <span>Bezorgfrequentie</span>
                            <select
                                name="delivery"
                                id="details-delivery"
                                value={deliveryFrequency}
                                onChange={(e)=>toggleDeliveryFrequency(e.target.value)}
                            >
                                <option value="Every-week">Iedere week</option>
                                <option value="Every-2-weeks">Om de week</option>
                                <option value="Every-month">Iedere maand</option>
                            </select>
                        </label>
                        <label htmlFor="details-time">
                            <input
                                type="radio"
                                name="time"
                                id="details-time"
                                value="day"
                                checked={deliveryTime === 'day'}
                                onChange={(e)=>toggleDeliveryTime(e.target.value)}/>
                            <span>Overdag </span>
                            <input
                                type="radio"
                                name="time"
                                id="details-time"
                                value="evening"
                                checked={deliveryTime === 'evening'}
                                onChange={(e)=>toggleDeliveryTime(e.target.value)}/>
                            <span>'s Avonds</span>
                        </label>
                        <label htmlFor="details-comment-field">
                            <span>Opmerkingen : </span>
                        </label>
                        <label htmlFor="details-comment">
                        <textarea
                            id="details-textarea"
                            name="comments"
                            cols="25"
                            rows="5"
                            placeholder="Handig om te weten..."
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}
                        >
                            </textarea>
                        </label>
                        <label htmlFor="details-conditions">
                            <input
                                type="checkbox"
                                id="details-conditions"
                                name="condtions"
                                value={condition}
                                onChange={(e)=>toggleCondition(e.target.checked)}/>
                            <span>Ik ga akkoord met de voorwaarden</span>
                        </label>
                    </fieldset>
                    <button
                        type="submit"
                        className="send-button"
                    >
                        Verzenden
                    </button>
                </section>
            </form>
        </main>
    </>
  )
}

export default App
