import React from 'react'
import { connect } from 'react-redux';

import './Search.css'
import ProductListEmpty from '../../molecule/ProductList/ProductListEmpty'
import ProductList from '../../molecule/ProductList/ProductList'
import Input from '../../atom/input/Input'

class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            resultsData: []
        } 
    }

    handleChange = event => {
        event.preventDefault()

        let resultsData = []
        const productStore = this.props.catalogStore
        const str = event.target.value.toLowerCase()

        productStore.map( elemnt => {
            return (elemnt.name.toLowerCase().includes(str)) ? resultsData.push(elemnt) : null
        })

        this.setState((str.length > 0) ? { resultsData: resultsData } : { resultsData: [] })
    }

    render() {
    
        return(
            <div className="search">
                <div className="search__form">
                    <Input className="search__input" type="text" placeholder="Buscar por produto..." handleChange={event => this.handleChange(event)} />
                </div>
                <div className="product__list">
                    {(this.state.resultsData.length === 0) ? <ProductListEmpty /> : 
                     this.state.resultsData.map( (elemnt, index) => { 
                        return(
                            <ProductList key={index} product={elemnt} />
                        )
                    })}
                </div>  

            </div>
        )
    }
}

const mapStateToProps = store => ({ catalogStore: store.productsApiReducer.catalog })
export default connect(mapStateToProps)(Search)