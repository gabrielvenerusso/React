import './App.css';
import Lua from "./assets/preview.gif";
import MudarBotao from "./components/ManageData"
import Listas from "./components/ListRender"
import Render from "./components/ConditionalRender"
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Gabriel";
  return (
    <div className="App">
      <div>
        <img src={Lua}/>
        <MudarBotao/>
        <Listas/>
        <Render/>
        <ShowUserName name={name}/>
        <CarDetails brand="VW" km={1000} color="azul"/>
      </div>       
    </div>
  );
}

export default App;
