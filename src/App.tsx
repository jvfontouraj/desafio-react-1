import { Header } from './components/Header'
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
    </div>
  )
}