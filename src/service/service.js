import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productsApiReducer } from '../redux/actions'


export class getProducts {

    async getProducts()  {
    
        // For now, consider the data is stored on a static `users.json` file
        return await fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
                // the JSON body is taken from the response
                .then(res => res.json())
                .then(res => { productsApiReducer(res) })
    }

}
const mapDispatchToProps = dispatch => bindActionCreators({ productsApiReducer }, dispatch);
connect(mapDispatchToProps)(getProducts)


