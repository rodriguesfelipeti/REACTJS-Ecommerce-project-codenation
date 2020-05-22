import React from 'react'
import { windowStateReducer, storeSelectedSingleProduct  } from '../../../redux/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom'
import Figure from '../../atom/figure/Figure'

function ProductList(props) {
    
    const product = props.product
    const handleClick = product => {
        if(props.supportWindow) {
            props.windowStateReducer(false)
          }
        props.storeSelectedSingleProduct(product)
    }

    return(
        <Link onClick={ () => handleClick(product)} to={{
            pathname: '/produto',
            productProps: product
        }}>
            <div className="product__list__item">
                <div className="product__list__row">
                    <Figure image={product.image} alt={product.name} />
                    <div className="product__list__info">
                        <p className="product__list__name">{product.name}</p>
                        <p className="product__list__size"></p>
                    </div>
                    <div className="product__list__pricing">
                        <div className="product__list__current">{product.actual_price}</div>
                        <div className="product__list__installments">{product.installments}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const mapStateToProps = store => ({ supportWindow: store.windowStateReducer.supportWindow, storeSelectedSingleProduct: store.windowStateReducer.seletedSingleProduct })
const mapDispatchToProps = dispatch => bindActionCreators({ windowStateReducer , storeSelectedSingleProduct }, dispatch);
export default connect( mapStateToProps , mapDispatchToProps )(ProductList)