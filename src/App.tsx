import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { NewTask } from './components/NewTask'
import './global.css'

const tasks = [
  {
    id: 1,
    content:" ",

  }
]

export function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <NewTask/>
      </div>
      <div>
        <Tasks/>
      </div>
      <main>
        {tasks.map(task =>{
          return <Tasks/>
        })}
      </main>
    </div>
  )
}