import React from "react";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { MdOutlineInventory } from "react-icons/md";
import { FaHome, FaTrashAlt } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";



const SideNav = () => {
  return (
    <div className="w-[300px] relative h-screen bg-white dark:bg-slate-900 hidden xl:inline">
      <div className="flex items-center justify-center flex-col mt-10">
        <MdOutlineInventory className="text-5xl text-green-500" />
        <h2 className="text-3xl tracking-widest">Stockify</h2>
        <p>Inventory for Fake Store</p>
      </div>

      <div className="flex justify-center items-center my-5">
        <div>
          <Link
            href="/"
            className="flex items-center my-3 hover:bg-gray-200 dark:hover:bg-gray-600 py-1 px-2 rounded-xl"
          >
            <FaHome className="text-3xl text-green-500" />
            <h2 className="ml-2">Home</h2>
          </Link>

          <Link
            href="/inventory?category=&params="
            className="flex items-center my-3 hover:bg-gray-200 dark:hover:bg-gray-600 py-1 px-2 rounded-xl"
          >
            <MdInventory2 className="text-3xl text-green-500" />
            <h2 className="ml-2">Inventory</h2>
          </Link>
          
          <Link
            href="/deleted"
            className="flex items-center my-3 hover:bg-gray-200 dark:hover:bg-gray-600 py-1 px-2 rounded-xl"
          >
            <FaTrashAlt className="text-3xl text-green-500" />
            <h2 className="ml-2">Deleted </h2>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 ">
        <ThemeButton />
      </div>
    </div>
  );
};

export default SideNav;
