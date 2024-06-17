import { Product } from '@/productType';
import DeletedRow from './DeletedRow'
import { getDeletedItems } from '@/requests/fetchData'

export const revalidate = 0;

const DeletedPage = async () => {
  const { data } = await getDeletedItems();

  return (
    <div className=''>
      <h2 className=" text-2xl lg:text-3xl tracking-widest">Deleted Products : {data.length}</h2>

      <div className=" border rounded-2xl p-2 mt-10 dark:bg-gray-800">
        <div className="h-[80vh] overflow-auto ">

          <div className="border w-full">

            <div className="sticky -top-1 bg-white dark:bg-gray-800 z-10 lg:flex items-center justify-evenly py-2 px-4 hidden">           
              <p className="w-[16%]"></p>
              <p className="w-[16%] text-center">Products: {data.length}</p>
              <p className="w-[16%] text-center">Price</p>
              <p className="w-[16%] text-center">Ratings</p>
              <p className="w-[16%] text-center">Sold</p>
              <p className="w-[16%] text-center">Stock</p>
              <p className="w-[16%] text-center">Controls</p>
            </div>

            <div className="">
              {data.map((item: Product) => (
                <DeletedRow
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  sold={item.sold}
                  price={item.price}
                  stock={item.stock}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletedPage