'use client'
import { useState } from 'react'
import { toast } from "sonner"
import { Loader } from 'lucide-react';
import { url } from '@/requests/fetchData'
import { restore } from '@/actions/restore';

type Props = {
  id: string
}

const RestoreButton = ({ id } : Props) => {
  const [ loading, setLoading ] = useState(false);

  async function handleRestore(id : string){
    setLoading(true)
    try{
      const status = await restore(id, url)
      setLoading(false);
      toast.success('Sucessful',{description: 'Item Restored Successfully'})
      
    }catch(err){
      setLoading(false);
      toast.error('Error',{description: 'Item Failed to Restored'})
    }
  }

  return (
    <div className=''>
      {loading ? (
        <Loader className="text-3xl text-green-500 animate-spin" />
      ) : (
        <button 
          onClick={() => handleRestore(id)}
          className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded-xl text-white"
        >
          Restore
        </button>
      )}
    </div>
  )
}

export default RestoreButton