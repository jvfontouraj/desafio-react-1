import styles from './Todo.module.css'
import { Clipboard, PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Task } from './Task'

export function Todo(){

    const [tasks, setTasks] = useState([])

    const [newTaskText, setNewTaskText] = useState('')

    console.log(newTaskText)

    function handleCreateNewTask(){
        event.preventDefault()
  
        const newTaskText = event.target.task.value

        setTasks([...tasks, newTaskText])
        setNewTaskText('')
    }

    function handleNewTaskChange(){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleNewTaskInvalid(){
        event.target.setCustomValidity('Essecampo é obrigatório!')
    }
    
    function deleteTask(taskToDelete: string){
        const tasksWithoutDeletedOne = tasks.filter(task =>{
            return task !== taskToDelete
        })

        setTasks(tasksWithoutDeletedOne)
    }

    return(
        <div>
            <div>
                <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <textarea
                    name='task'
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button 
                    disabled={newTaskText.length === 0} 
                    type="submit" 
                    className={styles.createButton}
                >
                    <span>Criar</span>
                    <PlusCircle className={styles.plus}/>
                </button>
                </form>
            </div>

            <div className={styles.tasks}>
                <div className={styles.info}>
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>{tasks.length}</span>
                    </div>
                    <div className={styles.done}>
                        <p>Concluídas</p>
                        <span>{tasks.length === 0 ? 0 : ('1 de ' + tasks.length)}</span>
                    </div>
                </div>

                <div className={tasks.length === 0 ? styles.empty : styles.displayNone}>
                    <Clipboard className={styles.clipboard}/>
                    <p className={styles.boldPar}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.regularPar}>Crie tarefas e organize seus itens a fazer</p>
                </div>

                <div className={styles.list}>
                    {tasks.map(task =>{
                        return <Task
                            content={task}
                            key={task}
                            onDeleteTask={deleteTask}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}