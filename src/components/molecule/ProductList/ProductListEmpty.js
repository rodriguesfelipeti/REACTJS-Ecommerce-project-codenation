import React from 'react'
import { connect } from 'react-redux';


class ProductListEmpty extends React.Component {
    render() {
        return(
            <span className="cart__empty">{this.props.supportWindow === "search" ? "Nenhum item encontrado :(" :
                                            this.props.supportWindow === "cart" ? "Sua sacola está vazia :(" : false } 
            </span>
        )
    }
}

const mapStateToProps = store => ({ supportWindow: store.windowStateReducer.supportWindow })
export default connect( mapStateToProps )(ProductListEmpty)