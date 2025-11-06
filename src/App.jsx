import React, { useState } from 'react'
import {X} from 'lucide-react';
const App = () => {
  
const [title , setTitle]=useState('')
const [details , setDetails]=useState('')
const [task , setTask]=useState([])

const submitHandler = (e)=>{
  e.preventDefault()

 const copyTask = [...task];
 copyTask.push({title,details})
 setTask(copyTask)

  setTitle('');
  setDetails('')
}
const deleteNote = (idx)=>{
   const copyTask=[...task]
   copyTask.splice(idx, 1)
   setTask(copyTask)
}

  return (
    <div className='h-screen lg:flex bg-black text-white  '>
      <form onSubmit = {(e)=>{
        submitHandler(e)
      }} className='flex p-10 gap-4 lg:w-1/2 items-start flex-col '>

        <h1 className='text-4xl font-bold'>Add Notes Here</h1>
           
           {/* title input */}
           <input   
         type="text"
         placeholder='Enter Notes Heading' 
         className='px-5 font-medium  w-full py-2 border-2 outline-none rounded'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}/>
        {/* details input */}
        <textarea 
        type="text" 
        placeholder='Write Details Here'
        className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row  outline-none border-2 rounded'
        value = {details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }} />

         <button className= ' active:scale-95 bg-white w-full font-medium text-black px-5 py-2 border-2 rounded '>Add Notes</button>
         
      </form>
       {/* notes div */}
       <div className=' lg:border-l-2 lg:w-1/2 p-10'>
       <h1 className='text-4xl font-bold'> Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start mt-5 gap-5 h-[90%] overflow-auto'>
        {task.map((elem, idx)=>{
          return <div key={idx} className=" flex justify-between flex-col items-start relative overflow-hidden h-52 w-40 rounded-2xl bg-cover text-black pt-9 pb-4 px-4 py-8 bg-[url('https://imgs.search.brave.com/pCoCe5YPIJki9c8Eu94uAF4g55o-BawHsAQTImhJCok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3MS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')]">
            <div>
            <h3 className='leading-tight text-xl font-bold'>{idx+1}.{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xs rounded-2xl font-bold text-white'>Delete</button>
          </div>
        })}
        </div>

       </div>
    </div>
  )
}

export default App
