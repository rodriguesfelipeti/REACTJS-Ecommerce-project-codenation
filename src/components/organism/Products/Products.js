import React, { useEffect } from 'react'
import { productsApiReducer  } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import './Products.css'

/** Components */
import Product from '../../molecule/Product/Product'

function Products() {

    const dispatch = useDispatch()
    const { catalog } = useSelector( store => store.productsApiReducer )

     useEffect(() => {
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then(res => res.json())
        .then(res => { dispatch(productsApiReducer(res)) })
    }, [dispatch])

    return(
        <section className="products" data-testid="products">
            <div className="app__container">
                <div className="products__grid">
                    { (catalog !== null) ? 
                        catalog.map( (product, index) => {    
                            return(<Product key={index} product={product} />)
                        } ) : false
                    }
                </div>
            </div>
        </section>
    )
}

export default Products