import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'
import Routes from './routes/Routes'
import products from './data/products'
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'

const App = () => {
  const [cartItems, setCartItems] = useState([])

  function handleProduct(product) {
    const productExist = cartItems.find((p) => p._id === product._id)

    console.log(productExist)
    if (productExist) {
      setCartItems(cartItems.map(p => p._id === product._id ?
        { ...productExist, quantity: productExist.quantity + 1 } : p))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }

  }

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes products={products} cartItems={cartItems} handleProduct={handleProduct} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

