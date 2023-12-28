import styles from './Input.module.scss'

type PropsTypes = {
    label?: string; 
    name?: string; 
    type?: string; 
    placeholder?: string;
}
const Input = (props: PropsTypes) => {
    const {label, name, type, placeholder} = props;
    return (
        <div className={styles.container}>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                name={name}
                id={name}
                className={styles.container__input}
                type={type}
                placeholder={placeholder}
                autoComplete='off'
            />
        </div>
    )
}

export default Input;