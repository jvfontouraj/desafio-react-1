import styles from './Todo.module.css'
import { Clipboard, PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Task } from './Task'

export function Todo(){

    const [tasks, setTasks] = useState([
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    ])

    const [newTasks, setNewTasks] = useState([])

    function handleCreateNewTask(){
      console.log('oi')
      event.preventDefault()
  
      setTasks([...tasks, tasks.length+1])
      // setNewTaskText('')
    }

    return(
        <div>
            <div>
                <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <textarea
                    name='task'
                    placeholder='Adicione uma nova tarefa'
                    
                />
                <button type="submit" className={styles.createButton}>
                    <span>Criar</span>
                    <PlusCircle className={styles.plus}/>
                </button>
                </form>
            </div>

            <div className={styles.tasks}>
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

                {/* <div className={styles.empty}>
                    <Clipboard className={styles.clipboard}/>
                    <p className={styles.boldPar}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.regularPar}>Crie tarefas e organize seus itens a fazer</p>
                </div> */}

                <div className={styles.list}>
                    {tasks.map(task =>{
                        return <Task
                        content={task}/>
                    })}
                </div>
            </div>
        </div>
    )
}