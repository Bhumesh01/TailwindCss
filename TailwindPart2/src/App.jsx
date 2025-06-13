import { useState } from 'react'
import './App.css'
import SidebarClass1 from './components/1-basic-project'
function App() {
  return (
    <>
      <div className='h-screen bg-white text-black dark:bg-black dark:text-white'>
        <button className='border border-black dark:border-white' onClick={()=>{document.querySelector('html').classList.toggle("dark", document.querySelector("html").classList[0]=="dark"?false:true)}}>Toggle Theme</button>
        {/* <SidebarClass1></SidebarClass1> */}
      </div>
    </>
  )
}

export default App
