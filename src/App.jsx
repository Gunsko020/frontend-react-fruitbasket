
import './App.css'
import {useState}  from "react";
import Fruitbox from "./components/Fruitbox/Fruitbox.jsx";
import Button from "./components/Button/Button.jsx";
import Input from "./components/InputDirectory/Input.jsx";



function App() {

    const [strawberry, setStrawberry] = useState(0)
    const [banana,setBanana] = useState(0)
    const [apple,setApple] = useState(0)
    const [kiwi,setKiwi] = useState(0)

    const [name,setName] = useState("")
    const [lastname,setLastName] = useState("")
    const [age,setAge] = useState(0)
    const [zipcode,setZipcode] = useState("")
    const [deliveryFrequency,toggleDeliveryFrequency] = useState("Every-week")
    const [deliveryTime,toggleDeliveryTime] = useState("EarlyTime")
    const [comment,setComment] = useState("")
    const [condition,toggleCondition] = useState(false)

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
                            <Fruitbox
                            fruitCount={strawberry}
                            setFruitCount={setStrawberry}/>

                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🍌Bananen
                            </h2>
                            <Fruitbox
                                fruitCount={banana}
                                setFruitCount={setBanana}/>
                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🍏Appels
                            </h2>
                            <Fruitbox
                                fruitCount={apple}
                                setFruitCount={setApple}/>
                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🥝Kiwi's
                            </h2>
                            <Fruitbox
                                fruitCount={kiwi}
                                setFruitCount={setKiwi}/>
                        </p>
                    </article>
                <article>
                    <Button type="submit"
                            className="reset-button"
                            clickHandler={resetFruits}>
                        Reset
                    </Button>

                </article>
                
            </section>
            <form onSubmit={handleSubmit}>
                <section className="outer-container">
                    <fieldset className="inner-container-fieldset">
                        <Input
                            type="text"
                            name="name"
                            label="Voornaam"
                            value={name}
                            changeHandler={setName}
                            />
                        <Input
                            type="text"
                            name="lastname"
                            label="Achternaam"
                            value={lastname}
                            changeHandler={setLastName}
                            />
                        <Input
                            type="number"
                            name="age"
                            label="Leeftijd"
                            value={age}
                            changeHandler={setAge}
                        />
                        <Input
                            type="text"
                            name="zipcode"
                            label="Postcode"
                            value={zipcode}
                            changeHandler={setZipcode}
                        />
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
                    <Button
                        type="submit"
                        className="send-button">
                        Verzenden
                    </Button>
                </section>
            </form>
        </main>
    </>
  )
}

export default App
