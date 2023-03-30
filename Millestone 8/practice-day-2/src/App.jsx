import './App.css'
import Header from './components/Header/Header'
import LeftSide from './components/LeftSide/LeftSide'
import MealCard from './components/MealCard/MealCard'



function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className='container mx-auto grid  grid-cols-12'>
        <div className='col-span-12 flex gap-10'>
          <MealCard></MealCard>
        </div>
        {/* <div  className='col-span-2'>
          <LeftSide></LeftSide>
        </div> */}
      </div>
    </div>
  )
}




export default App
