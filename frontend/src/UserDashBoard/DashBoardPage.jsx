import React, { useEffect,useState } from 'react'

export default function DashBoardPage() {

const [Data,SetData] = useState([]);

useEffect(()=>{
  fetch('http://localhost:8000/data')
  .then(response => response.json())
  .then(data => {
  // Update the options state
  SetData(data);
  console.log(data);
  });
},[]);

function SendFile(e){

    e.preventDefault()
    console.log('Send File')

 }
  return (
    <>
        <div className='mt-20'>
            
            <form className='m-5' onSubmit={SendFile}>
                
                <label className="p-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Excel</label>
                <input className="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                <button type="submit" className='m-2 p-3 bg-blue-200 font-Poppins rounded-md hover:p-4'>Send..</button>
            </form>

        </div>
    </>
  )
}
