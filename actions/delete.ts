'use server'

import { revalidatePath } from "next/cache";

export async function deleteItem(
  id: string,
  url: string,
){
  const response = await fetch(`${url}inventory/deleted`, {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({id})
  })

  revalidatePath('/inventory?category=&params=')

  return response.status;
}