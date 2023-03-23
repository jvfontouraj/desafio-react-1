import styles from './Task.module.css'
import {Trash, Check} from "phosphor-react"
import { useState } from 'react';

interface TaskProps{
    content: string;
    onDeleteTask: (deleteTask: string) => void;
}


export function Task({content, onDeleteTask}: TaskProps){

    function handleDeleteTask(){
        onDeleteTask(content)
    }

    const [checkClassName, setCheckClassName] = useState(true)

    function handleDisableCheck(){
        setCheckClassName(state => !state);
    }  

    return(
        <div>
            <div className={styles.taskUnchecked}>
                <button 
                    onClick={handleDisableCheck} 
                    className={checkClassName ? styles.checkOff : styles.checkOn}
                >
                    <Check className={styles.check}/>
                </button>
                <p className={checkClassName ? styles.taskTextDefault : styles.taskTextDone}>
                    {content}
                </p>
                <button onClick={handleDeleteTask} className={styles.trashButton}>
                    <Trash className={styles.trash}/>
                </button>
            </div>
        </div>
    )
}