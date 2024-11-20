import { useState } from 'react'
import Banner from "../componentes/Banner";
import Form from "../componentes/Form";

function Home(){
    return (
        <div>
            <Banner />
            <Form  Title="Calculadora de juros ao ano."/>
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