import './App.css'
import Header from './components/Header/Header'
import {
  useLoaderData,
} from "react-router-dom";



function App() {
  let data = useLoaderData()
  console.log(data);

  return (
    <div className="App">
      <Header></Header>
    </div>
  )
}




export default App
