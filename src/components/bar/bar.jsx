import React from 'react';
import styled from 'styled-components';

const El = styled.div`background-color:blue;
width:25px;
height:${props=>props.height}px;`
const bar = ({height = 0,active,sorted}) => 
{
     const color = sorted?'bg-success':active?'bg-danger':'';
      return( 
      <div className="col">
            {height}<El height={height} className={color}></El>
      </div>
       );
};
export default bar;
