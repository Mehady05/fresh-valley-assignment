import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() =>{
        fetch(`https://intense-headland-62358.herokuapp.com/collect`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    

    // const handleBuyNow = (product) =>{
    //     console.log(product)
    // }


    return(
        <div className="container">
            <div className='row d-flex align-items-center justify-content-center'>
            {
                products.map(pd => <Product pd={pd}></Product>)
            }
        </div>
        </div>
    );      
};

export default AllProducts;
