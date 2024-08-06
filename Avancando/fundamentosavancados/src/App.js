import './App.css';
import Lua from "./assets/preview.gif";
import MudarBotao from "./components/ManageData"

function App() {
  return (
    <div className="App">
      <div>
        <img src={Lua}/>
        <MudarBotao/>
      </div>       
    </div>
  );
}

export default App;
