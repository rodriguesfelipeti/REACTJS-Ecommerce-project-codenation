import React from 'react'
import { useSelector } from 'react-redux';


const ProductListEmpty = () => {

    const { supportWindow } = useSelector(state => state.windowStateReducer)

    return(
        <span className="cart__empty">{ supportWindow === "search" ? "Nenhum item encontrado :(" :
                                        supportWindow === "cart" ? "Sua sacola está vazia :(" : false } 
        </span>
    )
}

export default ProductListEmpty