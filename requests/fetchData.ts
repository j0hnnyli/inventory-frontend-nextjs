export const url = 'https://inventory-server-6mdx.onrender.com/'

export async function getStats(){
  try{
    const response = await fetch(url + 'statsinfo')

    if(!response.ok) console.log('error home stats')

    const data = await response.json()
    
    return data;
  }catch(err){
    console.log(`Error stats`)
  }
}

export async function getTopRated(){
  try{
    const response = await fetch(url + 'topitems')
    
    if(!response.ok) console.log('error Top-Rated-Items')
    
    const data = await response.json()

    return data;
  }catch(err){
    console.log(`Top-Rated-Items error`)
  }
}

export async function getLowStockItem(){
  try{
    const response = await fetch(url + 'lowstock')

    if(!response.ok) console.log('error Low-Stock-Items')
    
    const data = await response.json()

    return data;
  }catch(err){
    console.log('Low-Stock Error')
  }
}

export async function getControls(){
  try{
    const response = await fetch(url + 'inventory')

    if(!response.ok) console.log('error controls')
    
    const data = await response.json()

    return data;
  }catch(err){
    console.log('controls Error')
  }
}

export async function getDeletedItems(){
  try{
    const response = await fetch(url + 'deletedItems')

    if(!response.ok) console.log('error get deleted items')
    
    const data = await response.json()

    return data;
  }catch(err){
    console.log('error get deleted items')
  }
}