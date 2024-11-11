import { useState } from 'react'
import Banner from "../componentes/Banner";

function Home(){
    return (
        <div>
            <Banner />
        </div>
    ) 
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>

    )
}

export default Home