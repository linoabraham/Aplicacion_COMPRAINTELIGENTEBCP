"use client"
import React, { useState } from "react"
import "./clickes.css"


export default function click({cambia, espera}){
const onsubmit = async(e)=>{
    // const router = useRouter()

    e.preventDefault()
    console.log(e)
    const username = e.target.username.value
    const password = e.target.password.value
    console.log(username,password)
    const res =await fetch("https://finalfinanzas-production.up.railway.app/usuarios", {
      method:"POST",
      body: JSON.stringify({username,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data =await res.json()
    console.log(data)

    //router.push("/vehiculo")
  }
 
return (
    <>
    <div className={cambia?"nombresq":null} onClick={espera}>
        <form onSubmit={onsubmit}>
    <input className="innombre input" type="text" name="username" placeholder="Usuario..." id="username"/>                      
    <input type="password" placeholder="Contraseña..." name="password" className="input uu" id="password"/>
    <button  className="env">Enviar</button>
    </form>
    </div>
    </>                
    )
}
