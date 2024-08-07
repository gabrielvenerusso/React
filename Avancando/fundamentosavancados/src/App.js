import './App.css';
import {useState} from 'react';
import Lua from "./assets/preview.gif";
import MudarBotao from "./components/ManageData"
import Listas from "./components/ListRender"
import Render from "./components/ConditionalRender"
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {
  const name = "Gabriel";
  const cars = [
    {id:1, brand: "Ferrari", color: "Preto", newCar: true, km: 0},
    {id:2, brand: "Renault", color: "Vermelho", newCar: false, km: 321322},
    {id:3, brand: "Fiat", color: "Branco", newCar: false, km: 1320}
  ];

  function showMessage(){
    console.log("Executou");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  };

  return (
    <div className="App">
      <div>
        <img src={Lua}/>
        <MudarBotao/>
        <Listas/>
        <Render/>
        <ShowUserName name={name}/>
        <CarDetails brand="VW" km={1000} color="azul"/>

        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
        ))}
        <Fragment propFragment="Teste"/>

        <Container>
          <li>Agos</li>
          <li>Gabriel</li>
          <li>Maria</li>
        </Container>

        <ExecuteFunction myFunction={showMessage}/>

        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>       
    </div>
  );
};

export default App;
