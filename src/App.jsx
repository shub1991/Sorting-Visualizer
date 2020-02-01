/* eslint-disable*/
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BubbleSort from '../src/algorithms/bubbleSort';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <BubbleSort/>
      <Footer/>
    </div>

  );
}

export default App;
