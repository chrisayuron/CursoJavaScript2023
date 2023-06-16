import React, { useState } from 'react';
import './App.css';
// Componente Pizza
const Pizza = ({ nombre, ingredientes, precio,foto }) => {
  const [cantidadRebanadas, setCantidadRebanadas] = useState(8);

  const comerRebanada = () => {
    if (cantidadRebanadas >1) {
      setCantidadRebanadas(cantidadRebanadas - 1);
    }else{
      setCantidadRebanadas("agotado");
    }
  };

  
  return (
    <div className='pizza'>
      <h2>{nombre}</h2>
      <img className='imagen' src={foto}/><br />
      <p>Ingredientes: {ingredientes}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad de rebanadas restantes: {cantidadRebanadas}</p>
      <button onClick={comerRebanada}>Comer una rebanada</button>
      
    </div>
  );
};

// Componente principal
const App = () => {
  return (
    <div>
      <h1>¡Bienvenido a nuestra pizzería!</h1>
      <Pizza nombre="Pizza de queso" ingredientes="Queso, salsa de tomate" precio={12} foto={"https://i-ticketing.iwos.com/256x256-th/products/90/products_90_2.jpg"}/>
      <Pizza nombre="Pizza de pepperoni" ingredientes="Queso, salsa de tomate, pepperoni" precio={14} foto={"https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG"}/>
      <Pizza nombre="Pizza Pollo y champiñon" ingredientes="Queso, pollo desmechado, champiñon en trozos" precio={15} foto={"https://poliradio.poligran.edu.co/wp-content/uploads//2021/08/La-Vera-Pizza-Pollo-champinones-256x256.jpg"}/>
      <Pizza nombre="Pizza Hawaiana" ingredientes="Queso, Piña, Jamón" precio={15} foto={"https://tofuu.getjusto.com/orioneat-prod-ss-upload/Gqx7gJyggfmS7snKfRop"}/>
      <Pizza nombre="Pizza Criolla" ingredientes="Queso, carne desmechada, maiz, maduro en trozos" precio={19} foto={"https://media-cdn.tripadvisor.com/media/photo-s/08/6f/dc/e4/pizza-criolla.jpg"}/>
    </div>
  );
};

export default App;


/// Ejercicio:
// con el objetivo de interactuar con el codigo base de este ejemplo, realizar las siguientes actividades
// 1) instanciar mas pizzas para el componente App, ejemplo: ; champiñones, pollo, carnes, etc etc..
// 2) agregar una funcionalidad, si las rebanadas son 0, agregar un menesaje de 'se acabo la pizza'
// 3) agregar un parametro adicional al compomente pizza, que permita renderizar una imagen de la pizza. 