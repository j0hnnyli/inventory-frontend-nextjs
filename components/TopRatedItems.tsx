import React from "react";
import Image from "next/image";
import { Product } from "@/productType";
import { getTopRated } from "@/requests/fetchData";

const TopRatedItems = async () => {
  const topRated = await getTopRated();

  return (
    <div className="md:w-[60%] border rounded-xl border-black bg-white text-black dark:bg-gray-800  dark:text-white">
      <h2 className="py-2 px-4 border-b border-black">Top Rated Items</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:justify-between overflow-auto">
        {topRated.map((item: Product) => (
          <div key={item._id} className="w-full p-2">
            <div className="w-full h-[120px]">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="h-full w-[120px] mx-auto"
              />
            </div>
            <div>
              <h3 className="text-sm text-center">{item.title.slice(0, 15)} ...</h3>
              <div className="flex items-center justify-between text-sm p-1">
                <p> Rating: {item.rating}</p>
                <p> Sold: {item.sold}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedItems;
