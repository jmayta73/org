import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
//Estado - hooks
//useState
//const [nombreVariable,funcionActualiza] = useState(valorInicial)
function App() {
    const [mostrarFormulario, actualizarMostrar] = useState(false)
    const [colaboradores, actualizarColaboradores] = useState([
      {
        id: uuid(),
        equipo: "Front End",
        foto: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        puesto: "Instructor",
        fav: true
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/genesysaluralatam.png",
        nombre: "Genesys Rondón",
        puesto: "Desarrolladora de software e instructora",
        fav: false
      },
      {
        id: uuid(),
        equipo: "UX y Diseño",
        foto: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        puesto: "Instructora en Alura Latam",
        fav: false
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/christianpva.png",
        nombre: "Christian Velasco",
        puesto: "Head de Alura e Instructor",
        fav: true
      },
      {
        id: uuid(),
        equipo: "Innovación y Gestión",
        foto: "https://github.com/JoseDarioGonzalezCha.png",
        nombre: "Jose Gonzalez",
        puesto: "Dev FullStack",
        fav: true
      }
           
    

    ])

    const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    
   
  
])
  
    //Ternario --> condicion? seMuestra : noSemuestra
  const cambiarMostrar = () => {
      actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log ("nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
//Actualizar  color de equipo
  const cambioColor = (color, id)=> {
  console.log("Cambio de color", color, id)
  const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
          equipo.colorPrimario = color

      }
      return equipo
  })  
  actualizarEquipos(equiposActualizados)
}

//crear equipo
const crearEquipo = (nuevoEquipo) =>{
   console.log("EQUIPO, ", nuevoEquipo)
   //...equipos, es sacar una copia de lo que contiene equipos//
  //{} con esto se agrega un nuevo objeto a la copia de datso de equipos//
  //el nuevo objeto a agregar ...nuevoEquipo, es una copia de los datos que contiene de nuevoEquipo//
  //ademas de que antes de agregar los datos con la copia de ...nuevoEquipo, le adiciona el id: uuid()//

   actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

//funcion para actualizacion los favoritos
const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if (colaborador.id === id) {
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)

}


  return (
    <div className="App">
      
      <Header />

      {/*mostrarFormulario === true ?  <Formulario /> : <></>
      otra forma de ocultar y visualizar*/}
      
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          
        />
      }

      <MiOrg cambiarMostrar= {cambiarMostrar} />
      {/**creacion de equipos */}
      {
        equipos.map( (equipo) =>  <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador =>colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador} 
        cambioColor={cambioColor}
        like={like}

        />
        )
      }
      <Footer />
      
    </div>
  );
}

export default App;
