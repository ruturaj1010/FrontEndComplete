import React, { useEffect, useState } from "react";
import axios from "../utils/Axios.jsx";

function Products () {

    const [products, setProducts] = useState( [] );

    const getProducts = () => {

        // const api = "https://fakestoreapi.com/products";

        axios.get( "/products" ).then( res => {
            setProducts( () => res.data )
        } ).catch( err => console.log( err ) )

    }

    useEffect( () => {
        getProducts()
    }, [] );

    return (
        <div className="p-28">

            <h1>Welcome to React!</h1>
            <p>This is a simple React application.</p>

            <button onClick={ getProducts } className="mt-6 px-3 py-1 bg-sky-300">Get Products</button>
            <br /> <hr />

            <hr className="my-7" />

            <div className="w-3/4">
                { products.length > 0 ? products.map( ( item, index ) => {
                    return <div key={ index } className="px-3 py-1 bg-amber-200 font-semibold rounded-md my-2" >{ item.title }</div>
                } ) : "Wait to add new product" }
            </div>
        </div>
    )
}

export default Products;