import { useState } from "react"
import "./MiOrg.css"


const MiOrg =(props) => {

    console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
     //   console.log("Mostrar/Oculatr elemento", !mostrar)
      //  actualizarMostrar(!mostrar)
    //}
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>

    
}
export default MiOrg