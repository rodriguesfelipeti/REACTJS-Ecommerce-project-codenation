import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { useSelector } from 'react-redux';

/** Components' */
import Routes from '../../routes'
import Header  from '../../components/organism/Header/Header'   
import DrawerTemplate from '../Drawer/DrawerTemplate'


function App() {

  const { supportWindow } = useSelector(state => state.windowStateReducer) 
  return (
    <React.Fragment>
      <div className={supportWindow ? 'app app--is-drawer-visible' : 'app'} data-testid="app"> 
        <Header />
        <BrowserRouter>
          <Routes />
          <DrawerTemplate />
        </BrowserRouter>
      </div>
    </React.Fragment>
  )
}

export default App
