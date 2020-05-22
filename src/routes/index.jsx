import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsRoute from './ProductsRoute/ProductsRoute'
import SingleProductsRoute from './SingleProductsRoute/SingleProductsRoute'

const Routes = () => (
  <Switch>
    <Route path="/" exact={true}>    
        <ProductsRoute />
    </Route>
    <Route path="/produto">
        <SingleProductsRoute />
    </Route>
  </Switch>
);

export default Routes;
