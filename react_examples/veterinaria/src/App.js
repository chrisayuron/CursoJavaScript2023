// import logo from './logo.svg';
import './App.css';
import personas from './personas.js';
import mascotas from './mascotas.js';
// componente persona

const Personas=()=>{
    return (
      personas.map(persona=>(
        <div className="card persona text-bg-info mb-3">
          <h2 class="card-header text-center">ID: {persona.id}</h2>
       <div className="card-body">
            <h5 className="card-title">DATOS</h5>
              <p className="card-text">Nombre: {persona.nombre}</p>
              <p className="card-text">Edad: {persona.edad}</p>
              <p className="card-text">Cant. Mascotas: {persona.numeroMascotas}</p>
        <a href="#" className="btn btn-dark">Ver</a>
      </div>
    </div>
      )
    )
  )
};
      
const Mascotas=()=>{
  return (
    mascotas.map(mascota=>(
      <div className="card persona text-bg-dark mb-3">
          <h2 class="card-header text-center">ID: {mascota.id}</h2>
       <div className="card-body">
            <h5 className="card-title">DATOS</h5>
              <p className="card-text">Id dueño: {mascota.idDueno}</p>
              <p className="card-text">Nombre: {mascota.nombre}</p>
              <p className="card-text">Edad: {mascota.edad}</p>
              <p className="card-text">Especie: {mascota.especie}</p>
              <p className="card-text">Sexo: {mascota.sexo}</p>
              
        <a href="#" className="btn btn-dark">Ver</a>
      </div>
    </div>
      
      // <div className='mascota'>
      // <h2>ID: {mascota.id}</h2>  
      // <p>Id Dueno: {mascota.idDueno}</p>  
      // <p>Nombre: {mascota.nombre}</p>  
      // <p>Edad: {mascota.edad}</p>
      // <p>Especie: {mascota.especie}</p>
      // <p>Sexo: {mascota.especie}</p>
      // </div>
    )
  )
)
};
    

    



//componeten mascota
// const mascotas(){};
function App() {
  return (
    <div className="App">
     <h1 className='my-3'>VETERINARIA</h1> 
     <h2 className='my-3'>PERSONAS</h2>
     <div className='lista'>
     <Personas></Personas>
     </div>
      <h2 className='my-3'>MASCOTAS</h2>
      <div className='lista'>
      <Mascotas></Mascotas>
      </div>
      
    </div>
  );
}

export default App;
