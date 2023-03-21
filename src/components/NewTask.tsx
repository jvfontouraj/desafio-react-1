import {PlusCircle} from "phosphor-react"
import styles from './NewTask.module.css'

export function NewTask(){
  return(
    <div className={styles.newTask}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button className={styles.createButton}>
        <span>Criar</span>
        <PlusCircle className={styles.plus}/>
      </button>
    </div>
  )
}