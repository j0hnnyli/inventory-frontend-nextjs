'use server';

import { revalidatePath } from "next/cache";

export async function updateItem(
  url: string,
  id: string,
  newTitle: string,
  newPrice: string,
  newRating: string,
  newStock: string,
  newSold: string,
) {
  const newData = {
    id,
    newTitle,
    newPrice,
    newRating,
    newStock,
    newSold,
  };

  const response = await fetch(`${url}inventory/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  revalidatePath('/inventory?category=&params=')

  return response.status
}