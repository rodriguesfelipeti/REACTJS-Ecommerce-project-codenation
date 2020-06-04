import React from 'react'
import { useSelector } from 'react-redux';

import './Search.css'
import ProductListEmpty from '../../molecule/ProductList/ProductListEmpty'
import ProductList from '../../molecule/ProductList/ProductList'
import Input from '../../atom/input/Input'

const Search = (props) =>{

    const { catalog } = useSelector(state => state.productsApiReducer)
    const [resultsData, setResultsData] = React.useState([])

    const handleChange = event => {
        event.preventDefault()

        let resultsData = []
        const str = event.target.value.toLowerCase()

        catalog.map( elemnt => {
            return (elemnt.name.toLowerCase().includes(str)) ? resultsData.push(elemnt) : null
        })

        setResultsData((str.length > 0) ?  resultsData  : [] )
    }


    return(
        <div className="search">
            <div className="search__form">
                <Input className="search__input" type="text" placeholder="Buscar por produto..." handleChange={event => handleChange(event)} />
            </div>
            <div className="product__list">
                {( resultsData.length === 0) ? <ProductListEmpty /> : 
                    resultsData.map( (elemnt, index) => { 
                    return(
                        <ProductList key={index} product={elemnt} />
                    )
                })}
            </div>  

        </div>
    )

}

export default Search