import styles from './DropDownListSelect.module.css'

const DropDownListSelect = (props) =>{
    return (
        <div className={styles.dropDownListSelect}>
            <label>{props.label}</label>
            <select required={props.required} 
                value={props.value} 
                onChange={event => props.byChanging(event.target.value)}>
                {
                
                props.itens.map(item => {
                    return <option key={item} >{item}</option>
                })
                
                //props.itens.map(item => <option key={item}>{item}</option>)
                
                }
            </select>
        </div>
    )
}

export default DropDownListSelect