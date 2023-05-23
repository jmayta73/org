import "./ListaOpciones.css"
import "../../App.js"
const ListaOpciones =(props) =>{
    const placeholderModificado = `${props.placeholder}...`
    
    //Metodo map -> arreglo.map ( (equipo,index) => {
    // return 
   // })
    const equipos =[

        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden > Seleeccionar equipo </option>
            {props.equipos.map( (equipo, index)=> <option key={index} value={equipo}>{`${equipo}`}</option>)}

            {/*//Estas es otra forma clasica
            {equipos.map( (equip, index)=>{
                 return <option key={index}>{`${equip}`}</option>   

            })}*/}


            {/*<option>Programación</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>Ux y Diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option>*/}
        </select>
    </div>
}
export default ListaOpciones