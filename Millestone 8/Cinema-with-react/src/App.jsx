import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SideBar from './components/SideBar/SideBar'



function App() {

  const [watchTime,setWatchTime] = useState('');

  const handleWatchTime =(props)=>{
    setWatchTime(props);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='container mx-auto grid grid-cols-12'>
        <div className='col-span-8'>
          <Main handleWatchTime={handleWatchTime}></Main>
        </div>
        <div className='col-span-4'>
         <SideBar watchTime={watchTime}></SideBar>
        </div>
      </div>
    </div>
  )
}




export default App
