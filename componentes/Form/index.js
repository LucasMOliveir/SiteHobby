import DropDownListSelect from "../DropDownListSelect"
import TextField from "../TextField"
import ButtonDefault from "../ButtonDefault"
import styles from './form.module.css'
import { useState } from "react"

const Form = (props) =>{

    const rateTypeOptions = [
        'Ao ano',
        'Ao mês',
        'Ao dia'
    ]

    const bySaving = (event) => {
        event.preventDefault();
        //console.log('Form was subimited');
        

        var rateTypeInNumber = 0;
        switch (rateType){
            case 'Ao ano':
                rateTypeInNumber = 365;
                break;
            case 'Ao mês':
                rateTypeInNumber = 30;
                break;
            case 'Ao dia':
                rateTypeInNumber = 1;
                break;
        }

        let montante = capital * (1 + rate /100) ** (term / rateTypeInNumber);
        console.log(montante);
        setcalcResult(montante.toFixed(2));
    }

    const [capital, setCapital] = useState('');
    const [rate, setRate] = useState('');
    const [term, setTerm] = useState('');
    const [rateType, setRateType] = useState('Ao ano');
    const [calcResult, setcalcResult] = useState('');

    return (
        <section className={styles.formTest}>
            <form onSubmit={bySaving}>
                <h2>{props.Title}</h2>

                {/* <DropDownListSelect
                    label="Tipo de juros"
                    itens={rateTypeOptions}
                    value={rateType}
                    byChanging={rateType => setRateType(rateType)} 
                /> */}

                <TextField 
                    label="Capital" 
                    required={true} 
                    placeholder="Digite um valor"
                    value= {capital} 
                    byChanging={capital => setCapital(capital)}
                    disabled={false}
                    step=".01"
                    type="text"
                    pattern="^\d+(\.\d+)?$"
                />

                <TextField 
                    label="Taxa"
                    required={true}
                    placeholder="Digite a taxa de juros"
                    value={rate}
                    byChanging={rate => setRate(rate)}
                    disabled={false}
                    step=".01"
                    type="text"
                    pattern="^\d+(\.\d+)?$"
                />

                <TextField 
                    label="Prazo em dias"
                    required={true}
                    placeholder="Digite o prazo em dias"
                    value={term}
                    byChanging={term => setTerm(term)}
                    disabled={false}
                    type="text"
                    step="1"
                    pattern="^[0-9]+$"
                />

                <TextField 
                    label="Resultado"
                    required={false}
                    placeholder="..."
                    value={calcResult}
                    byChanging={result => setcalcResult(result)}
                    disabled={true}
                />

                <ButtonDefault >
                    Calcular
                </ButtonDefault>
            </form>
        </section>
    )
}

export default Form