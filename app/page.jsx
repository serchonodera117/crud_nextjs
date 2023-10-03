"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import  '../components/styles/toast.css'


import Login from '../components/login'
import Navigation from '@/components/navigation'
import Home from '../components/home'


export default function RootLayout() {
  const [islogged, setIsLogged] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastTitle, setToastTitle] = useState("")
    useEffect(()=>{
      let token = localStorage.getItem('token_session')
      let temp = (token)? true:false
      setIsLogged(token)
    },[])
  function startSession() {
    setIsLogged(true)
  }
  function closeSession() {
    setIsLogged(false)
  }
  function writeToast(title, message){
    let checkbox = document.getElementById('btn-close-toast')
    checkbox.click()
    setToastMessage(message)
    setToastTitle(title)
  }
  return (
    <main>
        <div className="toast">
          <div className="toast-header">
              <div className="content-name">
                <span>{toastTitle}</span>
              </div>
              <div className="close-btn">
                <label id="btn-close-toast" htmlFor="check-toast">
                  <small>X</small>  
                </label>
                <input id='check-toast' type='checkbox' hidden></input>
              </div>
          </div>
          <div className="toast-body">
            <span>
              {toastMessage}
            </span>
          </div>
        </div>

      {
       (!islogged)? <Login onLogin={startSession} onToast={writeToast}/> :
        <Navigation></Navigation>
      }
    </main>
  )
}
