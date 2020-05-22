import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';

/** Components' */
import Routes from '../../routes'
import Header  from '../../components/organism/Header/Header'
import DrawerTemplate from '../Drawer/DrawerTemplate'

function App(state) {
  return (
    <React.Fragment>
      <div className={state.supportWindow ? 'app app--is-drawer-visible' : 'app'} data-testid="app"> 
        <Header />
        <BrowserRouter>
          <Routes />
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
