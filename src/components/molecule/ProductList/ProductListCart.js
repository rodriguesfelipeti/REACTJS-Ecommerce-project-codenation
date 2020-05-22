import React from 'react'
import { bindActionCreators } from 'redux';
import { cartReducer, incrementCart, decrementCart, removeItemCart } from '../../../redux/actions';
import { connect } from 'react-redux';

import Button from '../../atom/button/Button'
import Figure from '../../atom/figure/Figure'

function ProductListCart(props) {
    
    const product = props.product

    const addQtdCartItem = (event, index) => {
        event.preventDefault()

        props.incrementCart(index)
    }
    
    const removeQtdCartItem = (event, index) => {
        event.preventDefault()
    
        props.decrementCart(index)
    }

    const removeCartItem = (event, index) => {
        event.preventDefault()

        props.removeItemCart(index)
    }   

    const formatTotalPrice = value => {
        const total = parseFloat(value).toFixed(2)
        return total.replace('.', ',')
    }

    return(
            <div className="cart">
            <div className="product__list">
                <div className="product__list__item">
                    <div className="product__list__row">
                        <Figure image={product.image} alt={product.name}/>
                        <div className="product__list__info">
                            <p className="product__list__name">{product.name}</p>
                            <p className="product__list__size"><span>{product.sizeSelected}</span></p>
                            <div className="product__list__quantity">
                                <Button className="cart__icons" handleClick={event => removeQtdCartItem(event, props.index)}>
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    <canvas height="0" width="0" styles="border-radius: inherit; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"></canvas>
                                </Button>
                                <div className="product__list__input">{product.qtd}</div>
                                <Button className="cart__icons" handleClick={event => addQtdCartItem(event, props.index)}>
                                    <svg stroke="currentColor" fill="   none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    <canvas height="0" width="0" styles="border-radius: inherit; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"></canvas>
                                </Button>
                            </div>
                        </div>
                        <div className="product__list__pricing">    
                            <div className="product__list__current">{product.actual_price}</div>
                            <div className="product__list__installments">{product.installments}</div>
                        </div>
                    </div>
                    <div className="product__row">
                        <Button className="cart__remove" titleButton="Remover item" handleClick={event => removeCartItem(event, props.index)}>
                            <canvas height="0" width="0" styles="border-radius: inherit; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"></canvas>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="cart__subtotal"><div className="header__title">Subtotal - R$ { formatTotalPrice(props.totalCart) }</div></div>
        </div> 
            
    )
} 

const mapStateToProps = store => ({ cart: store.cartReducer.cart, totalCart: store.cartReducer.totalCart })
const mapDispatchToProps = dispatch => bindActionCreators({ cartReducer, incrementCart, removeItemCart, decrementCart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductListCart);
  
  