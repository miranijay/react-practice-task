import { useEffect, useState } from "react"

export default function Randomcolor() {

    const [typeColor, settypeColor] = useState("hex")
    const [color, setcolor] = useState("#000000")

    function handleRandomHexColor () {

        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"

        for( let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)]
        }

        setcolor(hexColor)
    }

    function handleRandomrgbColor () {

        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)

        setcolor(`rgb(${R},${G},${B})`)
    }

    return (
        <>
            <h1 style={{
                textAlign: "center",
                padding: "20px"
                }}> 
                    Random Color Generator
            </h1>
            <div style={{
                width:"90vw",
                height: "90vh",
                background: color, 
                }}>
                <button onClick={() => settypeColor('hex')}>Enable Hex Color </button>
                <button onClick={() => settypeColor('rgb')}>Enable RGB Color</button>
                <button onClick={typeColor === 'hex' ? handleRandomHexColor : handleRandomrgbColor}>Generate Random Color</button>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "26px"
                }}>
                    <h3>{typeColor === "rgb" ? "RGB color" : "HEX color"}</h3>
                    <h1>{color}</h1>
                </div>
            </div>
        </>
    )
}