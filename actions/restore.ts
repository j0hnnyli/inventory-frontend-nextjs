'use server'

import { revalidatePath } from "next/cache";

export async function restore(
  id : string,
  url : string
){
  const response = await fetch(`${url}deletedItems/restore`, {
    method: "DELETE",
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({id})
  })

  revalidatePath('/deleted');
 
  return response.status;
}