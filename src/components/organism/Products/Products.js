import React from 'react'
import './Products.css'
import { bindActionCreators } from 'redux';
import { productsApiReducer  } from '../../../redux/actions'
import { connect } from 'react-redux';

/** Components */
import Product from '../../molecule/Product/Product'

class Products extends React.Component {

    async componentDidMount() {
        await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => { this.props.productsApiReducer(res) })
    }

    checkApiProdcts() {
        return (this.props.catalogStore !== null) ? true : false
    }

    render() {
        return(
            <section className="products">
                <div className="app__container">
                    <div className="products__grid">
                        { (this.props.catalogStore !== null) ? 
                            this.props.catalogStore.map( (product, index) => {    
                                return(<Product key={index} product={product} />)
                            } ) : false
                        }
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = store => ({ catalogStore: store.productsApiReducer.catalog })
const mapDispatchToProps = dispatch => bindActionCreators({ productsApiReducer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products)