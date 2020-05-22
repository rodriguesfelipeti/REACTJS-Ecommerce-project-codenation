import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import './components/organism/Header/Header.css'
import { connect } from 'react-redux';

/** Components' */
import Header  from './components/organism/Header/Header'
import ProductsTemplate from './components/template/ProductsTemplate'
import SingleProductTemplate from './components/template/SingleProductTemplate'
import DrawerTemplate from './components/template/DrawerTemplate'

function App(state) {
  return (
    <React.Fragment>
      <div className={state.supportWindow ? 'app app--is-drawer-visible' : 'app'} data-testid="app"> 
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

const mapStateToProps = store => ({ 
  supportWindow: store.windowStateReducer.supportWindow,
})

export default connect(mapStateToProps)(App)
