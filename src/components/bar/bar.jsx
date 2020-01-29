import React from 'react';
import styled from 'styled-components';

const El = styled.div`background-color:blue;
width:25px;
height:${props=>props.height}px;`
const bar = ({height = 0,active}) => 
        <div className="col">
            {height}<El height={height} className={active?'bg-success':''}></El>
        </div>
   ;
export default bar;
