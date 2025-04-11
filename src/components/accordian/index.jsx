import { useState } from "react"
import data from "./data.js"
import "./index.css"

export default function Accordian() {

    const [selected, setselected] = useState("")  // single selection , Multiple selection
    const [enableMulti, setenableMulti] = useState(false) // Enable Multi Selection
    const [Multiple, setMultiple] = useState([]) // store Multiple IDs

    function handleSingleSelection(currId) {
        setselected(currId === selected ? null : currId)
    }

    function handleMultiSelection(currId) {
        let cpyMultiple = [...Multiple]
        const findindex = cpyMultiple.indexOf(currId)

        if (findindex === -1) {
            cpyMultiple.push(currId)
        }
        else {
            cpyMultiple.splice(findindex, 1)
        }

        setMultiple(cpyMultiple)
    }

    return (
        <>
            <h1 style={{
                textAlign: "center",
                padding: "10px"
                }}>
                    Accordian
            </h1>
            <div className="wrapper">
                <button onClick={() => setenableMulti(!enableMulti)}>{enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
                <div className="accordian">
                    {
                        data && data.length > 0 ?
                            data.map((dataitem) => (
                                <div key={dataitem.id} className="item">
                                    <div className="title"
                                        onClick={
                                            enableMulti
                                                ? () => handleMultiSelection(dataitem.id)
                                                : () => handleSingleSelection(dataitem.id)
                                        }
                                    >
                                        <h3>{dataitem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {enableMulti
                                        ? Multiple.indexOf(dataitem.id) !== -1 && (
                                            <div className="acc-content ">{dataitem.answer}</div>
                                        )
                                        : selected === dataitem.id && (
                                            <div className="acc-content ">{dataitem.answer}</div>
                                        )
                                    }
                                </div>
                            ))
                            : <div>Data Not Found!!</div>
                    }
                </div>
            </div>
        </>
    )
}