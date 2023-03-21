import styles from './NewTask.module.css'

export function NewTask(){
  return(
    <div className={styles.newTask}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button>
        <span>Criar +</span>
      </button>
    </div>
  )
}