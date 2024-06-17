import { FiLoader } from "react-icons/fi";


const InventoryPageLoading = () => {
  return (
    <div className='h-[90vh] w-full flex items-center justify-center'>
      <FiLoader className=' text-green-500 animate-spin text-9xl'/>      
    </div>
  )
}

export default InventoryPageLoading