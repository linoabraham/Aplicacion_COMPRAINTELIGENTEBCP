import "./cotiza.css"
import Naves from "../Naves"
import "../vehiculo.css"
// import Conex from "./conex"

export default function page({data}) {
  return (
    <div>
      <Naves></Naves>
      <div>
        <div className="general">
          <h1 className="titulo">Por que lo hacemos pensando en ti</h1>
          <p className="parrafo">Estas muy cerca de obtener tu prestamo solo unos pasos mas.</p>
          <div className="grid">
            <div className="fila aaa"><h2>Saca tu credito vehicular </h2><span className="sol"></span></div>
            <div className="fila"></div>
             {/* <Conex>
                  {
                   data.map(({id,nombre})=>{
                    <div key={id}>
                      <h1>{nombre}</h1>
                    </div>
                   })
                  }
                  </Conex> */}
            <div className="fila bbb"><h2>Lo mejor para ti</h2></div>
            <div className="fila"></div>
          </div>
          <div className="imagen">
            <img  src="	https://ventasonline.pacifico.com.pe/seguro-vehicular/assets/pareja-abrazo.4f70a10a.webp" alt="imagen" />
          </div>
          <div className="contbo">

           <button className="boton aa">
                    <a href="/ver" class="btn-flotante">Solicitar Credito</a>
           </button>         
          
          </div>
        </div>
      </div>
    </div>
  )
}
// export async function getStaticProp(){
//   try {
//      const res = await fetch("http://localhost:8080/api/v1/clientes");
//      const data = await await res.json()
//      return{
//       props:{data}
//      }
     

//   } catch (error) {
//     console.log(error)
    
//   }
// }


