import { useEffect, useState } from 'react'
import './App.css'

// Custom Hook for Media Query
const useMediaQuery = (query)=>{
  const [matches, setMatches] = useState(false);
  useEffect(()=>{
    const media = window.matchMedia(query);
    if(media.matches !== matches){
      setMatches(media.matches);
    }
    const Listener = ()=> setMatches(media.matches);
    media.addListener(Listener);
    return()=>media.removeListener(Listener);
  },[matches, query]);
  return matches;
};

function App() {
  const[sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  useEffect(()=>{
    if(isDesktop == false){
      setSidebarOpen(false);
    }
    else{
      setSidebarOpen(true);
    }
  }, [isDesktop]);
  return (
    <>
      <div className='h-screen bg-white text-black dark:bg-black'>
        <div className='flex'>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
          <MainContent sidebarOpen={sidebarOpen}></MainContent>
        </div>
      </div>
    </>
  )
}
function MainContent(){
  return(
    <div className='w-full min-w-md'>
      <div className='bg-red-500 sm:h-40 h-48 text-center text-5xl font-bold'><h1>Welcome To My website</h1><button className='border border-black dark:border-white mx-auto block p-2 rounded-xl mt-2 text-[20px]' onClick={()=>{document.querySelector('html').classList.toggle("dark", document.querySelector("html").classList[0]=="dark"?false:true)}}>Toggle Theme</button>
        <br /></div>
      <div className='grid grid-cols-12 gap-2 m-1'>
        <div className='h-96 border-2 rounded-2xl bg-red-200 col-span-11 sm:col-span-3 -translate-y-5 shadow-lg shadow-pink-500/50'></div>
        <div className='h-96 border-2 rounded-2xl bg-green-200 col-span-11 sm:col-span-5 shadow-lg shadow-blue-500/50'></div>
        <div className='h-96 border-2 rounded-2xl bg-yellow-200 col-span-11 sm:col-span-4 shadow-lg shadow-orange-500/50'></div>
      </div>
    </div>
  )
}
function Sidebar(props){
  const sidebarOpen = props.sidebarOpen;
  const setSidebarOpen = props.setSidebarOpen;
  return(
    <div className={`h-screen ${sidebarOpen?'w-64':'w-16'} bg-red-100`}>
      {sidebarOpen?
      <div className='fixed top-0 left-0 md:relative'>
        <button className='transition-all duration-300 ease-in-out
 hover:bg-pink-300 cursor-pointer text-2xl border border-pink-500 p-2 block rounded-xl' onClick={()=>{setSidebarOpen(prev=>!prev)}}>☰</button>
        <div className='grid grid-rows-5 gap-5'>
          <h1>HOME</h1>
          <h1>REVIEWS</h1>
          <h1>ABOUT</h1>
          <h1>COURSES</h1>
          <h1>MY PURCHASES</h1>
        </div>
        </div>: 
        <div className='fixed top-0 left-0'><button className='transition-all duration-300 ease-in-out
 hover:bg-pink-300 cursor-pointer text-3xl border border-pink-500 p-2 block rounded-xl' onClick={()=>{setSidebarOpen(prev=>!prev)}}>☰</button></div>}
    </div>
  )
}

export default App
