"use client"

import "./styles/navigation.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navigation(props){
    function closeSession(){
        props.onLogout()
    }

    return(
            <nav className="navbar">
                <ul>
                    <li>
                        <Link href="./usuarios">Users</Link>
                    </li>
                    <li>
                        <Link href="./productos">products</Link>
                    </li>
                </ul>
                <a id="logout" href="/" onClick={closeSession}>
                    <small>Close Session</small>
                </a>
            </nav>
    )
}

export default Navigation