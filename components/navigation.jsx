"use client"

import "./styles/navigation.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./styles/users.css"

function Navigation(props){
    function closeSession(){
        props.onLogout()
    }

    function displayModal(product){
        document.getElementById("show-modal-navigation").click()
    }
    return(
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link href="./usuarios">Users</Link>
                    </li>
                    <li>
                        <Link href="./productos">products</Link>
                    </li>
                </ul>
                <a id="logout" onClick={displayModal}>
                    <small>Close Session</small>
                </a>
            </nav>
            <div className="modal">
            <input id="show-modal-navigation" type="checkbox" hidden></input>
                <div className="modal-head">
                    <h2>warning</h2>
                    <label htmlFor="show-modal-navigation">X</label>
                </div>
                <div className="modal-body">
                    <div style={{display:'table', marginLeft: 'auto', marginRight: 'auto'}}>
                     <h3 style={{textAlign: "center", width: "100%"}}>Are you sure you want to leave this page?</h3>
                     <br></br>
                     <img 
                     src="https://media.tenor.com/eGrPITajENUAAAAC/bocchi-bocchi-the-rock.gif"
                     style={{borderRadius: '10px', height: "300px", width: "100%"}}></img>
                     </div>
                </div>
                <hr></hr>
                <br></br>
                <div className="footer">
                    <label className="modal-cancel" htmlFor="show-modal-navigation">No</label>
                    <a className="modal-submit" href="/" type="button" onClick={closeSession}>Yes, I want to leave</a>
                </div>
                <br></br>
            </div>
        </div>

    )
}

export default Navigation