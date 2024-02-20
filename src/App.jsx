
import './App.css'
import React from "react";




function App() {

    const [strawberry, setStrawberry] = React.useState(0)
    const [banana,setBanana] = React.useState(0)
    const [apple,setApple] = React.useState(0)
    const [kiwi,setKiwi] = React.useState(0)

   function resetFruits(){
        setStrawberry(0)
        setApple(0)
        setKiwi(0)
        setBanana(0)
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
        </main>
    </>
  )
}

export default App
