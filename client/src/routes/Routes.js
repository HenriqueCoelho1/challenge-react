import React from 'react'
import { Route, Switch } from 'react-router'
import Product from '../pages/Product'
import Cart from '../pages/Cart'

const Routes = ({ products, cartItems, handleProduct, handleRemove }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Product products={products} handleProduct={handleProduct} />
            </Route>
            <Route path="/product/:id" exact component={Product} />
            <Route path="/cart" exact>
                <Cart cartItems={cartItems} handleProduct={handleProduct} handleRemove={handleRemove} />
            </Route>

        </Switch>
    )
}

export default Routes
