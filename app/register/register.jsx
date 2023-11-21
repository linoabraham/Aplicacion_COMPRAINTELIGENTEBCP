// Registro.js
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import "./registro.css"

const RegistroComponent = () => {
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://finalfinanzas-production.up.railway.app/usuarios", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        // Usuario registrado correctamente, redirige a la página "/cotiza"
        router.push("/logeo");
      } else {
        // Puedes manejar el caso en que la respuesta no sea exitosa, por ejemplo, mostrar un mensaje de error.
        console.error("Error al registrar usuario:", res.status);
      }

      console.log(res);


    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }


    
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroComponent;
