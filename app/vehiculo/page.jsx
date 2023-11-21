import "../vehiculo.css"
import Naves from "../Naves"
export default function Page({ children, nombre }) {
  return (
    <div>
      <Naves></Naves>
         <section className="secion">
            <h1 className="h1">{nombre}</h1>
            <p className="p">Ingresa tus datos y nos pondremos en contacto con tigo</p>
               <div className="divs">
                <div className="requisito">
                    <label htmlFor="" className="label">Fecha de desembolso</label>
                    <input type="date" className="date"/>
                    <label htmlFor="" className="soles">Preferencia</label>
                <select name="select" className="select">
                  <option value="value1" className="opcion">Soles</option>
                     <option value="value2" selected>Dolares</option>
                </select> 
                <a href="#" className="credito">Obtener Credito</a>
                </div>
                <img src="https://ventasonline.pacifico.com.pe/seguro-vehicular/assets/banner.9c31c9b6.png" alt="vehiculo" className="feliz" />
               </div>
         </section>
    </div>
  )
}

Page.defaultProps ={
    nombre : "Obten tu prestamo al instante!"
};
