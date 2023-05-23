import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
const Equipo = (props) => {
        //Destructuracion 
        const {colorPrimario, colorSecundario, titulo, id } = props.datos
        const {colaboradores, eliminarColaborador, cambioColor, like} = props
        var obj = { backgroundColor: hexToRgba( colorPrimario,0.2) }
        
        const estiloTitulo = {borderColor:colorPrimario}
        
    return <>
        {
        colaboradores.length >0 && 
        <section className="equipo" style={obj}>
            <input 
                type='color'          
                className="input-color"
                value={colorPrimario}
                onChange={(evento) => {
                cambioColor(evento.target.value, id)
                }}
            
            
            />
            

        <h3 style={estiloTitulo} >{titulo}</h3>
    
        <div className="colaboradores">
            
            {
                colaboradores.map((colaborador,index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario} 
                colorSecundario={colorSecundario}
                eliminarColaborador={eliminarColaborador}
                cambioColor={cambioColor}
                like={like}
                /> )
            }

        </div>

     </section>
    }
    </>
}


export default Equipo