"use client"
import { useState } from 'react'
import  '../page.module.css'
import Click from  "./click.jsx"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { json } from 'react-router-dom'


export default function page() {
  const router = useRouter()
  const onsubmit = async(e)=>{
    e.preventDefault()
    console.log(e)
    const username = e.target.username.value
    const password = e.target.password.value
    console.log(username,password)
    const res =await fetch(`https://finalfinanzas-production.up.railway.app/usuarios/buscar?username=${username}&password=${password}`, {
      method:"GET",
      // body: JSON.stringify({username,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data =await res.json()
    console.log(data.estado)

    if(data.estado=='1'){
      router.push("/cotiza")
      //alert("usuario o contraseña correcta")
    }else{
      alert("usuario o contraseña incorrecta")
    }
    
  
    
    
    

    // useEffect((e) => {
    //   // Simula una función de validación de autenticación
    //   const usuarioAutenticado = `http://localhost:8080/usuarios/buscar?username=${username}&password=${password}`;
  
    //   // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    //   if (usuarioAutenticado == true) {
    //     console.log("Ingresado")
    //     // router.push('/cotiza');
    //   }
    //   else{console.log("Error")}
    // }, []);
    // router.push("/cotiza") 
  }
    
    // const onsubmit = async(e)=>{
    //   // const router = useRouter()

    //   e.preventDefault()
    //   console.log(e)
    //   const username = e.target.username.value
    //   const password = e.target.password.value
    //   console.log(username,password)
    //   const res =await fetch("http://localhost:8080/usuarios", {
    //     method:"POST",
    //     body: JSON.stringify({username,password}),
    //     headers:{
    //       'Content-Type':'application/json'
    //     }
    //   })
    //   const data =await res.json()
    //   console.log(data)

    //   // router.push("/vehiculo")
    // }
  
   
  return (

 
          <div className="contenedor" id='contenedor'>
    <div><h1 className='bienvenido'>Bienvenido!</h1></div>
    
    <form className='form' onSubmit={onsubmit}>
        <label htmlFor='username' className='nombre' >  </label>
       <input type="text"  placeholder='Usuario...' name='username'  className='input'  id='username'/>
       <label  htmlFor='password' className='password'></label>
     <input type="password" placeholder='Contraseña...'name='apellido' className='tres' id='password'/>
        <button className='enviar'>Enviar</button>
        {/* <a onChange={cambia} className='poesia'>{click}</a> */}
      </form>

      <div className="banner">
      <p className="mensaje">¿No tienes cuenta? Crea una aquí</p>
      <button className="registrar" onClick={() => router.push('/register')}>Registrarse</button>
    </div>
  
   

<img className='imagen' src={("https://www.bbva.pe/content/dam/public-web/peru/photos/blog-img/card/card-vehiculos-seguros.jpg")} alt="" />
</div>
  )
  

  }

  
