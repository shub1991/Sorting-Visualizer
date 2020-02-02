import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import Bar from './bar/bar';
import './style.css'

const bars = ({ barArray = [],activeIndex,sortedIndex }) => {
  const barElements = barArray.map((num,index) => (<Bar height={num} key={index} active={activeIndex.includes(index)} sorted={index>=sortedIndex}/>));
  return (
    <div className="container">
      <div className="row">
        {barElements}
      </div>
    </div>
  );
};


export default bars;
