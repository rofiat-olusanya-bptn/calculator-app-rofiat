import React from "react";
import styled from "styled-components";


const Display = styled.div `
background: #F93822ff;
border-radius: 8px;
font-size: 48px;
grid-column-end: span 4;
text-align: right;
height: 120px;
margin-left: 15px;
padding: 30px 24px;
`;

const calculatorDisplay = () =>{
    return(
        <Display> 42 </Display>
    )
}

export default calculatorDisplay;