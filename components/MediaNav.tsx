import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu2Line } from "react-icons/ri";
import SideNav from "./SideNav";
import { MdInventory2, MdOutlineInventory } from "react-icons/md";
import Link from "next/link";
import { FaHome, FaTrashAlt } from "react-icons/fa";
import ThemeButton from "./ThemeButton";

const MediaNav = () => {
  return (
    <div className="xl:hidden py-2 px-4 fixed top-0 bg-white dark:bg-slate-900 w-full z-50">
      <Sheet>
        <SheetTrigger>  
          <RiMenu2Line className="text-3xl text-green-500"/>
        </SheetTrigger>
        <SheetContent side='left'>
          <div>
            <div className="flex items-center justify-center flex-col mt-10">
              <MdOutlineInventory className="text-5xl text-green-500" />
              <h2 className="text-3xl tracking-widest">Stockify</h2>
              <p>Inventory for Fake Store</p>
            </div>

            <div className="flex justify-center items-center my-5">
              <div>
                <Link
                  href="/"
                >
                  <SheetClose className="flex items-center my-3 hover:bg-gray-200 dark:hover:bg-gray-600 py-1 px-2 rounded-xl">
                    <FaHome className="text-3xl text-green-500" />
                    <h2 className="ml-2">Home</h2>
                  </SheetClose>
                </Link>

                <Link
                  href="/inventory?category=&params="
                >
                  <SheetClose className="flex items-center my-3 hover:bg-gray-200 dark:hover:bg-gray-600 py-1 px-2 rounded-xl">
                    <MdInventory2 className="text-3xl text-green-500" />
                    <h2 className="ml-2">Inventory</h2>
                  </SheetClose>
                </Link>
                
                <Link
                  href="/deleted"
                >
                  <SheetClose className="flex items-center my-3 hover:bg-gray-200 dark:hover:bg-gray-600 py-1 px-2 rounded-xl">
                    <FaTrashAlt className="text-3xl text-green-500" />
                    <h2 className="ml-2">Deleted </h2>
                  </SheetClose>
                </Link>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 ">
              <ThemeButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MediaNav