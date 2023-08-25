import React from 'react'
import '../App.css'
export default function Navbar() {

  async function Navigation(){
    const menu=document.querySelector("#menu");
    menu.classList.toggle('hidden');
  }

  return (
    <>
        <nav className="font-Inter text-5xl shadow-md border-gray-100 border-b-2 flex flex-wrap justify-start items-center md:justify-center w-full py-4 md:py-0  text-gray-700  fixed z-0 opacity-90  top-0 bg-lime-50    ">
        <button onClick={Navigation}>     
            <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="justify-start m-2 h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <div className='hidden w-2/5 md:flex font-thin text-2xl  justify-start hidde bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text'>
            RetailRevolutioner
        </div>
        <div className="hidden w-full md:flex md:items-center md:justify-end md:w-2/5 font-thin" id="menu">
            <ul className=" m-3 pt-4 text-2xl gap-0 text-black md:flex md:justify-between md:pt-0 md:m-0 ">
                <li>
                    <a className="md:p-4 py-2 block font-Inter text-indigo-500 cursor-text">WelCome</a>
                </li>
                <li>
                    <a className="md:p-4 py-2 block hover:text-pink-400 text-indigo-500 font-Inter" href="/#">Something </a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}
