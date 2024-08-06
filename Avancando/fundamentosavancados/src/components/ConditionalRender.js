import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState("Matias")

    return (
        <div>
            <h1>Exibir?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Se x for false, não!</p>}
            <h1>If ternário</h1>
            {name === "João"?(
                <div> 
                    <p>O nome é João.</p>
                </div>    
            ) : (
                <div> 
                    <p>O nome não é João.</p>
                </div>  
        )}
        <button onClick={() => setName("João")}>Mudar nome</button>
        </div>
    );
};

export default ConditionalRender;