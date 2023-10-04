"use client"
import React from "react";
import Navigation from "@/components/navigation";
import { useState, useEffect } from "react";
import "@/components/styles/users.css"
import SingleUser from "../usuarios/[id]/page";

function Productos(){
    const [isLogged,setIsLogged] = useState(true);
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});



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

    function displayModal(product){
        document.getElementById("show-modal").click()
        setSingleProduct(product)
    }

    function handleChange(e, propertyName){
        let temp = e.target.value
        setSingleProduct(obj=> ({...obj, [propertyName]: temp}))
    }

 async  function updateProduct(e){
        e.preventDefault()
        let url = "https://fakestoreapi.com/products"
        try{
            const response = await fetch(url,{
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(singleProduct)
            })
            const json = await response.json()
            let tempList = [...products]
            let index = tempList.findIndex((product) => product.id ===singleProduct.id)
            tempList[index] = json

            setProducts(tempList)

            setTimeout(() => {
                document.getElementById("show-modal").click()
            }, 500);
        }
        catch(err){
                console.log(err)
        }  
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
                    <h1 id="title" className="title">Products</h1>
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
                                    <button className="btn-update" onClick={() =>{displayModal(product)}}>Update</button>
                                    <br></br>
                                    <br></br>
                                    <br></br>
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
                    <label className="control" htmlFor="show-options">
                        <span>+</span>
                    </label>
                    <input id="show-options" type="checkbox" hidden></input>
                </div>
                :
            <div></div>
            }
            <div className="modal">
                <input id="show-modal" type="checkbox" hidden></input>
                <div className="modal-head">
                    <h2>Update</h2>
                    <label htmlFor="show-modal">X</label>
                </div>
                <form onSubmit={(e)=>{updateProduct(e)}}>
                    <div className="modal-body">
                        <div className="col-left">
                          <div className="form-section">
                                <label htmlFor="input-url">Url Image</label>
                                <br></br>
                                <input id="input-url" className="form-input"  type="url" 
                                placeholder="http://www.page.com/yourimage.png" required value={singleProduct.image} 
                                onChange={(e)=>{handleChange(e, "image")}}></input>
                                <br></br>
                            </div>
                            <br></br>
                       
                            <div className="form-section">
                                <label htmlFor="input-name">Title</label>
                                <br></br>
                                <input id="input-name" className="form-input"  type="text" 
                                placeholder="Buzz" required value={singleProduct.title} 
                                onChange={(e)=>{handleChange(e, "title")}}></input>
                                <br></br>
                            </div>
                            <br></br>

                            <div className="form-section">
                                <label htmlFor="input-price">Price</label>
                                <br></br>
                                <input id="input-price" className="form-input"  type="number" 
                                placeholder="50$" required value={singleProduct.price} 
                                onChange={(e)=>{handleChange(e, "price")}}></input>
                                <br></br>
                            </div>
                            <br></br>
                        </div>

                        <div className="col-right">
                            <div className="form-section">
                                    <label htmlFor="input-cat">Category</label>
                                    <br></br>
                                    <input id="input-cat" className="form-input"  type="text" 
                                    placeholder="50$" required value={singleProduct.category} 
                                    onChange={(e)=>{handleChange(e, "category")}}></input>
                                    <br></br>
                                </div>
                                <br></br>
                            <div className="form-section">
                                    <label htmlFor="input-des">Description</label>
                                    <br></br>
                                    <textarea id="input-des" className="form-input"  type="number" 
                                    placeholder="50$" required value={singleProduct.description} 
                                    onChange={(e)=>{handleChange(e, "description")}}></textarea>
                                    <br></br>
                                </div>
                                <br></br>
                            
                        </div>
                    </div>
                    <div className="modal-footer">
                            <label className="modal-cancel" htmlFor="show-modal">Cancel</label>
                            <button className="modal-submit" type="submit">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Productos;