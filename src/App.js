import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import './components/organism/Header/Header.css'
import { connect } from 'react-redux';
import { getProducts } from './service/service'

/** Components' */
import Header  from './components/organism/Header/Header'
import ProductsTemplate from './components/template/ProductsTemplate'
import SingleProductTemplate from './components/template/SingleProductTemplate'
import DrawerTemplate from './components/template/DrawerTemplate'

class App extends Component {
  constructor() {
    super()

    this.service = new getProducts()
  }
  
  render() {
    const windowState = this.props.supportWindow

    return (
      <React.Fragment>
        <div className={windowState ? 'app app--is-drawer-visible' : 'app'}> 
          <Header />
          <BrowserRouter>
            <Route path="/" exact={true}>    
              <ProductsTemplate />
            </Route>
            <Route path="/produto" component={SingleProductTemplate} />
            <DrawerTemplate />
          </BrowserRouter>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => ({
  supportWindow: store.windowStateReducer.supportWindow,
})

export default connect(mapStateToProps)(App)
