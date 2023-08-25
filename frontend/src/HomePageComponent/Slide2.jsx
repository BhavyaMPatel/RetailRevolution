import React from 'react'
export default function Slide2() {

return (
<>
<div className='flex flex-wrap-reverse sm:mx-20  h-fit items-center p-2 font-Poppin transition ease-out'>
    <div className='w-full sm:w-1/2 sm:p-2 p-5 h-[45vh] flex justify-center items-center'>
        <div className='text-[#373b4e] fill-[#606a7b] text-4xl md:text-4xl lg:text-5xl font-Poppins font-semibold'>
            <div className='flex justify-start sm:text-2xl md:text-3xl lg:text-5xl'> AI Will Help Us ! </div>
                <div className='bg-gradient-to-r bg-clip-text  text-transparent 
                    from-indigo-500 via-purple-500 to-indigo-500
                    animate-textflex justify-statr sm:text-2xl md:text-3xl lg:text-5xl'> Business <p className='inline-block text-yellow-400'>🤝</p> AI </div>
                    <div className="text-[#373b4e] mt-2 flex justify-start text-base md:text-lg lg:text-xl tracking-tighter">
                        To simplify Business Problems    
                    </div>
            </div>
    </div>
    <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center rounded-md'>
        <img className='h-[30vh] w-[50vh] sm:w-[70vh] sm:h-[25vh] md:w-[70vh] md:h-[40vh] rounded-xl' src='/Slide2.webp' alt='Slide1'/>
    </div>
</div>
</>
)
}
