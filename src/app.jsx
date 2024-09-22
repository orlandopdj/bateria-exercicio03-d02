import { useState } from "react"


const App = () => {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const decrementStep = () => setStep((s) => (s === 1 ? s : s - 1))
    const decrementCount = () => setCount((c) => c - step)
    const incrementSteps = () => setStep((s) => s + 1)
    const incrementCount = () => setCount((c) => c + step)

    const date = new Date()
    const formattedDate = Intl.DateTimeFormat("pt-BR", {
        weekday: 'long',
        month: 'short',
        year: 'numeric',
        day: '2-digit'
    }).format(date.setDate(date.getDate() + count))

    const singularPlural = count === 1 || count === -1 ? 'dia' : 'dias'

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

                <h2>
                    {count > 0
                        ? `${count} ${singularPlural} à partir de hoje será ${formattedDate}`
                        : count < 0
                            ? `${Math.abs(count)} ${singularPlural} atrás era ${formattedDate}`
                            : `Hoje é ${formattedDate}`}
                </h2>
            </div>
        </>
    )
}

export { App }