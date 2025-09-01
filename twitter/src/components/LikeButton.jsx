import { useState } from "react"

export function LikeMe() {

    const [state, setState] = useState("Not Liked")

    function changeState(state) {
        setState((prev) => (prev == "Not Liked" ? "Liked" : "Not Liked"))
    }


    return <div>
        <button onClick={changeState}>
            {state}
        </button>
    </div>
}