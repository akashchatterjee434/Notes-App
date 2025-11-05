import React from 'react'

const App = () => {

const submitHandler = (e)=>{

  e.preventDefault
  console.log('formSubmitted');
  
  
}

  return (
    <div className='h-screen lg:flex bg-black text-white  '>
      <form onSubmit = {(e)=>{
        submitHandler(e)
      }} className='flex p-10 gap-4 lg:w-1/2 items-start flex-col '>

        <h1 className='text-3xl font-bold'>Add Notes Here</h1>
         
           <input   
         type="text"
         placeholder='Enter Notes Heading' 
         className='px-5 font-medium  w-full py-2 border-2 outline-none rounded'
         />
        <textarea 
        type="text" 
        placeholder='Write Details'
        className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row  outline-none border-2 rounded' />

         <button className='bg-white w-full font-medium text-black px-5 py-2 border-2 rounded '>Add Notes</button>
         
      </form>
       <div className=' lg:border-l-2 lg:w-1/2 p-10'>
       <h1 className='text-3xl font-bold'>Your Notes</h1>

        <div className='flex flex-wrap mt-5 gap-5 h-full overflow-auto'>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>

       </div>
    </div>
  )
}

export default App
