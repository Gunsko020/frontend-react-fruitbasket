
import './App.css'
import React from "react";




function App() {

    const [strawberry, setStrawberry] = React.useState(0)
    const [banana,setBanana] = React.useState(0)
    const [apple,setApple] = React.useState(0)
    const [kiwi,setKiwi] = React.useState(0)

    const decreaseCount = () => {
        setStrawberry(strawberry - 1)
        setBanana(banana - 1)
    }

    const increaseCount = () => {
        setStrawberry(strawberry +1)
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
                            onClick={decreaseCount}>
                                -
                            </button>
                            <p>{strawberry}</p>
                            <button
                            type="button"
                            onClick={increaseCount}>
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
                                onClick={decreaseCount}>
                                -
                            </button>
                            <p>{banana}</p>
                            <button> + </button>
                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🍏Appels
                            </h2>
                            <button
                                type="button"
                                onClick={decreaseCount}>
                                -
                            </button>
                            <p>{apple}</p>
                            <button> + </button>
                        </p>
                    </article>
                    <article className="inner-container">
                        <p>
                            <h2>
                            🥝Kiwi's
                            </h2>
                            <button
                                type="button"
                                onClick={decreaseCount}>
                                -
                            </button>
                            <p>{kiwi}</p>
                            <button> + </button>
                        </p>
                    </article>
                <article>
                    <button className="reset-button">
                        Reset
                    </button>
                </article>
                
            </section>
        </main>
    </>
  )
}

export default App
