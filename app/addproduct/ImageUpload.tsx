'use client'
import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";

function convertBase64(file : File){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result)
    fileReader.onerror = (err) => reject(err)
  })
}

type Props = {
  image: string;
  setImage: Dispatch<SetStateAction<string>>
}

const ImageUpload = ({image, setImage} : Props) => { 

  async function handleImageUpload(e: ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0]
    if(!file) return;

    const base64= await convertBase64(file)

    const base64String = base64 as string;
    setImage(base64String)
  }

  return (
    <div className='w-full h-full lg:w-[50%] rounded-2xl flex items-center justify-center relative'>
      {
        image === '' ? (
          <>
            <label htmlFor="file">
              <FaCloudDownloadAlt className='text-9xl cursor-pointer text-green-500 hover:text-green-800'/>
            </label>
            <input type="file" id='file' 
              onChange={(e) => handleImageUpload(e)}
              className='hidden '
            />
          </>
        ) : (
          <Image src={image} alt='image' width={300} height={300} className='w-full h-full object-contain rounded-2xl'/>
        )
      }

      {image !== '' && (
        <div className='absolute top-5 left-5 '>
          <label htmlFor="file">
            <FaCloudDownloadAlt className='text-3xl cursor-pointer text-black hover:text-green-800'/>
          </label>
          <input type="file" id='file' 
            onChange={(e) => handleImageUpload(e)}
            className='hidden'
          />
        </div>
      )}
    </div>
  )
}

export default ImageUpload