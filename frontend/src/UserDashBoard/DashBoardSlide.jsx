import React, { useState } from 'react'
import LaodFile from '../LoadingPage/LoadFile'

export default function DashBoardSlide() {

const [Data,SetData] =  useState([])    
const [Uploading,SetUploading] = useState(false)
const [File,SetFile] = useState("")
var formData = new FormData();

async function Upload_File(e){
    SetUploading(true);
    e.preventDefault();
    formData.append("file",File);
    const response =  await fetch("https://3.109.54.255:8000/data",{
    method: 'POST',
    body: formData
    })
  
    const data = await response.json();
    console.log(data.data);
    SetUploading(false);
    document.getElementById('file').value="";
    document.getElementById('data_input').close();
    SetData(data.data);
 
}

return (
    <>
    <div className='flex flex-wrap h-fit items-center bg-lime-50'>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 h-[45vh] flex justify-center items-center'>
            <div className='text-[#373b4e] fill-[#606a7b] text-4xl md:text-4xl lg:text-5xl font-Poppins font-semibold'>
                <div className='flex justify-start'> Wel-Come To </div>
                    <div className='text-[#db1a5a] flex justify-statr'> AI World </div>
                        
                        <div className="text-[#373b4e] mt-2 flex justify-start text-base md:text-lg lg:text-xl font-Inter tracking-tighter">
                            Upload You Past Sales Data With Only StockCode,TotalPrice,UnitPrice Column <br/>
                            And Magic 🪄 You Will Have Next Top 10 Selling Product 
                        </div>
                        
                        <dialog id='data_input' className='w-screen opacity-100 fixed top-1 rounded-md p-4 sm:p-5 md:p-20'>
                            <div className='mb-2 font-Poppins text-lg md:text-2xl text-pink-600'>Upload Your CSV !</div>
                        
                            <div>
                                <form className='m-5' onSubmit={Upload_File}>
                                    <input  onChange={(e)=>SetFile(e.target.files[0])}  name="file" type="file" id="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-2xl rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" placeholder="Wait For Magic ...." required />
                                    {Uploading ? <LaodFile/> : <button id="upload_csv" type='submit' className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" /></svg>UploadNow</button> }
                                </form>
                            </div>
                        
                            <button onClick={()=>{data_input.close()}} className=" inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Close</button>
                        
                        </dialog>

                    <button onClick={()=>{data_input.showModal()}} className=" inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-pink-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Upload Now</button>
            </div>
        </div>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
            <img className='h-[55vh] sm:h-[50vh] md:h-[50vh] rounded-lg' src='/Slide3.webp' alt='Navbackground'/>
        </div>
    </div>  

    {Array.isArray(Data)?Data.map(item => (
                <>
                    <div key={item.StockCode} className='m-2 font-Poppins text-base border-2 border-solid border-blue-200 rounded-md p-2 hover:shadow-slate-100 hover:shadow-xl bg-blue-50'>
                        StockCode - {item.StockCode}<br/>
                        PredictedQuantity - {item.PredictedQuantity}
                        <br/>
                    </div>
                </>
                )):<><><div className='font-Inter m-5'>Click On UploadFile To Get Top 10 Product</div></></>}

    </>
  )
}
