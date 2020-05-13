import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { storeSelectedSingleProduct } from '../../../redux/actions';
import { connect } from 'react-redux';
import './Product.css'

import Figure from '../../atom/figure/Figure'

class Product extends React.Component {
    constructor(product) {
        super(product)

        this.product = this.props.product
    }
    
    handleClick = (event, product) => {
        
        this.props.storeSelectedSingleProduct(product)
    }
    
    render() {

        return(
            <div className="products__box">
                <Link onClick={event => this.handleClick(event, this.product)} to={{ 
                    pathname: '/produto',
                    productProps: this.props
                }}>
                    <Figure badge={this.product.discount_percentage} 
                            image={(this.product.image) ? this.product.image : "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"} 
                            alt={this.product.name}/>
                    <h3 className="product__name">{this.product.name}</h3>
                    <div className="product__pricing"><span className="product__price product__price--to">{this.product.actual_price}</span></div>
                </Link>
            </div>
        )
    }
}
    
const mapStateToProps = store => ({ storeSelectedSingleProduct: store.windowStateReducer.seletedSingleProduct }); 
const mapDispatchToProps = dispatch => bindActionCreators({ storeSelectedSingleProduct }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Product);
