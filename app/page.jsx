"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Login from '../components/login'
import Home from '../components/home'
import { useState, useEffect } from 'react'
import  '../components/styles/toast.css'

export default function MainPage() {
  const [islogged, setIsLogged] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastTitle, setToastTitle] = useState("")
    useEffect(()=>{
      let token = localStorage.getItem('')
    },[])
  function startSession() {
    setIsLogged(true)
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
       (!islogged)?<Login onLogin={startSession} onToast={writeToast}/>:<Home/>
      }
    </main>
  )
}
