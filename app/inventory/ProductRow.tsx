"use client";
import Image from "next/image";
import HoverIcon from "@/components/HoverIcon";
import { url } from "@/requests/fetchData";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { updateItem } from "@/actions/update";
import { deleteItem } from "@/actions/delete";


type Props = {
  image: string;
  title: string;
  price: number;
  rating: number;
  sold: number;
  stock: number;
  id: string;
  category: string;
};

const ProductRow = ({
  image,
  title,
  price,
  rating,
  sold,
  stock,
  id,
  category,
}: Props) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newStock, setNewStock] = useState("");
  const [newSold, setNewSold] = useState("");

  async function update() {
    setLoading(true);
    try {
      if (
        newTitle === "" &&
        newPrice === "" &&
        newRating === "" &&
        newStock === "" &&
        newSold === ""
      ) {
        setLoading(false);
        return;
      }

      const status = await updateItem(
        url,
        id,
        newTitle,
        newPrice,
        newRating,
        newStock,
        newSold
      );

      setLoading(false);
      setEdit(false);
      toast.success("Sucessful", { description: "Item Update Successful" });
    } catch (err) {
      setLoading(false);
      setEdit(false);
      toast.error("Error", { description: "Item Update Failed" });
    }
  }

  async function handleDelete(id: string) {
    setLoading(true);
    try {
      const status = await deleteItem(id, url);

      setLoading(false);
      toast.success("Successful", { description: "Item Deleted Successfully" });
    } catch (err) {
      setLoading(false);
      toast.error("Error", { description: "Item Failed To Delete" });
    }
  }

  return (
    <>
      <div className="flex items-center justify-between py-2 px-4 w-full  text-center dark:border-white border-b pb-2 relative">
        <div className="w-[50%] h-[150px] md:h-[180px]  lg:w-[16%] ">
          <Image
            src={image.includes("fakestoreapi") ? image : atob(image)}
            alt={title}
            width={100}
            height={100}
            className="rounded-xl w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-evenly lg:w-full w-[50%]">
          <div className="lg:w-[16%] text-left lg:text-center pl-6 mb-5 lg:pl-0 lg:mb-0">
            {edit ? (
              <textarea
                defaultValue={title}
                onChange={(e) => setNewTitle(e.target.value)}
                style={{ width: '100%', maxWidth: '500px' }}
                className="h-[80%] border"
              />
            ) : (
              `${title}`
            )}
          </div>

          <div className="lg:w-[16%] flex lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[70px] text-left">Price:</p>
            {edit ? (
              <input
                type="number"
                defaultValue={price}
                onChange={(e) => setNewPrice(e.target.value)}
                className="border text-center w-[80%]"
              />
            ) : (
              <p>${price}</p>
            )}
          </div>

          <div className="lg:w-[16%] flex lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[70px] text-left">Rating:</p>
            {edit ? (
              <input
                type="number"
                defaultValue={rating}
                onChange={(e) => setNewRating(e.target.value)}
                className="border text-center w-[80%]"
              />
            ) : (
              `${rating}`
            )}
          </div>

          <div className="lg:w-[16%] flex lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[70px] text-left">Sold: </p>
            {edit ? (
              <input
                type="number"
                defaultValue={sold}
                onChange={(e) => setNewSold(e.target.value)}
                className="border text-center w-[80%]"
              />
            ) : (
              `${sold}`
            )}
          </div>

          <div className="lg:w-[16%] flex lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[70px] text-left">Stock: </p>
            {edit ? (
              <input
                type="number"
                defaultValue={stock}
                onChange={(e) => setNewStock(e.target.value)}
                className="border text-center w-[80%]"
              />
            ) : (
              `${stock}`
            )}
          </div>

          <div className="lg:w-[16%] my-5 lg:my-0 w-full">
            {edit ? (
              <div className="flex items-center justify-evenly">
                <button
                  onClick={update}
                  className="py-1 px-3 bg-blue-500 w-[90px] text-white rounded-lg hover:bg-blue-800 flex items-center justify-center"
                >
                  {loading ? (
                    <Loader className="text-3xl text-green-500 animate-spin" />
                  ) : (
                    "Update"
                  )}
                </button>

                <button
                  onClick={() => setEdit(false)}
                  className="py-1 px-2 rounded-lg bg-red-500 text-white hover:bg-red-800"
                >
                  X
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-evenly">
                <HoverIcon
                  name="Edit"
                  icon={<FaEdit className="text-xl hover:text-green-500" />}
                  fn={() => setEdit(true)}
                />

                <div className="flex items-center justify-center">
                  {loading ? (
                    <Loader className="text-xl text-green-500 animate-spin" />
                  ) : (
                    <HoverIcon
                      name="Delete"
                      icon={<MdDelete className="text-xl hover:text-green-500" />}
                      fn={() => handleDelete(id)}
                    />
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductRow;
