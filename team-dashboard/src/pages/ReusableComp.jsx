import { useState } from "react"

export default function ReusableComp() {

    const [bgColor, setBgColor] = useState("yellow")

    const changeBg = () => {
        if (bgColor === 'yellow')
            setBgColor("red")
        else if (bgColor == 'red')
            setBgColor('yellow')
    }

    return <div style={{ backgroundColor: bgColor }} className="colored_box" onClick={changeBg}></div>
}
