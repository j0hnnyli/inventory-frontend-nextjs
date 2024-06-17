import Form from './Form';
import Link from 'next/link';

const AddProductPage = () => {

  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-between'>
        <h2 className='text-2xl lg:text-3xl tracking-widest mb-2'> Create New Product : </h2>
        <Link href="/inventory?category=&params="
          className="py-2 px-4 rounded-xl bg-green-500 text-white hover:scale-[1.1]"
        >
          Back To Inventory
        </Link>
      </div>

      <Form/>
    </div>
     
  );
};

export default AddProductPage