/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../bar/bar';

const bars = ({ barArray = [],activeIndex }) => {
  const barElements = barArray.map((num,index) => (<Bar height={num} active={activeIndex===index} />));
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
