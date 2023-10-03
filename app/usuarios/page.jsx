"use client"
import React from "react";
import Navigation from "@/components/navigation";
import { useEffect,useState } from "react";
import Image from 'next/image'
import "@/components/styles/users.css"


function Users(){
   const [isLogged,setIsLogged] = useState(true);
    const [users, setUsers] = useState([]);

    let resetedUsers = []


    useEffect(()=>{
       let token = localStorage.getItem('token_session')
       setIsLogged(!!token)
       getUsers()
    },[])

   async function getUsers(){
    let url = "https://fakestoreapi.com/users"
   await fetch(url)
        .then(res=>res.json())
        .then(json=>{
            setUsers(json);
            resetedUsers = json;
        })
}
    function closeSession() {
        localStorage.removeItem('token_session')
        setIsLogged(false);
      }
    return (
        <div  className="page">
            {
                (isLogged)?
                <Navigation className="static" onLogout={closeSession}></Navigation>
                :
                <div></div>
            }
            {
                (isLogged)?
                <div className="container">
                    <h1 className="title">Users</h1>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    {
                        users.map((user)=>(
                            <div className="card-user" key={user.id}>
                                <div className="col-left">
                                    <img className="image-user" src="https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg" alt="..."></img>
                                    <h3>{user.username}</h3>
                                    <br></br>
                                    <a className="btn-page" href={`/usuarios/${user.id}`}>more info</a>
                                </div>
                                <div className="col-right">
                                    <h3>{user.username}</h3>
                                    <h3>{user.name.firstname} {user.name.lastname}</h3>
                                    <h4>{user.email}</h4>
                                    <br></br>
                                    <h5>ID:  {user.id}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Users;