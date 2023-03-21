import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { NewTask } from './components/NewTask'

import './global.css'

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
    </div>
  )
}