"use client"
import React from "react";
import { useState, useEffect } from "react";
import "@/components/styles/users.css"


function SingleUser({params}) {
    const [singleUser, setSingleUser] = useState(null)

    useEffect(() => {
        getSingleUser()
    },[]);

    async function getSingleUser(){
        const  url =`https://fakestoreapi.com/users/${params.id}`
      try{

          const response = await fetch(url)
          const res = await response.json() 

          console.log(res)
          setSingleUser(res)
          
        }
        catch(err){console.log(err)}
    }
    function goBack(){
        history.back()
    }
    return (
        <div className="page">
            <nav className="nav-back">
                <button onClick={goBack}>Back</button>
                <h1>User</h1>
            </nav>

            { (singleUser!=null)?
                <div className="card-user-details">
                    <div className="col-left">
                        <h3>user data</h3>
                        <div className="section">
                            <h4>ID: {singleUser.id}</h4>
                        </div>
                        <br></br>
                        <div className="section">
                            <h4>Username: {singleUser.username}</h4>
                        </div>
                        <br></br>
                        <div className="section">
                            <h4>Password: {singleUser.passsword}</h4>
                        </div>
                        <br></br>
                        <div className="section">
                            <h4>Name: {singleUser.name.firstname} {singleUser.name.lastname}</h4>
                        </div>
                        <br></br>
                        <div className="section">
                            <h4>Phone: {singleUser.phone}</h4>
                        </div>
                    </div>
                    <div className="col-right">
                        <h3>Address</h3>
                        <div className="section">
                            <h4>city: {singleUser.address.city}</h4>
                        </div>
                        <br></br>
                        <div className="section">
                            <h4>Street: {singleUser.address.street}</h4>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="section">
                            <h4>Number: {singleUser.address.number}</h4>
                        </div>
                        <br></br>
                        <div className="section">
                            <h4>Zipcode: {singleUser.address.zipcode}</h4>
                        </div>
                        <br></br>
                        <hr></hr>
                        <h3>Geolocation</h3>
                        <div className="section">
                            <h4>Lat: {singleUser.address.geolocation.lat}</h4>
                        </div>
                        <br></br>
                        <div className="section">
                            <h4>Long: {singleUser.address.geolocation.long}</h4>
                        </div>
                        <br></br>
                    </div>
                </div>
                :
                    <img className="page-not-found" src="https://www.hostpapa.com/blog/app/uploads/2019/05/image4-1.png"></img>
            }
        </div>
    )
}

export default SingleUser;