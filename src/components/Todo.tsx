import styles from './Todo.module.css'
import { Clipboard, PlusCircle } from 'phosphor-react'
import { ChangeEvent ,FormEvent, InvalidEvent, useState } from 'react'
import { Task } from './Task'

export function Todo(){

    const [tasks, setTasks] = useState(Array<string>)

    const [newTaskText, setNewTaskText] = useState('')

    const [doneTasks, setDoneTasks] = useState(0)

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
  
        setTasks([...tasks, newTaskText])
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }
    
    function deleteTask(taskToDelete: string){
        const tasksWithoutDeletedOne = tasks.filter(task =>{
            return task !== taskToDelete
        })

        setTasks(tasksWithoutDeletedOne)
    }

    function handleToggleCheck(isChecked: boolean){
        isChecked ? setDoneTasks(doneTasks + 1) : setDoneTasks(doneTasks - 1)
    }

    return(
        <div>
            <div>
                <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <input
                    type="text"
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
                        <span>{tasks.length === 0 ? 0 : (`${doneTasks} de ${tasks.length}`)}</span>
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
                            onToggleCheck={handleToggleCheck}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}
