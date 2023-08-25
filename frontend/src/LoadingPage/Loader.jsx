import React from 'react'

export default function Loader() {
  return (
    <div>

    <div className='flex justify-center items-center  font-thin text-2xl hover:bg-blue-50 p-4 '>Entering To Business World !</div>

    <div className='flex justify-center items-center mt-20'>
        <div className="flex-row justify-center items-center flow-root bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className='flex justify-center animate-bounce'>
            <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src="Wait1.webp" alt=""/>
            </div>  
        </div>
    </div>

    <div className="flex justify-center items-center p-4 leading-normal hover:bg-blue-50 mt-10 ">
        <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white font-thin">Connecting You To The Our World</h5>
    </div>

    <div className="flex justify-center items-center p-2 leading-normal hover:bg-blue-50 mt-5 space-x-2 ">
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin">
        < path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
    
    <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white font-thin">Loading ... </h5>
    </div>

    </div>
  )
}
