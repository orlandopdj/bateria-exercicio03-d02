import { useState } from "react"

const date = new Date()

const App = () => {
    const [step, setStep] = useState(1)

    const decrementStep = () => setStep((s) => (s === 1 ? s : s - 1))
    const handleClickMenosContagem = () => console.log('Clicou no menos do Contagem')
    const incrementSteps = () => setStep((s) => s + 1)
    const handleClickMaisContagem = () => console.log('Clicou no mais do Contagem')

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
                    <button onClick={handleClickMenosContagem}>-</button>
                    <h2>Contagem: 0</h2>
                    <button onClick={handleClickMaisContagem}>+</button>
                </div>
                <h2>Hoje é Domingo, 22 de out. de 2023</h2>
            </div>
        </>
    )
}

export { App }