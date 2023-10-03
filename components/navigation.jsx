"use client"

import "./styles/navigation.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navigation(){
    return(
            <nav className="navbar">
                <ul>
                    <li>
                        <Link href="./usuarios">Usuarios</Link>
                    </li>
                    <li>
                        <Link href="./productos">Productos</Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Navigation