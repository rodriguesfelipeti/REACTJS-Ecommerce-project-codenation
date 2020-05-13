import React from 'react' 
import { connect } from 'react-redux';

import './DrawerTemplate.css'
import '../organism/Header/Header.css'
import HeaderDrower from '../molecule//HeaderDrawer/HeaderDrawer'
import Search from '../organism/Search/Search'
import Cart from '../organism/Cart/Cart'

class DrawerTemplate extends React.Component {

    render() {
        return(
            <div className={this.props.supportWindow ? 'drawer drawer--is-visible' : 'drawer'}>
                <HeaderDrower>
                    <div className="header__title">{this.props.supportWindow === 'search' ? 'Buscar Produtos' : 'Sacola (0) '}</div>
                </HeaderDrower>
                <div className="drawer__content">
                    {this.props.supportWindow === 'search' ? <Search /> : 
                    this.props.supportWindow === 'cart' ? <Cart />
                    : false}    
                </div>
            </div>
        )
    }
}
const mapStateToProps = store => ({ supportWindow: store.windowStateReducer.supportWindow })
export default connect(mapStateToProps)(DrawerTemplate)
  
