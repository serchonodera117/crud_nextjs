"use client"
import React from "react";
import Navigation from "@/components/navigation";
import { useEffect,useState } from "react";
import Image from 'next/image'
import "@/components/styles/users.css"


function Users(){
   const [isLogged,setIsLogged] = useState(true);
    const [users, setUsers] = useState([]);
    const [usersReset, setUserReset] = useState([])


    useEffect(()=>{
       let token = localStorage.getItem('token_session')
       setIsLogged(!!token)
       getUsers()
    },[])

   async function getUsers(){
    let url = "https://fakestoreapi.com/users"
    try{
       const response = await fetch(url)
       const json = await response.json()
            setUsers(json);
            setUserReset(json);
    }
    catch(err){
            console.log(err)
    }    
}
    function closeSession() {
        localStorage.removeItem('token_session')
        setIsLogged(false);
      }

    function deleteUser(id) {
        let temp = users.filter(user=>user.id !== id)
        setUsers(temp) 
    }
    function resetUsers(){
      getUsers()
    }
    function orderAsc(){
        let temp = [...users];
         temp.sort((prevUser, postUser)=>{
            return prevUser.id - postUser.id
        })

        setUsers(temp)
    }
    function orderDesc(){
        let temp = [...users];
        temp.sort((prevUser, postUser)=>{
           return  postUser.id - prevUser.id
       })


        setUsers(temp)
    }
    function orderByEmail(){
        let temp = [...users];
        temp.sort((prevUser, postUser)=>{
            return  prevUser.email.localeCompare(postUser.email)
        })
        setUsers(temp)
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
                                    <br></br>
                                    <h3>{user.username}</h3>
                                    <br></br>
                                    <h3>{user.name.firstname} {user.name.lastname}</h3>
                                    <br></br>
                                    <h4>{user.email}</h4>
                                    <br></br>
                                    <h5>ID:  {user.id}</h5>
                                    <br></br>
                                    <button className="btn-delete" onClick={() =>{deleteUser(user.id)}}>Delete {user.username}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                :
                <div></div>
            }{
                (isLogged)?
                <div className="menu-options">
                            <a className="btn-option" onClick={resetUsers}>Reset</a>
                            <a className="btn-option" onClick={orderAsc}> Asc ^</a>
                            <a className="btn-option" onClick={orderDesc}>Desc v</a>
                            <a className="btn-option" onClick={orderByEmail}>by Email</a>
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

export default Users;