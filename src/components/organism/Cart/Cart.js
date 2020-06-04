import React from 'react'
import { useSelector } from 'react-redux';

import './Cart.css'
import ProductListEmpty from '../../molecule/ProductList/ProductListEmpty';
import ProductListCart from '../../molecule/ProductList/ProductListCart';

const Cart = () => {

    const { cart } = useSelector(store => store.cartReducer)

    return(
        <div>{cart.length === 0 ? <ProductListEmpty /> : 
                cart.map((item, index) => {
                    return(
                        <ProductListCart key={index} index={index} product={item}/>
                    )
                })}
        </div>
    )
}

export default Cart