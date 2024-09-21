import { useState } from "react"


const App = () => {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const decrementStep = () => setStep((s) => (s === 1 ? s : s - 1))
    const decrementCount = () => setCount((c) => c - step)
    const incrementSteps = () => setStep((s) => s + 1)
    const incrementCount = () => setCount((c) => c + step)

    console.log(date.getDate())


    return (
        <>
            <div className="container">
                <div className="count">
                    <button onClick={decrementStep}>-</button>
                    <h2>Intervalo: {step}</h2>
                    <button onClick={incrementSteps}>+</button>
                </div>
                <div className="count">
                    <button onClick={decrementCount}>-</button>
                    <h2>Contagem: {count}</h2>
                    <button onClick={incrementCount}>+</button>
                </div>
                <h2>Hoje é Domingo, 22 de out. de 2023</h2>
            </div>
        </>
    )
}

export { App }