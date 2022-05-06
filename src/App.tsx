import './App.css';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { cartItem } from './types/types';
import Item  from './components/Item'





//types



const getProducts = async (): Promise<cartItem[]> => {
  const res = await (await fetch("https://fakestoreapi.com/products")).json()
  return res
}


const App = () => {


  const { isLoading, error, data, isFetching } = useQuery<cartItem[]>("product", getProducts)




  const handleAddToCart = (clickedItem: cartItem) => null
  const handleremoveFromCart = () => null

  if (isLoading) {
    console.log("je charge")
  }

  if (isFetching) {
    console.log("je fetcth le shit")
  }

  if (data) {
    console.log(data)
  }

  return (
    <div className="App">
      {isLoading ? <div><h1>Loading.....</h1></div>
       :
     <div>
         {data?.map(item =>(
        <Item item={item} key={item.id} handleAddtoCart={handleAddToCart}/>
      ))}
     </div>
      }
        
    </div>
    )
  }
export default App;
