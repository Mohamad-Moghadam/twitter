import { useState } from "react"

export function CounterButton() {

    const [counter, setClicks] = useState(0)

    function addClicks() {
        setClicks(counter + 1)
    }

    function reseClicks() {
        resetCounter(0)
    }


    return <div>
        <button onClick={addClicks}>
            Touch me with that goddamn cursor
        </button>
        <button onClick={reseClicks}>
            Click me to reset my feelings
        </button>
    </div>
}