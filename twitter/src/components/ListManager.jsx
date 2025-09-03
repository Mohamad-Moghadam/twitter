import { useState } from "react"

export function LManager() {

    const [text, setText] = useState([])
    const [newtxt, setNewTxt] = useState([])

    function addTxt() {
        if (newtxt.trim() === "") return;
        setText([...text, newtxt])
        setNewTxt("")
    }



    return <div>
        <input type="text" value={newtxt} onChange={(e) => setNewTxt(e.target.value)}/>
        <ul>
            {text.map((t, i) => (
            <li key={i}>{t}</li>
        ))}
        </ul>
        <button onClick={addTxt}>

        </button>
    </div>
}