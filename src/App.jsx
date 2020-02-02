/* eslint-disable*/
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BubbleSort from '../src/algorithms/bubbleSort';
import Footer from './components/footer/footer';
import Header from './components/header/header'

function App() {
  return (
    <div style={{background:"bg-light"}}>
      <Header/>
      <BubbleSort/>
      <Footer/>
    </div>

  );
}

export default App;
