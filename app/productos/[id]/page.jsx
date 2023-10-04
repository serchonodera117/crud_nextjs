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
                        <div className="col-left"></div>
                        <div className="col-right"></div>
                    </div>
                :
                <img className="page-not-found" src="https://www.hostpapa.com/blog/app/uploads/2019/05/image4-1.png"></img>
            }
        </div>
    )
}

export default SingleProduct