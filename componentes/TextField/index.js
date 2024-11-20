import styles from './TextField.module.css'

const TextField = (props) => {

    const byTyping = (event) => {
        props.byChanging(event.target.value);
    }

    const stringOnInvalid = `this.setCustomValidity('${props.onInvalid}')`;

    return (
        <div className={styles.textField}>
            <label>{props.label}</label>
            <input required={props.required} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={byTyping}
                disabled={props.disabled}
                step={props.step}
                type={props.type}
                pattern={props.pattern}
             />
        </div>
    )
}
 
export default TextField