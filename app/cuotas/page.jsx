"use client"

import { useRouter } from "next/router"
import Naves from "../Naves"
import "../vehiculo.css"
import "./cuotas.css"
import {useState} from "react";

export default function ({ oferta, fecha, input }) {
  const [plazoGraciaParcial, setPlazoGraciaParcial] = useState('');
  const [plazoGraciaTotal, setPlazoGraciaTotal] = useState('');

  const handleGraciaParcialChange = (e) => {
    setPlazoGraciaParcial(e.target.value);
    if (e.target.value) {
      setPlazoGraciaTotal('');
    }
  };

  const handleGraciaTotalChange = (e) => {
    setPlazoGraciaTotal(e.target.value);
    if (e.target.value) {
      setPlazoGraciaParcial('');
    }
  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Acceder a los valores de manera segura
    const moneda = e.target.querySelector('#moneda')?.value || '';
    const plazosGraciaTotal = parseInt(e.target.querySelector('#plazosGraciaTotal')?.value) || 0;
    const plazoGraciaParcial = parseInt(e.target.querySelector('#plazoGraciaParcial')?.value) || 0;
    const ingresoMensual = parseInt(e.target.querySelector('#ingresoMensual')?.value) || 0;
    const precioVehiculo = parseInt(e.target.querySelector('#precioVehiculo')?.value) || 0;
    const porcentajeCuotaInicial = parseFloat(e.target.querySelector('#porcentajeCuotaInicial')?.value) || 0.0;
    const plazo = parseInt(e.target.querySelector('#plazo')?.value) || 0;
    const tea = parseFloat(e.target.querySelector('#tea')?.value) || 0.0;
    const cok = parseFloat(e.target.querySelector('#cok')?.value) || 0.0;
    const seguroVehicularAnual = parseFloat(e.target.querySelector('#seguroVehicularAnual')?.value) || 0.0;

    const initialQuota =precioVehiculo - ((porcentajeCuotaInicial / 100) * precioVehiculo);

    // Validate the initial quota
    if (initialQuota < 15000) {
      alert('La cuota inicial calculada debe ser mayor o igual a 15000.');
      return; // Stop the form submission
    }
    console.log("Valores:", {
      moneda,
      plazosGraciaTotal,
      plazoGraciaParcial,
      ingresoMensual,
      precioVehiculo,
      porcentajeCuotaInicial: initialQuota,
      plazo,
      tea,
      cok,
      seguroVehicularAnual,
    });

    const respuesta = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        moneda,
        plazosGraciaTotal,
        plazoGraciaParcial,
        ingresoMensual,
        precioVehiculo,
        porcentajeCuotaInicial,
        plazo,
        tea,
        cok,
        seguroVehicularAnual,


      }),


      headers: {
        'Content-Type': 'application/json'
      }
    });

    try {
      const res = await fetch("https://finalfinanzas-production.up.railway.app/ofertas/registrar", {
        method: "POST",
        body: JSON.stringify({
          moneda,
          plazosGraciaTotal,
          plazoGraciaParcial,
          ingresoMensual,
          precioVehiculo,
          porcentajeCuotaInicial,
          plazo,
          tea,
          cok,
          seguroVehicularAnual,


        }),


        headers: {
          'Content-Type': 'application/json'
        }
      });


      if (res.ok) {
        // Usuario registrado correctamente, redirige a la página "/cotiza"
        //router.push("/cronogramapagos");
        alert("Registro exitoso")
      } else {
        // Puedes manejar el caso en que la respuesta no sea exitosa, por ejemplo, mostrar un mensaje de error.
        console.error("Error al registrar datos", res.status);
        alert("Error al registrar datos")
      }

      console.log(res);


    } catch (error) {
      console.error("Error al registrar datos", error);
      alert("Error al registrar datos")
    }


    const dato = await respuesta.json();
    console.log(dato);
    // router.push("/cronograma");

    if (res.ok) {
      // Usuario registrado correctamente, redirige a la página "/cotiza"
      router.push("/cronogramaPagos");
    } else {
      // Puedes manejar el caso en que la respuesta no sea exitosa, por ejemplo, mostrar un mensaje de error.
      console.error("Error al registrar datos:", res.status);
    }


  }


  return (
      <div>
        <Naves></Naves>
        <form onSubmit={handleSubmit} className="wlw">
          <h2 className="subtittle">Somos tu mejor opción</h2>
          <div className="container">
            <div className="col">
              <label className="fechad">Moneda</label>
              <select id="moneda" className="inputtres">
                <option value="soles">Soles</option>
                <option value="dólares">Dólares</option>
              </select>

              <label className="fechad">Plazo de Gracia Parcial</label>
              <input
                  type="number"
                  className="check"
                  id="plazoGraciaParcial"
                  min="0"
                  max="3"
                  value={plazoGraciaParcial}
                  onChange={handleGraciaParcialChange}
                  disabled={plazoGraciaTotal !== ''}
              />

              <label className="fechad">Plazo de Gracia Total</label>
              <input
                  type="number"
                  className="check"
                  id="plazoGraciaTotal"
                  min="0"
                  max="3"
                  value={plazoGraciaTotal}
                  onChange={handleGraciaTotalChange}
                  disabled={plazoGraciaParcial !== ''}
              />

              <label className="fechad">Ingreso Mensual</label>
              <input type="number" className="check" id="ingresoMensual" min="1500" max="100000"/>
            </div>
            <div className="col">
              <label className="fechad">Precio de Vehículo</label>
              <input type="number" className="number" id="precioVehiculo" min="15000" max="999999"/>





              <label className="fechad">Porcentaje de Cuota Inicial</label>
              <div className="input-percentage-wrapper">
                <input
                    type="number"
                    className="check"
                    id="porcentajeCuotaInicial"
                    step="0.01"
                    min="0"
                    max="40"
                />
                <span className="percentage-sign">%</span>
              </div>
              <label className="fechad">Plazo</label>
              <select id="plazo" className="check">
                <option value="24">24</option>
                <option value="36">36</option>
              </select>

              <label className="fechad">TEA</label>
              <input type="number" className="number2" step="0.01" id="tea" min="8.49" max="22.26"/>
            </div>
            <div className="col">
              <label className="fechad">Seguro Vehicular Anual</label>
              <input type="number" className="numbe" step="0.01" min="3.89" max="8.84" id="seguroVehicularAnual"/>

              <label className="fechad">COK</label>
              <input type="number" step="0.01" className="numbe-tres" id="cok" min="0" max="1"/>
            </div>
          </div>

          <button className="cotizalo">Calcular</button>

          <div id="error">
            {/* Mensajes de error si los hay */}
          </div>

          <button className="cotizar">
            <a href="/cronogramapagos" className="btn-flotante">Ver Cronograma</a>
          </button>
        </form>
      </div>
  );
}
