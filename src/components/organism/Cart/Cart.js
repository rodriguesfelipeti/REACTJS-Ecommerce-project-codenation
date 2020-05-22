import React from 'react'
import { connect } from 'react-redux';

import './Cart.css'
import ProductListEmpty from '../../molecule/ProductList/ProductListEmpty';
import ProductListCart from '../../molecule/ProductList/ProductListCart';

function Cart(props) {
    return(
        <div>{props.cart.length === 0 ? <ProductListEmpty /> : 
                props.cart.map((item, index) => {
                    return(
                        <ProductListCart key={index} index={index} product={item}/>
                    )
                })}
        </div>
    )
}

const mapStateToProps = store => ({ cart: store.cartReducer.cart })
export default connect(mapStateToProps)(Cart)