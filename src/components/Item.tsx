import React from 'react'
import { cartItem } from '../types/types'




type Props = {
    item: cartItem
    handleAddtoCart: (clickedItem: cartItem) => void

}

const Item : React.FC <Props> = ({item, handleAddtoCart}) => (
  <div>
      <div>
          <img src={item.image} alt={item.title} />
      </div>
      <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h3>${item.price}</h3>
      </div>

      <button onClick={() =>handleAddtoCart(item)}>Add to cart</button>
  </div>
  
)

export default Item