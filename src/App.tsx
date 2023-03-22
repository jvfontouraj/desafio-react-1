import { Header } from './components/Header'
import { Todo } from './components/Todo'
import './global.css'

export function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Todo/>
      </div>
    </div>
  )
}