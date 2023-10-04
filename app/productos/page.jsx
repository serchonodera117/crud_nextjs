"use client"
import React from "react";
import Navigation from "@/components/navigation";
import { useState, useEffect } from "react";
import "@/components/styles/users.css"

function Productos(){
    const [isLogged,setIsLogged] = useState(true);
    const [products, setProducts] = useState([]);



    useEffect(()=>{
       let token = localStorage.getItem('token_session')
       setIsLogged(!!token)
       getProducts()
    },[])
 
     function closeSession() {
         localStorage.removeItem('token_session')
         setIsLogged(false);
       }
    
     async function getProducts(){
        let url = "https://fakestoreapi.com/products"
        try{
           const response = await fetch(url)
           const json = await response.json()
                setProducts(json);
        }
        catch(err){
                console.log(err)
        }    
    }

    function deleteProduct(id) {
        let temp = products.filter(p=>p.id !== id)
        setProducts(temp);
    }
    
    function resetProduct(){
        getProducts()
    }


    function orderAsc(){
        let temp = [...products];
         temp.sort((prevP, postP)=>{
            return prevP.id - postP.id
        })

        setProducts(temp)
    }
    function orderDesc(){
        let temp = [...products];
         temp.sort((prevP, postP)=>{
            return  postP.id - prevP.id 
        })

        setProducts(temp)
    }

    function priceAsc(){
        let temp = [...products];
        temp.sort((prevP, postP)=>{
           return prevP.price - postP.price
       })

       setProducts(temp)
    }
    function priceDesc(){
            let temp = [...products];
            temp.sort((prevP, postP)=>{
               return  postP.price - prevP.price 
           })
    
           setProducts(temp)
    }
    return (
        <div className="page">
              {
                (isLogged)?
                <Navigation onLogout={closeSession}></Navigation>
                :
                <div></div>
            }
            {
                (isLogged)?
                <div className="container">
                    <h1 id="title" className="title">productos</h1>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    {
                        products.map((product) =>(
                            <div className="card-user" key={product.id}>
                                <div className="col-left">
                                    <img className="image-user" src={product.image} alt=".."></img>
                                    <h3>{product.title}</h3>
                                    <br></br>
                                    <a className="btn-page" href={`/productos/${product.id}`}>more info</a>
                                </div>
                                <div className="col-right">
                                    <h4>ID: {product.id}</h4>
                                    <h3>{product.price}</h3>
                                    <button className="btn-delete" onClick={() =>{deleteProduct(product.id)}}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                :
                <img className="page-not-found" src="https://www.hostpapa.com/blog/app/uploads/2019/05/image4-1.png"></img>
            }
            {
                (isLogged)?
                <div className="menu-options">
                            <a className="btn-option" onClick={resetProduct}>Reset</a>
                            <a className="btn-option" onClick={orderAsc}> Asc ^</a>
                            <a className="btn-option" onClick={orderDesc}> Desc v</a>
                            <a className="btn-option" onClick={priceAsc}>Price ^</a>
                            <a className="btn-option" onClick={priceDesc}>Price v</a>
                            <a className="btn-option">Update +</a>
                    <label className="control" htmlFor="show-options">
                        <span>+</span>
                    </label>
                    <input id="show-options" type="checkbox" hidden></input>
                </div>
                :
            <div></div>
            }
        </div>
    )
}

export default Productos;