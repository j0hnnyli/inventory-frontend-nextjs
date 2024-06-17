import React from 'react'
import { FiLoader } from "react-icons/fi";

const loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <FiLoader className=' text-green-500 animate-spin text-9xl'/>      
    </div>
  )
}

export default loading