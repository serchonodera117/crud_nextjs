"use client"
import React from "react";
import { useState, useEffect } from "react";
import "@/components/styles/users.css"

function SingleProduct({params}){
    const [singleProduct, setSingleProduct] = useState(null)

        useEffect(() => {
            getSingleProduct()
        },[]);


    async function getSingleProduct(){
        const  url =`https://fakestoreapi.com/products/${params.id}`
      try{

          const response = await fetch(url)
          const res = await response.json() 

          console.log(res)
          setSingleProduct(res)
        }
        catch(err){console.log(err)}
    }
    function goBack(){
        history.back()
    }

    return(
        <div className="page">
            <nav className="nav-back">
                <button onClick={goBack}>Back</button>
                <h1>Product</h1>
            </nav>
            {
                (singleProduct)?
                    <div className="card-user-details">
                        <div className="col-left">
                            <img src={singleProduct.image} className="image-user"></img>
                            <h4>{singleProduct.title}</h4>
                            <br></br>
                            <h4>Price: {singleProduct.price}$</h4>
                            <br></br>
                            <h4>ID: {singleProduct.id}</h4>
                            <br></br>
                        </div>
                        <div className="col-right">
                            <br></br>
                            <h4>{singleProduct.category}</h4>
                            <br></br>
                            <h4>{singleProduct.description}</h4>
                        </div>
                    </div>
                :
                <img className="page-not-found" src="https://www.hostpapa.com/blog/app/uploads/2019/05/image4-1.png"></img>
            }
        </div>
    )
}

export default SingleProduct