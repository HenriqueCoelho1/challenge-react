import React from 'react'
import { Route, Switch } from 'react-router'
import Product from '../pages/Product'
import ProductId from '../pages/ProductId'
import Cart from '../pages/Cart'

const Routes = ({ products, cartItems, handleProduct }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Product products={products} handleProduct={handleProduct} />
            </Route>
            <Route path="/product/:id" exact component={Product} />
            <Route path="/cart" exact>
                <Cart cartItems={cartItems} handleProduct={handleProduct} />
            </Route>

        </Switch>
    )
}

export default Routes
