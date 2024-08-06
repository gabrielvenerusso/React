import {useState} from 'react';

const ManageData = () =>{
    let someData = 10;
    
    let [number, setNumber] = useState(12);

    return(
        <div>
            <div>
                <p>Valor : {someData}</p>
                <button onClick ={() => someData = 15}>Mudar valor</button>
            </div>
            <div>
                <p>Valor : {number}</p>
                <button onClick ={() => setNumber(14)}>Mudar valor</button>
            </div>
        </div>        
    );
};

export default ManageData;