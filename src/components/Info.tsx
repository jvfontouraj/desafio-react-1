import styles from './Info.module.css'

export function Info(){
    return(
        <div className={styles.info}>
            <div className={styles.created}>
                <p>Tarefas criadas</p>
                <span>0</span>
            </div>
            <div className={styles.done}>
                <p>Concluídas</p>
                <span>0</span>
            </div>
        </div>
    )
}