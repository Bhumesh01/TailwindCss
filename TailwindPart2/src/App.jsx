import { useState } from 'react'
import './App.css'
import SidebarClass1 from './components/1-basic-project'
function App() {
  const [darkMode, setdarkMode]= useState(false);
  return (
    <>
      <div className={`h-screen ${darkMode?'bg-black text-white': 'bg-white text-lack'}`}>
        <button className={`border ${darkMode?'border-white': 'border-black'} p-2 m-1 rounded-xl`} onClick={()=>setdarkMode(prev=>!prev)}>Change Mode ☀︎</button>
        {/* <SidebarClass1></SidebarClass1> */}
      </div>
    </>
  )
}

export default App
