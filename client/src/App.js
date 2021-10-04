import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Home from './pages/Home'
import Product from './pages/Product'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

