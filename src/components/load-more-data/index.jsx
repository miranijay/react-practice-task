import React, { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {

    const [loading, setloading] = useState(false)
    const [products, setproducts] =useState([])
    const [count, setcount] = useState(0)
    const [disable, setdisable] = useState(false)

    async function fetchproducts() {
        try {
            setloading(true)

            let response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 10}`)
            
            let result = await response.json();
            
            if(result && result.products && result.products.length) {
                setproducts((prevData) => [...prevData, ...result.products]);
                setloading(false);
            }
            
        } catch(e) {
            consolelog(e);
            setloading(false);
        }
    }

    useEffect(() => {
        fetchproducts()
    },[count])

    useEffect(() => {
        if(products && products.length === 100) {
            setdisable(true);
        }
    })

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div className="load-data">
            <h1 style={{
                textAlign: "center",
                paddingTop: "100px"
            }}>
                Load More Data
            </h1>
            <div className="product-container">
                {
                    products && products.length ? 
                    products.map((item) => 
                        <div key={item.id} className="product">
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )
                    : null
                }
            </div>
            <div className="btn-container">
                <button disabled={disable} onClick={() => setcount(count + 1)}>Load More Products</button>
                {disable ? "Max Limit Reached!" : null}
            </div>
        </div>
    )
}