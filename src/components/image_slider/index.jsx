import React, { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import "./style.css"

export default function ImageSlider({url, page, limit }) {
    
    const [images, setimages] = useState([])
    const [currentslide, setcurrentslide] = useState(0)
    const [errormsg, seterrormsg] = useState("")
    const [loading, setloading] = useState(false)

    async function fetchimages(getUrl) {

        try {
            setloading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if(data) {
                setimages(data)
                setloading(false)
            }
        } catch(e) {
            seterrormsg(e.message)
            setloading(false)
        }
    }

    function handlePrevious() {
        setcurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1);
      }
    
      function handleNext() {
        setcurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1);
      }

    useEffect(() => {
        if(url !== ""){
            fetchimages(url)
        }
    },[url])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(errormsg !== "") {
        return <h1>Error occured!!... {errormsg}</h1>
    }

    return(
        <>
            <div className="slider">
                <h1 style={{
                    textAlign: "center",
                    padding: "20px"
                }}>
                    Image Slider
                </h1>

                <BsArrowLeftCircleFill 
                    onClick={handlePrevious}
                    className="arrow arrow-left"/>
                {
                    images && images.length
                        ? images.map((imageItem, index) => (
                            <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={
                                currentslide === index
                                ? "current-image"
                                : "current-image hide-current-image"
                            }
                            />))
                        : null
                }
                <BsArrowRightCircleFill
                    onClick={handleNext}
                    className="arrow arrow-right"
                />
                <span className="circle-indicators">
                    {images && images.length
                        ? images.map((_, index) => (
                            <button
                                key={index}
                                className={
                                currentslide === index
                                ? "current-indicator"
                                : "current-indicator inactive-indicator"
                                }
                                onClick={() => setcurrentslide(index)}
                            ></button>
                        ))
                    : null}
                </span>
            </div>
        </>
    )
}