import styles from './Task.module.css'
import {Trash, Check} from "phosphor-react"

interface TaskProps{
    content?: string;
}

export function Task({content}: TaskProps){
    return(
        <div>
            <div className={styles.taskUnchecked}>
                <div className={styles.checkOff}>
                    <Check className={styles.check}/>
                </div>
                <p className={styles.taskTextDefault}>
                    {content}
                </p>
                <div className={styles.trashDiv}>
                    <Trash className={styles.trash}/>
                </div>
            </div>
            <div className={styles.taskChecked}>
                <div className={styles.checkOn}>
                    <Check className={styles.check}/>
                </div>
                <p className={styles.taskTextDone}>
                    {content}
                </p>
                <div className={styles.trashDiv}>
                    <Trash className={styles.trash}/>
                </div>
            </div>
        </div>
    )
}