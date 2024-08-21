// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Test from './components/testimonials/Test.jsx'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer.jsx'
import Service from './components/services/Services.jsx'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Test/>
    <Experience/>
    <Service />
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App