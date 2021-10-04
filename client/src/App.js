import React from 'react'
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App

