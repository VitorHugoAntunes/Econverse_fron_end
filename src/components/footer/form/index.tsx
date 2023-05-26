import styles from "./styles.module.scss"

export default function Form() {
    return (
        <form action="" className={styles.formContainer}>
            <span>Cadastre-se e receba nossas <strong>novidades e promoções</strong></span>
            <label htmlFor="">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</label>

            <div>
                <input type="text" placeholder="SEU E-MAIL" />
                <button type="submit">OK</button>
            </div>
        </form>
    )
}