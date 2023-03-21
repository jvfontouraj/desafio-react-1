import styles from './List.module.css'
import { Task } from './Task'

export function List(){
    return(
        <div className={styles.list}>
            <Task/>
        </div>
    )
}