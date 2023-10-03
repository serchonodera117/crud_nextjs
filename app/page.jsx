"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Login from '../components/login'
import Home from '../components/home'
import { useState } from 'react'

export default function MainPage() {
  const [islogged, setIsLogged] = useState(false)

  function startSession() {
    setIsLogged(true)
  }
  return (
    <main className={styles.main}>
      {
        (!islogged)?<Login onLogin={startSession}/>:<Home/>
      }
    </main>
  )
}
