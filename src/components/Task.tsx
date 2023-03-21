import styles from './Task.module.css'
 import {Trash} from "phosphor-react"

export function Task(){
    return(
        <div>
            <div className={styles.taskUnchecked}>
                <div className={styles.checkOff}>
                    <img src="./src/assets/Check.svg"/>
                </div>
                <p className={styles.taskTextDefault}>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </p>
                <div className={styles.trashDiv}>
                    <Trash className={styles.trash}/>
                </div>
            </div>
            <div className={styles.taskChecked}>
                <div className={styles.checkOn}>
                    <img src="./src/assets/Check.svg"/>
                </div>
                <p className={styles.taskTextDone}>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </p>
                <div className={styles.trashDiv}>
                    <Trash className={styles.trash}/>
                </div>
            </div>
        </div>
    )
}