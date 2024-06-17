"use client";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import SelectFiliter from "@/components/SelectFiliter";


const Searchbar = () => {
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const [ query ] = useDebounce(value, 500)

  function handleSelect(value: string) {
    setSelected(value);
  }

  useEffect(() => {
    router.push(`/inventory?category=${selected}&params=${value}`)
  }, [query, router, selected, value])
        
  return (
    <div className='flex mb-5'>
      <SelectFiliter 
        placeholder='Filter By Category'
        fn={(selectedCategory) => handleSelect(selectedCategory)}
        options={[
          {value: 'all', option: 'All'},
          {value: 'men clothing', option: 'Men Clothes'},
          {value: 'women clothing', option: 'Women Clothes'},
          {value: 'jewelery', option: 'Jewelery'},
          {value: 'electronics', option: 'Electronics'},
        ]}
      />
        
      <input type="text" 
        placeholder='Search For Items'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='w-full py-2 px-4 mx-3 rounded-2xl border'
      />
    </div>
  )
}

export default Searchbar