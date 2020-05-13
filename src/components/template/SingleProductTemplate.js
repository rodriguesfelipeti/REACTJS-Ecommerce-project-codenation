import React from 'react'
import SingleProduct from '../organism/SingleProduct/SingleProduct'

class SingleProductTemplate extends React.Component {

    render() {
        return(
          // <SingleProduct product={this.props.location.productProps.product}/>
          <SingleProduct product={this.props.location.productProps}/>
        )
    }
}
    
export default SingleProductTemplate