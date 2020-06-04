import React from 'react' 
import { useSelector } from 'react-redux';

import './DrawerTemplate.css'
import HeaderDrower from '../../components/molecule/HeaderDrawer/HeaderDrawer'
import Search from '../../components/organism/Search/Search'
import Cart from '../../components/organism/Cart/Cart'

const DrawerTemplate = () => {

    const { supportWindow } = useSelector(state => state.windowStateReducer)
    return(
        <div className={supportWindow ? 'drawer drawer--is-visible' : 'drawer'}>
            <HeaderDrower>
                <div className="header__title">{supportWindow === 'search' ? 'Buscar Produtos' : 'Sacola (0) '}</div>
            </HeaderDrower>
            <div className="drawer__content">
                {supportWindow === 'search' ? <Search /> : 
                 supportWindow === 'cart' ? <Cart />
                 : false}    
            </div>
        </div>
    )
}
export default DrawerTemplate
  
