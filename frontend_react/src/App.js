import React from 'react'
import './App.scss';
import { Navbar } from './components';
import {About , Footer , Header , Skills , Testimonial , Work } from './container'

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
      <Header></Header>
      <Skills></Skills>
      <Testimonial></Testimonial>
      <Work></Work>
    </div>
  );
}

export default App;