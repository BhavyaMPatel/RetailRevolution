import React, { useState } from 'react'

export default function Login({CloseFun}) {

const [userid,setid]=useState('');
const [password,setpassword]=useState('');

async function LoginFunction(e){
    e.preventDefault();
    window.location.href="/Dashboard";

    // const useriderror=document.querySelector('#useriderror');
    // const passworderror=document.querySelector('#passworderror');

    // const responce = await fetch('http://localhost:4000/login',{
    //     method: 'POST',
    //     mode: 'cors',
    //     headers:{
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         userid,
    //         password
    //     }),
        
    // })

    // const data=await responce.json()
    
    // if(data.error){
    //     useriderror.textContent=data.error;
    //     passworderror.textContent=data.error; 
        
    // }

    // console.log("HI");
    // console.log(data);
 
    // if(data.login.type.localeCompare("Admin")==0){
    //     console.log("HI");
    //     localStorage.setItem('token',data.token);
    //     window.location.href="/Admin";
    // }

    // if(data.login.type.localeCompare("Requester")==0){
    //     localStorage.setItem('token',data.token);
    //     window.location.href="/Requester";
    // }

    // if(data.login.type.localeCompare("Approver")==0){
    //     localStorage.setItem('token',data.token);
    //     window.location.href="/Approval";
    // }

}

return (
    <>
    <section className="bg-gray-50 md:p-10 p-2">
    <div className='flex justify-end m-2'>
            <button onClick={()=>{CloseFun()}} className='transition-all delay-1000 duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="animate-pulse hover:rotate-45 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
    </div>

    <div className="flex flex-col items-center justify-center md:px-6 md:py-8 md:mx-10 lg:py-0 font-Poppins mb-10 h-full">
        <a href="/" className="flex items-center mb-6 text-2xl  font-Poppins text-gray-90">
            RetailRevolutioner
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tighter text-gray-900 md:text-xl">
                    WelCome Back
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={LoginFunction}>
                    <div>
                        <label htmlFor="userid" className="block mb-2 text-xs font-medium text-gray-900 ">UserId</label>
                        <input onChange={(e)=>setid(e.target.value)} required type="text" name="userid" id="userid" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="ABC" />
                        <div id="useriderror" className="text-red-600"></div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input onChange={(e)=>setpassword(e.target.value)}  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
                        <div id="passworderror" className="text-red-600" ></div>
                    </div>
                    <button type="submit" className="w-full text-red-50 bg-indigo-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login Now</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Dont have an account? <a href="/SignUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp Here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
</>
  )
}
