/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../bar/bar';

const bars = ({ barArray = [],activeIndex,sortedIndex }) => {
  console.log(sortedIndex);
  const barElements = barArray.map((num,index) => (<Bar height={num} key={index} active={activeIndex.includes(index)} sorted={index>=sortedIndex}/>));
  return (
    <div className="container">
      <div className="row">
         {barElements}
      </div>
    </div>
  );
};

bars.propTypes = {
  barArray:PropTypes.array,
  activeIndex:PropTypes.number
};

export default bars;
