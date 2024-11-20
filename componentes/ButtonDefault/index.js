import styles from './ButtonDefauld.module.css'

const ButtonDefault = (props) => {
    return (
        <button className={styles.buttonDefault}>
            {props.children}
        </button>
    )
}

export default ButtonDefault