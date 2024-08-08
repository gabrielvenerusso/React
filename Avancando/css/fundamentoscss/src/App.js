import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent/>
      <p>Este está no app.js</p>
      <p style={{color: "blue", padding: "25px"}}>Estilizado em forma inline</p>
    </div>
  );
}

export default App;
