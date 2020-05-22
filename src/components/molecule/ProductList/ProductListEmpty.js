import React from 'react'
import { connect } from 'react-redux';


function ProductListEmpty(props) {
    return(
        <span className="cart__empty">{props.supportWindow === "search" ? "Nenhum item encontrado :(" :
                                        props.supportWindow === "cart" ? "Sua sacola está vazia :(" : false } 
        </span>
    )
}

const mapStateToProps = store => ({ supportWindow: store.windowStateReducer.supportWindow })
export default connect( mapStateToProps )(ProductListEmpty)