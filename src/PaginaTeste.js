import React, {useState} from 'react';

function App(){

    const [teste, setTeste] = useState(0);

    function cont(){
        setTeste(teste + 1)
    }

    return(
        <>
        <h1>Aperte o botão</h1>

        <button onClick={cont}>
                só vai
        </button>

        <h1>Vai: {teste}</h1>

        </>
    )
}

export default App;