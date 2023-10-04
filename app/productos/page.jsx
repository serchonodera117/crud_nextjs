"use client"
import React from "react";
import Navigation from "@/components/navigation";
import { useState, useEffect } from "react";
import "@/components/styles/users.css"

function Productos(){
    const [isLogged,setIsLogged] = useState(true);
    const [users, setUsers] = useState("");

    let resetedUsers = []


    useEffect(()=>{
       let token = localStorage.getItem('token_session')
       setIsLogged(!!token)
    },[])
 
     function closeSession() {
         localStorage.removeItem('token_session')
         setIsLogged(false);
       }


    return (
        <div>
              {
                (isLogged)?
                <Navigation onLogout={closeSession}></Navigation>
                :
                <div></div>
            }
            {
                (isLogged)?
                <div>
                    <h1 id="title">productos</h1>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Productos;