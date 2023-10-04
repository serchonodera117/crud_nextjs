"use client"
import React from "react";
import Navigation from "@/components/navigation";
import { useEffect,useState } from "react";
import Image from 'next/image'
import "@/components/styles/users.css"


function Users(){
   const [isLogged,setIsLogged] = useState(true);
    const [users, setUsers] = useState([]);


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

    function loadModal(){
        document.getElementById("show-modal").click()
    }

   async function addUser(e){
        e.preventDefault();

        let data={
            email: document.getElementById("input-email").value,
            username: document.getElementById("input-username").value,
            password: document.getElementById('input-password').value,
            
            name:{
                firstname: document.getElementById("input-name").value,
                lastname: document.getElementById("input-lastname").value
            },
            address:{
                city: document.getElementById("input-city").value,
                street: document.getElementById("input-street").value,
                number: document.getElementById("input-number").value,
                zipcode: document.getElementById("input-zipcode").value,
                geolocalization:{
                    lat: document.getElementById("input-lat").value,
                    long: document.getElementById("input-long").value
                },
                phone: document.getElementById("input-phone").value
            }
        }


        try{
            const url = "https://fakestoreapi.com/users"
            
            const response = await fetch(url,{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(data)
            })
            const json = await response.json()
            data.id=json.id + users.length
            let temp = [...users]
                temp.push(data)
          |     setUsers(temp)
          document.getElementById("input-email").value =""
          document.getElementById("input-username").value =""
          document.getElementById('input-password').value =""
          document.getElementById("input-name").value =""
          document.getElementById("input-lastname").value
          document.getElementById("input-city").value =""
          document.getElementById("input-street").value =""
          document.getElementById("input-number").value =""
          document.getElementById("input-zipcode").value =""
          document.getElementById("input-lat").value =""
          document.getElementById("input-long").value =""
          document.getElementById("input-phone").value =""
          setTimeout(()=>{
            loadModal()
 
          },500)
         }
         catch(err){
                 console.log(err)
         } 
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
                <img className="page-not-found" src="https://www.hostpapa.com/blog/app/uploads/2019/05/image4-1.png"></img>
            }{
                (isLogged)?
                <div className="menu-options">
                            <a className="btn-option" onClick={resetUsers}>Reset</a>
                            <a className="btn-option" onClick={orderAsc}> Asc ^</a>
                            <a className="btn-option" onClick={orderDesc}>Desc v</a>
                            <a className="btn-option" onClick={orderByEmail}>by Email</a>
                            <a className="btn-option" onClick={loadModal}>Add +</a>
                    <label className="control" htmlFor="show-options">
                        <span>+</span>
                    </label>
                    <input id="show-options" type="checkbox" hidden></input>
                </div>
                :
            <div></div>
            }
            {/* MODAL ADD USERS */}
            <div className="modal">
                <input id="show-modal" type="checkbox" hidden></input>
                <div className="modal-head">
                    <h2>Add</h2>
                    <label htmlFor="show-modal">X</label>
                </div>
                <form onSubmit={addUser}>
                    <div className="modal-body">
                        <div className="col-left">
                        <h3>Data</h3>
                            <div className="form-section">
                                <label htmlFor="input-email">Email</label>
                                <br></br>
                                <input className="form-input" id="input-email" type="email"
                                placeholder="example@exanple.com" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-username">Username</label>
                                <br></br>
                                <input id="input-username" className="form-input"  type="text" 
                                placeholder="example117" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-password">Password</label>
                                <br></br>
                                <input id="input-password" className="form-input"  type="password" 
                                placeholder="******" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-name">Name</label>
                                <br></br>
                                <input id="input-name" className="form-input"  type="text" 
                                placeholder="Buzz" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-lastname">Last Name</label>
                                <br></br>
                                <input id="input-lastname" className="form-input"  type="text" 
                                placeholder="Aldrin" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-phone">phone</label>
                                <br></br>
                                <input id="input-phone" className="form-input"  type="number"  
                                placeholder="143 123 1234" required></input>
                            </div>
                            <br></br>
                        </div>

                        <div className="col-right">
                            <h3>Address</h3>
                            <div className="form-section">
                                <label htmlFor="input-city">City</label>
                                <br></br>
                                <input id="input-city" className="form-input"  type="text" 
                                placeholder="city" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-street">Street</label>
                                <br></br>
                                <input id="input-street" className="form-input"  type="text" 
                                placeholder="Avenida siempre viva" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-number">Number</label>
                                <br></br>
                                <input id="input-number" className="form-input"  type="number" 
                                placeholder="42" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-zipcode">zipcode</label>
                                <br></br>
                                <input id="input-zipcode" className="form-input"  type="number" 
                                placeholder="423122" required></input>
                            </div>
                            <br></br>

                            <h3>Geolocalizacion</h3>
                            <div className="form-section">
                                <label htmlFor="input-lat">Latitude</label>
                                <br></br>
                                <input id="input-lat" className="form-input"  type="number" 
                                placeholder="-64.313" required></input>
                            </div>
                            <br></br>
                            <div className="form-section">
                                <label htmlFor="input-long">Longitude</label>
                                <br></br>
                                <input id="input-long" className="form-input"  type="number" 
                                placeholder="-64.313" required></input>
                            </div>
                            <br></br>
                        </div>
                    </div>
                    <br></br>
                    <div className="modal-footer">
                        <label className="modal-cancel" htmlFor="show-modal">Cancel</label>
                        <button className="modal-submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Users;