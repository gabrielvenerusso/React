import "./GameOver.css"

const GameOver = ({retry}) => {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  );
};

export default GameOver;