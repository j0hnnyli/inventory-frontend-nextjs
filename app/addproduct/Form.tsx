"use client";
import SelectFiliter from "@/components/SelectFiliter";
import ImageUpload from "./ImageUpload";
import { toast } from "sonner";
import { create } from "@/actions/create";
import { useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { url } from "@/requests/fetchData";
import FormButton from "./FormButton";

const Form = () => {
  const [image, setImage] = useState("");

  const [category, setCategory] = useState("");
  const [availableStock, setAvaliableStock] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    try{
      if (
        image === "" ||
        category === "" ||
        availableStock === "" ||
        title === "" ||
        price === "" ||
        description === ""
      ){
        toast.error('Error', {
          description: 'Input Fields are missing infomation',
        })
        return;
      }
  
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("image", btoa(image));
      formData.append("rating", "0");
      formData.append("sold", "0");
      formData.append("stock", availableStock);
  
      await create(formData, url);
  
      toast.success('Successful', { description: 'New Item Has Been Added To Inventory'});
    }catch(err){
      toast.error('Error', { description: 'Failed To Add Inventory'});
    }
  }

  return (
    <div className="rounded-2xl p-2 my-5 lg:mt-10 dark:bg-gray-800 xl:h-[80vh] flex flex-col lg:flex-row justify-between items-center gap-5 border">
      <ImageUpload image={image} setImage={setImage} />

      <form
        action={handleSubmit}
        className="w-full lg:w-[50%] h-full rounded-2xl lg:flex lg:items-center lg:justify-center"
      >
        <div className="lg:w-[80%] w-full">
          <div className=" mb-5 lg:mb-10 flex flex-col lg:flex-row items-center justify-between gap-2">

            <div className="self-start mb-2 lg:mb-0">
              <p className="mb-2">Category:</p>
              <SelectFiliter
                placeholder="Select a Category"
                fn={(selectedCategory) => setCategory(selectedCategory)}
                options={[
                  { value: "men clothing", option: "Men Clothes" },
                  { value: "women clothing", option: "Women Clothes" },
                  { value: "jewelery", option: "Jewelery" },
                  { value: "electronics", option: "Electronics" },
                ]}
              />
            </div>

            <div className="self-start"> 
              <p className="mb-2">Available Stock:</p>
              <SelectFiliter
                placeholder="Available Stock"
                fn={(selectedStock) => setAvaliableStock(selectedStock)}
                options={[
                  { value: "10", option: "10" },
                  { value: "20", option: "20" },
                  { value: "30", option: "30" },
                  { value: "40", option: "40" },
                  { value: "50", option: "50" },
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="text-xl tracking-widest mb-2">
              Name:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="py-1 px-4 rounded-xl border border-black"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="price" className="text-xl tracking-widest mb-2">
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="py-1 px-4 rounded-xl border border-black"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-xl tracking-widest mb-2"
            >
              Description :
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              rows={7}
              cols={20}
              className="border py-1 px-3 border-black rounded-xl"
            />
          </div>

          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
