import { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    const decrementCounterValue = () => {
        setCounterValue(counterValue - 1)
    }

    return (
        <div className="Counter">
            <h2>Contador</h2>

            <p>You clicked {counterValue} times</p>

            <button onClick={incrementCounterValue}> - </button>
            <button onClick={decrementCounterValue}> + </button>
        </div>
    )
}

export default Counter