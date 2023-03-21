import styles from './Empty.module.css'

export function Empty(){
    return(
        <div className={styles.empty}>
            <img src="./src/assets/Clipboard.svg"/>
            <p className={styles.boldPar}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.regularPar}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}