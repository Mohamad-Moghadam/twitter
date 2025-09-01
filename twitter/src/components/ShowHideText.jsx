import { useState } from "react"

export function SHText() {

    const [classes, setClasses] = useState("show")

    function changeClass() {
        setClasses(prev => prev == "show" ? "hide" : "show")
    }



    return <div>
        <button>
            Let me show sth
        </button>
        <p  className={`${classes}`}>
            I'm supposed to be a plain txt but my feelings don't seem to matter. so click the button to ignore me!
        </p>
    </div>
}