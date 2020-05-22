import React from 'react'
import SingleProduct from '../organism/SingleProduct/SingleProduct'

function SingleProductTemplate(props) {
  return(
    <SingleProduct product={props.location.productProps}/>
  )
}
  
export default SingleProductTemplate