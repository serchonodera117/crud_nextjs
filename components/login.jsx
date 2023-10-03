"use client"
import React from "react";

function Login(props, params){
    function startMySession(){
        props.onLogin()
    }
    return(
        <div>
            <h1>Login</h1>
            <button onClick={startMySession}>start session</button>
        </div>
    )
}

export default Login