import React, { useEffect, useState } from 'react'
import Slide2 from './Slide2';
import Slide1 from './Slide1';
export default function InformationHader() {

return (
  <>
    <div className='bg-lime-50 mt-24 sm:m-4 sm:mt-20 rounded-md font-thin w-fit sm:w-auto p-2 scroll-smooth  '>
      <Slide1/>
      <Slide2/>
    </div>    
  </>
  )
}
