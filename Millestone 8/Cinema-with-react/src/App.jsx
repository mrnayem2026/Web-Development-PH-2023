import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SideBar from './components/SideBar/SideBar'



function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className='container mx-auto grid grid-cols-12'>
        <div className='col-span-10'>
          <Main></Main>
        </div>
        <div className='col-span-2'>
         <SideBar></SideBar>
        </div>
      </div>
    </div>
  )
}




export default App
