import Image from "next/image";
import RestoreButton from "./RestoreButton";

type Props = {
  image: string;
  title: string;
  price: number;
  rating: number;
  sold: number;
  stock: number;
  id: string;
};

const ProductRow = ({
  image,
  title,
  price,
  rating,
  sold,
  stock,
  id,
}: Props) => {
  return (
    <>
      <div className="flex items-center justify-between py-2 px-4 dark:border-white border-b ">
        <div className="w-[50%] h-[150px] md:h-[180px]  lg:w-[16%] ">
          <Image
            src={image.includes("fakestoreapi") ? image : atob(image)}
            alt={title}
            width={100}
            height={100}
            className="rounded-xl w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-evenly w-[50%] lg:w-full">
          <div className="lg:w-[16%] flex  lg:justify-center items-center mb-5 lg:mb-0">
            {title}
          </div>
          <div className="lg:w-[16%] flex  lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[100px] text-left">Price:</p>
            {price}
          </div>
          <div className="lg:w-[16%] flex  lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[100px] text-left">Rating:</p>
            {rating}
          </div>
          <div className="lg:w-[16%] flex  lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[100px] text-left">Sold:</p>
            {sold}
          </div>
          <div className="lg:w-[16%] flex  lg:justify-center items-center w-[70%]">
            <p className="lg:hidden mr-2 w-[100px] text-left">Stock:</p>
            {stock}
          </div>
          <div className="lg:w-[16%] flex justify-center items-center my-5 lg:my-0">
            <RestoreButton id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRow;
