import styles from './Empty.module.css'
import {Clipboard} from "phosphor-react"


export function Empty(){
    return(
        <div className={styles.empty}>
            <Clipboard className={styles.clipboard}/>
            <p className={styles.boldPar}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.regularPar}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}