import { getLowStockItem } from "@/requests/fetchData";
import { Product } from "@/productType";
import Image from "next/image";
import React from "react";

const LowStockItems = async () => {
  const { lowStockItem } = await getLowStockItem();

  return (
    <div className="md:w-[70%] border rounded-xl border-black bg-white text-black dark:bg-gray-800 dark:text-white">
      <h2 className="py-2 px-4 border-b border-black">Low Stocked Items</h2>

      <div className="flex justify-between overflow-auto">
        {lowStockItem.map((item: Product) => (
          <div key={item._id} className="lg:w-[20%] p-2">
            <div className="w-[120px] h-[120px]">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="h-full w-[90%] mx-auto"
              />
            </div>

            <div>
              <h3 className="text-sm">{item.title.slice(0, 10)} ...</h3>
              <p className="text-red-500"> Stock: {item.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStockItems;
