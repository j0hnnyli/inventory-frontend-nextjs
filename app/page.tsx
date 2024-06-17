import { getStats } from "@/requests/fetchData";
import PieChart from "@/components/PieChart";
import TopRatedItems from "@/components/TopRatedItems";
import LowStockItems from "@/components/LowStockItems";

export const revalidate = 0;

export default async function Home() {
  const { productCount, lowItems, totalSold, stockInHand, totalSale, deleted } =
    await getStats();

  return (
    <div className="mt-8 px-4">
      <section>
        <h1 className="text-3xl tracking-widest">Inventory Activity: </h1>

        <div className="flex flex-col md:flex-row my-5 items-center justify-between">

          <div className="grid  grid-cols-2 md:grid-cols-4 gap-5 justify-between w-full md:w-[70%] border-black dark:border-gray-500 py-2">

            <div className="w-full h-[120px] md:h-[100px] lg:h-[120px] border border-black rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-2">
              <h2 className="text-blue-500 text-4xl">{productCount}</h2>
              <h2 className="">Total Products</h2>
            </div>

            <div className="w-full h-[120px] md:h-[100px] lg:h-[120px] border border-black  rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-2">
              <h2 className="text-red-500 text-4xl">{lowItems}</h2>
              <h2>Low Stock</h2>
            </div>

            <div className="w-full h-[120px] md:h-[100px] lg:h-[120px] border border-black  rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-2">
              <h2 className="text-green-500 text-4xl">{totalSold}</h2>
              <h2>Items Sold</h2>
            </div>

            <div className="w-full h-[120px] md:h-[100px] lg:h-[120px] border border-black  rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-2">
              <h2 className="text-4xl text-red-700">{deleted || 1}</h2>
              <h2>Deleted</h2>
            </div>
          </div>

          <div className="w-full  md:w-[30%] p-1 flex flex-col justify-between lg:pl-2">
            <h2 className="text-xl md:text-sm">Quantity Summary</h2>

            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-xl mb-2">
              <h2 className="md:text-[13px]">Quantity In Hand</h2>
              <p>{stockInHand}</p>
            </div>

            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-xl">
              <h2 className="md:text-[13px]">Quantity To Be Received</h2>
              <p>150</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-3 mt-3 py-2">
        <div className="border border-black md:w-[40%] bg-white rounded-xl dark:bg-gray-800 dark:text-white">
          <h2 className="border-b border-black py-1 px-4 text-black dark:text-white">
            Product Detials
          </h2>
          <div className="flex flex-row md:flex-col lg:flex-row items-center justify-between text-black text-sm md:text-md">
            <div className="px-4 w-[60%] md:w-full">
              <div className="flex items-center justify-between my-3">
                <h3 className="text-red-500">Low Stock Items</h3>
                <p className="text-red-500">{lowItems}</p>
              </div>

              <div className="flex items-center justify-between my-3 dark:text-white">
                <h3 className="">Well Stocked Items</h3>
                <p>{productCount - lowItems}</p>
              </div>

              <div className="flex items-center justify-between my-3 dark:text-white">
                <h3 className="">Total Products</h3>
                <p>{productCount}</p>
              </div>
            </div>

            <PieChart
              lowItems={lowItems}
              stockedItems={productCount - lowItems}
            />
          </div>
        </div>

        <TopRatedItems />
      </section>

      <section className="flex flex-col md:flex-row gap-3 my-3 py-2">
        <div className="md:w-[30%] border border-black rounded-xl bg-white dark:bg-gray-800">
          <h2 className="py-1 px-4 border-b border-black ">
            Accumulated Sales
          </h2>

          <div className="h-[200px] flex items-center justify-center">
            <p className="tracking-widest text-3xl md:text-2xl lg:text-3xl text-green-500">
              {totalSale.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}{" "}
            </p>
          </div>
        </div>

        <LowStockItems />
      </section>
    </div>
  );
}
