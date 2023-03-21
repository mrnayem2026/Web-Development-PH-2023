import './App.css'
import {HelloNayem,BookName} from './commponent/helloNamey'
import { IncrementNumber } from './commponent/State'
import { User } from './commponent/JosnExplor'
import TodoApp from './commponent/TodoApp'
import { TodoList } from './commponent/TodoList'

function App() {

  return (
    <div className="App">
      {/* <HelloNayem name="Mostafizur Rahman Nayem" village="Dotterabad" postOffice="Dotterabad" polliceOffice="Agulzhara" distric="Barishal"></HelloNayem>
      <HelloNayem name="Mohammad Najim" village="Dotterabad" postOffice="Dotterabad" polliceOffice="Agulzhara" distric="Barishal"></HelloNayem>
      <BookName ></BookName> */}

      {/* <h1>Increment  Number is blow</h1>
      <IncrementNumber></IncrementNumber> */}

      {/* <User></User> */}
      {/* <TodoApp></TodoApp> */}
      <TodoList></TodoList>
    </div>
  )
}




export default App
