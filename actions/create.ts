'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function create(formData : FormData, url : string){

  const response = await fetch(url + 'create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title : formData.get('title'),
      price : formData.get('price'),
      description : formData.get('description'),
      category : formData.get('category'),
      image : formData.get('image'),
      rating : formData.get('rating'),
      sold : formData.get('sold'),
      stock : formData.get('stock')
    })
  });

  if(response.ok){
    revalidatePath('/inventory?category=&params=')
    redirect('/inventory')
  }
    
  return response.ok;
}