import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { storeSelectedSingleProduct } from '../../../redux/actions';
import { connect } from 'react-redux';
import './Product.css'

import Figure from '../../atom/figure/Figure'

function Product(props) {

    const product = props.product
    
    const handleClick = product => {
        props.storeSelectedSingleProduct(product)
    }

    return(
        <div className="products__box">
            <Link onClick={event => handleClick(product)} to={{ 
                pathname: '/produto',
                productProps: props
            }}>
                <Figure badge={product.discount_percentage} 
                        image={(product.image) ? product.image : "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"} 
                        alt={product.name}/>
                <h3 className="product__name">{product.name}</h3>
                <div className="product__pricing"><span className="product__price product__price--to">{product.actual_price}</span></div>
            </Link>
        </div>
    )
    
}
    
const mapStateToProps = store => ({ storeSelectedSingleProduct: store.windowStateReducer.seletedSingleProduct }); 
const mapDispatchToProps = dispatch => bindActionCreators({ storeSelectedSingleProduct }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Product);
