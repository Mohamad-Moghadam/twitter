import { useState } from "react"

export function PassTog() {

    const [passState, setPassState] = useState("password")

    function changePassState() {
        setPassState(prev => prev == "password" ? "text" : "password")
    }


    return <div>
        <input type={passState}/>
        <button onClick={changePassState}>
            Click me if u wanna see sth cool
        </button>
    </div>
}