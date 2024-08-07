import {useState} from 'react';

const CarDetails = ({brand, km, color, newCar}) => {
  const [x] = useState(newCar);

  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {x && <li> Novo carro: sim</li>}
            {!x && <li> Novo carro: não</li>}
        </ul>
    </div>
  );
};

export default CarDetails;