import React from 'react';
import styled from 'styled-components';
import './style.css'
const El = styled.div`background-color:#FEDC33;
width:25px;
height:${props=>props.height}px;`


const bar = ({height = 0,active,sorted}) => 
{
     const color = sorted?'bg-success':active?'bg-danger':'';
     const test = active?' some':''
     const some = 'col'+test;
      return( 
      <div className={some}>
            {height}<El height={height} className={color}></El>
      </div>
       );
};
export default bar;
