import { useState } from "react"

export function SHText() {

    const [classes, setClasses] = useState("show")

    function changeClass() {
        setClasses(prev => prev == "show" ? "hide" : "show")
    }



    return <div>
        <button className={`${classes}`}>
            Let me show sth
        </button>
    </div>
}