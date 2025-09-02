import { useState } from "react"
import Styles from "./SHtxt.module.css"

export function SHText() {

    const [classes, setClasses] = useState(true)

    function changeClass() {
        setClasses(prev => !prev)
    }



    return <div>
        <button onClick={changeClass}>
            Let me show sth
        </button>
        <p  className={classes ? Styles.show : Styles.hide}>
            I'm supposed to be a plain txt but my feelings don't seem to matter. so click the button to ignore me!
        </p>
    </div>
}