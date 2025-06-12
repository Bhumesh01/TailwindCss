import './App.css'

function App() {
  return (
    <>
    <Test></Test>
    </>
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
    <div className='flex justify-around'>
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
    </>
  )
}
export default App
