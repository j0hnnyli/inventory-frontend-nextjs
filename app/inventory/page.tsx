import React, { Suspense } from "react";
import { getControls } from "@/requests/fetchData";
import Searchbar from "./Searchbar";
import { Product } from "@/productType";
import ProductRow from "./ProductRow";
import Link from "next/link";

type Props = {
  searchParams: {
    category: string;
    params: string;
  };
};

export const revalidate = 0;

const ProductInfoPage = async ({ searchParams }: Props) => {
  const { params, category } = searchParams;
  const { products, totalItems } = await getControls();

  const filtered = products.filter((item: Product) => {
    const lowerCasedParams = params?.toLowerCase();
    const titleMatches = item.title.toLowerCase().includes(lowerCasedParams);

    const lowerCasedCategory =
      category === "" ? "all" : category?.toLowerCase();
    const categoryMatches =
      lowerCasedCategory === "all" ||
      item.category.toLowerCase() === lowerCasedCategory;

    return titleMatches && categoryMatches;
  });

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl lg:text-3xl tracking-widest">Inventory :</h2>
        <Link
          href="/addproduct"
          className="py-2 px-10 rounded-xl bg-green-500 text-white hover:scale-[1.1]"
        >
          Add Item
        </Link>
      </div>
      <div className=" border rounded-2xl p-2 mt-10 dark:bg-gray-800">
        <Searchbar />

        <div className="h-[70vh] overflow-auto ">
          <div className="border w-full">
            <div className="sticky -top-1 bg-white dark:bg-gray-800 z-10 lg:flex items-center justify-between py-2 px-4 hidden">           
              <p className="w-[15%]"></p>
              <p className="w-[15%] text-center">Products: {filtered.length}</p>
              <p className="w-[15%] text-center">Price</p>
              <p className="w-[15%] text-center">Ratings</p>
              <p className="w-[15%] text-center">Sold</p>
              <p className="w-[15%] text-center">Stock</p>
              <p className="w-[15%] text-center">Controls</p>
            </div>
            
            <div className="">
              {filtered.map((item: Product) => (
                <ProductRow
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  sold={item.sold}
                  price={item.price}
                  stock={item.stock}
                  category={item.category}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPage;
