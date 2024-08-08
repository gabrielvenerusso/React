import logo from './logo.svg';
import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{name: "Josias", email:"josias@gmail.com"}}/>
    </div>
  );
}

export default App;
