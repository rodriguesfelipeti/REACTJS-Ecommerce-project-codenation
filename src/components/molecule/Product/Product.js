import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { storeSelectedSingleProduct } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import './Product.css'

import Figure from '../../atom/figure/Figure'

const Product = (props) => {

    const [product, setProduct] = useState({})
    
    useEffect(() => {
        setProduct(props.product)
    },[props.product])

    const dispatch = useDispatch()
    const handleClick = product => {
        dispatch(storeSelectedSingleProduct(product))
    }

    return(
        <div className="products__box" data-testid="products__box">
            <Link onClick={() => handleClick(product)} to={{ 
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
    
export default Product;
