"use client"
import React from "react";
import { useState } from "react";
import IconUser from "./images/user_icon.png";
import Image from 'next/image'
import "./styles/login.css"

function Login(props, params){
 const [isPass, setIsPass] = useState(false);
 const [loginData, setLoginData] = useState({username:'', password:''});
 
    function startMySession(e){
        e.preventDefault();
        let url = 'https://fakestoreapi.com/auth/login'
        let data={
            username: loginData.username,
            password: loginData.password
        }
        fetch(url,{
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify(data)
        })
        .then(response => response.json)
        .then(resp=>{
            console.log(resp)
        })

        //props.onLogin()
    }

    function changePassVisibility(obj){
        let pass = document.getElementById(obj.password)
        let btn = document.getElementById(obj.btnpass)

        let temp = !isPass
        setIsPass(temp)

        pass.type = (temp)? 'text' : 'password'
        btn.innerHTML= temp ? 'Show' : 'Hide' 
    }

    //validations
    function changeUser(event){
        let text = event.target.value
        setLoginData(obj=>({...obj,username:text}))
    }
   function changePass(event){
         let text = event.target.value
         setLoginData(obj=>({...obj, password:text}))
   }
    return(
        <div className="login-container">
            <div className="login-card">
                <Image src={IconUser} className="icon-user" ></Image>
                <br/>
                <h1>Login</h1>
                
                <div className="content">
                    <form onSubmit={startMySession}>
                        <div className="section">
                            <label htmlFor="username">Username</label>
                                <br></br>
                            <input id="username" type="text" placeholder="example123" required
                             onChange={changeUser} value={loginData.username}></input>
                        </div>
                        <br></br>
                        <div className="section">
                            <label htmlFor="password">pasword</label>
                                <br></br>
                            <input id="input-password" type="password" placeholder="*******" required
                                 onChange={changePass} value={loginData.password}/>
                           
                            <div className="container-pass-visibility">
                                <label id="btn-pass" htmlFor="pasword-visibility" onClick={() =>(changePassVisibility({
                                    'password': "input-password",
                                    'btnpass': "btn-pass",}))}>Show</label>
                                <input type="checkbox" id="pasword-visibility"></input>
                            </div>
                        </div>
                    
                       <button type="submit" className="btn-log">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login