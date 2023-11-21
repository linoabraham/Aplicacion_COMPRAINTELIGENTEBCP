"use client"
// En tu página de CronogramaPage.js

import React, { useState, useEffect } from "react";
import CronogramaTable from "./Crono"; // Asegúrate de que la ruta sea correcta
import "./cronomodule.css";

const CronogramaPage = () => {
  const [ultimoRegistro, setUltimoRegistro] = useState(null);
  const [van, setVan] = useState(null);
  const [tir, setTir] = useState(null);

  useEffect(() => {
    const obtenerDatosDeLaApi = async () => {
      try {
        const response = await fetch("https://finalfinanzas-production.up.railway.app/ofertas");
        const datos = await response.json();

        // Obtén el último registro de la lista de ofertas
        const ultimoRegistro = datos[datos.length - 1];

        if (ultimoRegistro) {
          setUltimoRegistro(ultimoRegistro);

          // Obten los valores de VAN y TIR desde el último registro
          const vanResultado = ultimoRegistro.van; // Asegúrate de que la propiedad sea la correcta
          const tirResultado = ultimoRegistro.tir; // Asegúrate de que la propiedad sea la correcta

          setVan(vanResultado);
          setTir(tirResultado);
        } else {
          console.error("No se encontraron registros en la API.");
        }
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    obtenerDatosDeLaApi();
  }, []);

  return (
      <div>
        {ultimoRegistro ? (
            <CronogramaTable cronogramas={[ultimoRegistro.cuotas]} van={van} tir={tir} />
        ) : (
            <p>Cargando datos...</p>
        )}
      </div>
  );
};

export default CronogramaPage;
