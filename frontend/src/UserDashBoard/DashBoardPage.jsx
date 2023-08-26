import React, { useEffect,useState } from 'react'

export default function DashBoardPage() {

const [File,SetFile] = useState("");
var formData = new FormData();

async function SendFile(e){
  e.preventDefault();
      
  formData.append("file",File);
  const response =  await fetch('http://localhost:8000/data',{
  method: 'POST',
  body: formData
  })

  const data = await response.json();
  console.log(data);

 }
  return (
    <>
        <div className='mt-20'>
            <form className='m-5' onSubmit={SendFile}>
                <label className="p-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Excel</label>
                <input  onChange={(e)=>SetFile(e.target.files[0])}  className="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name='file' id="file" type="file"/>
                <button type="submit"className='m-2 p-3 bg-blue-200 font-Poppins rounded-md hover:p-4'>Send..</button>
            </form>
        </div>
    </>
  )
}
