'use client'
import { MdCreateNewFolder } from 'react-icons/md'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'

const FormButton = () => {
  const { pending } = useFormStatus()

  return (
    <div className="my-5">
      <button 
        type='submit'
        className="bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-800 flex items-center"
      >
        <span>
          {
            pending ? 
            <Loader className="text-2xl mr-2 animate-spin"/> : 
            <MdCreateNewFolder className="text-2xl mr-2" />
          }
        </span>
        <span>Create</span>
      </button>
    </div>
  )
}

export default FormButton