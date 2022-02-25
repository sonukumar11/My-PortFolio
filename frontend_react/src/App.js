import React from 'react'
import './App.scss';
import { Navbar } from './components';
import {About , Footer , Header , Skills , Testimonial , Work } from './container'

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Footer></Footer>
      <Skills></Skills>
      <Testimonial></Testimonial>
      <Work></Work>
    </div>
  );
}

export default App;