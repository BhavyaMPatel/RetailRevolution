import React from 'react'
import Login from '../LoginPage/Login'
export default function Slide1() {

function CloseFun(){
    LoginModel.close();
}

return (
<>
<div className='flex flex-wrap sm:mx-20 mt-20 h-fit items-center p-2 font-Poppin transition ease-out'>
<div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center rounded-md'>
        <img className='h-[30vh] w-[50vh] sm:w-[70vh] sm:h-[25vh] md:w-[70vh] md:h-[40vh] rounded-xl' src='/Slide1.webp' alt='Slide1'/>
    </div>
    <div className='w-full sm:w-1/2 sm:p-2 p-5 h-[45vh] flex justify-center items-center'>
        <div className='text-[#373b4e] fill-[#606a7b] text-4xl md:text-4xl lg:text-5xl font-Poppins font-semibold'>
            <div className='flex justify-start sm:text-2xl md:text-3xl lg:text-5xl'> Wel-Come To </div>
                <div className='bg-gradient-to-r bg-clip-text  text-transparent 
                    from-indigo-500 via-purple-500 to-indigo-500
                    animate-textflex justify-statr sm:text-2xl md:text-3xl lg:text-5xl'> RetailRevolutioner </div>
                    <div className="text-[#373b4e] mt-2 flex justify-start text-base md:text-lg lg:text-xl tracking-tighter">
                        We Are Here To - Grow Your Business !
                    </div>
                    <div className="text-[#373b4e] mt-2 flex justify-start text-base md:text-lg lg:text-xl tracking-tighter">
                        We Are Here To - Solve Your Business Problems !
                    </div>
                <dialog id='LoginModel' className='w-auto p-5 opacity-100 fixed top-1 rounded-md'>
                    <Login CloseFun={CloseFun}/>
                </dialog>
                <button onClick={()=>{LoginModel.showModal()}} className=" inline-flex items-center py-2 px-4 text-sm  text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-yellow-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-4 h-4 animate-bounce">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                    </svg>
                    Grow Now
                </button>
        </div>
    </div>
   
</div>
</>
)
}
