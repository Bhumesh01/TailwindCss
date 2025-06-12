import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center bg-screen'>
    {/* <div className='text-2xl text-center font-bold text-red-500'>WELCOME BACK!</div>
    <Test></Test> */}
    <Main></Main>
    </div>
  )
}
function Test(){
  return(
    <>
    {/** Flex Box */}
    {/* <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{padding: '5px', borderRadius: '2px',color: 'yellow',backgroundColor: 'green'}}>Hi there from <b>first</b> div</div>
      <div style={{padding: '5px', borderRadius: '2px',color: 'white',backgroundColor: 'red'}}>Hi there from <b>second</b> div</div>
      <div style={{padding: '5px', borderRadius: '2px',color: 'black',backgroundColor: 'pink'}}>Hi there from <b>third</b> div</div>
    </div> */}
    <div className='flex justify-around flex-wrap'>
      <div className='p-3 text-yellow-300 bg-green-600 rounded-xl'>Hi there from <b>first</b> div</div>
      <div className='p-3 text-white bg-red-600 rounded-xl'>Hi there from <b>second</b> div</div>
      <div className='p-3 text-black bg-pink-200 rounded-xl'>Hi there from <b>third</b> div</div>
    </div>
    <br/>
    {/** Grid */}
    <div className='grid grid-cols-12 gap-1.5'>
      <div className='col-span-5 rounded-2xl p-1 bg-green-200'>Hi there from <b>first</b> div</div>
      <div className='col-span-5 rounded-2xl p-1 bg-red-200'>Hi there from <b>second</b> grid</div>
      <div className='col-span-2 rounded-2xl p-1 bg-yellow-200'>Hi there from <b>third</b> div</div>
    </div>
    <br/>
    {/* Responsiveness and Mobile first tailwind classes */}
    <div className='md:bg-green-300 sm:bg-blue-400 bg-red-500 p-5 m-2 rounded-2xl text-center font-bold'>Hey There, Welcome!</div>
    <br/>
    {/* Use Case 1 */}
    <div className='grid grid-cols-12'>
      <div className='col-span-12 sm:col-span-5 rounded-2xl p-1 bg-blue-600 text-white'>Hi there from <b>first</b> div</div>
      <div className='col-span-12 sm:col-span-5 rounded-2xl p-1 bg-purple-500'>Hi there from <b>second</b> grid</div>
      <div className='col-span-12 sm:col-span-2 rounded-2xl p-1 bg-[#fdba74]'>Hi there from <b>third</b> div</div>
    </div>
    </>
  )
}
function Screen1(){
  const [clicked, setClicked] = useState(false);
  const inputElement = useRef();
  function buttonClicked(){
    if(inputElement.current.value){
      setClicked(prev=>true);
      setTimeout(() => {
          inputElement.current.value = ""
          setClicked(prev=>false);
        }, 1000);
    }
    else{
      alert('Please Enter the age')
    }
  }
  return(
    <div>
      <div className='text-white font-medium text-3xl mt-10 mb-10'><h1>Verify Your age</h1></div>
      <div className='text-gray-300 mb-5'>Please Confirm your birth year. This data will not be stored</div>
      <div><input ref={inputElement} type='text' placeholder='Your Birth year' className='text-md bg-input text-white border-border border-solid border-[1px] rounded-md p-1 mb-5 w-full focus:outline-none'/></div>
      <div><button className={`p-2 pl-5 pr-5 w-full font-medium rounded-lg ${clicked?'text-blue-900 bg-cyan-200': 'text-white bg-gray-400'}`} onClick={buttonClicked}>Continue</button></div>
    </div>
  )
}
function Main(){
  return(
    <div className='bg-card p-5 rounded-xl w-[90%] sm:w-[70%] md:w-[50%] min-w-[160px] max-w-[470px]'>
      <div className='mb-10'>
        <img src='https://webinar.gg/loginLogo.svg' alt='logo of webinar.gg' className='block m-auto w-xs'/>
      </div>
      {/* <Screen1></Screen1> */}
      {/* <br/> */}
      {/* <Screen2></Screen2> */}
      <Screen3></Screen3>
    </div>
  )
}
function Screen2(){
  const [clicked, setClicked] = useState(false);
  const inputElement = useRef();
  function buttonClicked(){
    if(!inputElement.current.value){
      alert('💡Email is required.');
    }
    else if (/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.com$/
.test(inputElement.current.value)) {
      alert('Email accepted: ' + inputElement.current.value);
      setClicked(prev=>true);
      setTimeout(() => {
          inputElement.current.value = ""
          setClicked(prev=>false);
        }, 1000);
    } 
    else{
      alert('💡Email must be from john@gmail.com domain.');
    }
  }
  return(
    <div>
      <div className='text-white font-medium text-3xl mt-10 mb-10'><h1>Let's Get Started</h1></div>
      <div><input ref={inputElement} type='email' pattern=".+@example\.com" size="30" placeholder='Email Id' className='text-md bg-input text-white border-border border-solid border-[1px] rounded-md p-1 mb-5 w-full focus:outline-none'/></div>
      <div><button className={`p-2 pl-5 pr-5 w-full font-medium rounded-lg ${clicked?'text-blue-900 bg-cyan-200': 'text-white bg-gray-400'}`} onClick={buttonClicked}>Continue</button></div>
    </div>
  )
}
function Screen3(){
  const [clicked, setClicked] = useState(false);
  const inputElement1 = useRef();
  const inputElement2 = useRef();
  const inputElement3 = useRef();
  const inputElement4 = useRef();
  const inputElement5 = useRef();
  const inputElement6 = useRef();
  const code = [inputElement1, inputElement2, inputElement3, inputElement4, inputElement5, inputElement6]
  function otp(e,index){
    if(e.target.value && index !== code.length-1){
      code[index + 1].current.focus();
    }
  }
  useEffect(()=>{
    inputElement1.current.focus();
  },[])
  function buttonClicked(){
    if(inputElement1.current.value&&inputElement2.current.value&&inputElement2.current.value&&inputElement3.current.value&&inputElement4.current.value&&inputElement5.current.value&&inputElement6.current.value){
      setClicked(prev=>true);
      setTimeout(() => {
          inputElement1.current.value = "";
          inputElement2.current.value = "";
          inputElement3.current.value = "";
          inputElement4.current.value = "";
          inputElement5.current.value = "";
          inputElement6.current.value = "";
          setClicked(prev=>false);
        }, 1000);
    }
    else{
      alert('Please Enter the age')
    }
  }
  return(
    <div>
      <div className='text-white font-medium text-3xl mt-10 mb-10'><h1>Check Your Email For A Code</h1></div>
      <div className='text-gray-300 mb-5'>Please enter the verification code sent to your email id</div>
      <div className='grid grid-cols-6 gap-2.5 ml-[15%] mr-[15%]'>
        <input onChange={(e)=>otp(e,0)} ref={inputElement1} type='text' maxLength={'1'}  className='text-md bg-input text-white border-border border-solid border-[1px] rounded-2xl text-center pt-5 pb-5 mb-5 col-span-1 focus:outline-none'/>
        <input onChange={(e)=>otp(e,1)} ref={inputElement2} type='text' maxLength={'1'} className='text-md bg-input text-white border-border border-solid border-[1px] rounded-2xl text-center pt-5  pb-5  mb-5 col-span-1 focus:outline-none'/>
        <input onChange={(e)=>otp(e,2)} ref={inputElement3} type='text' maxLength={'1'} className='text-md bg-input text-white border-border border-solid border-[1px] rounded-2xl text-center pt-5  pb-5  mb-5 col-span-1 focus:outline-none'/>
        <input onChange={(e)=>otp(e,3)} ref={inputElement4} type='text' maxLength={'1'} className='text-md bg-input text-white border-border border-solid border-[1px] rounded-2xl text-center pt-5  pb-5  mb-5 col-span-1 focus:outline-none'/>
        <input onChange={(e)=>otp(e,4)} ref={inputElement5} type='text' maxLength={'1'} className='text-md bg-input text-white border-border border-solid border-[1px] rounded-2xl text-center pt-5  pb-5  mb-5 col-span-1 focus:outline-none'/>
        <input onChange={(e)=>otp(e,5)} ref={inputElement6} type='text' maxLength={'1'} className='text-md bg-input text-white border-border border-solid border-[1px] rounded-2xl text-center pt-5  pb-5  mb-5 col-span-1 focus:outline-none'/>
        </div>
      <div><button className={`p-2 pl-5 pr-5 w-full font-medium rounded-lg ${clicked?'text-blue-900 bg-cyan-200': 'text-white bg-gray-400'}`} onClick={buttonClicked}>Verify</button></div>
      <div className='text-gray-300 mb-5'>Can't find the email? click <a href='./' className='text-white font-bold underline'>here</a> to resend</div>
    </div>
  )
}
export default App
