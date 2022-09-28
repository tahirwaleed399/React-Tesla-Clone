import React from 'react';
import { IoArrowDown } from "react-icons/io5";
import styled from 'styled-components';

const BouncingArrow = () => {
  return (
    <div>
<ArrowDown className='bounce'>
<IoArrowDown style={{
  fill: "#fff",
  color:"#fff"
}}></IoArrowDown>
</ArrowDown>
        
    </div>
  )
}

export default BouncingArrow

const ArrowDown = styled.div`
margin-top:40px;
animation : 
`