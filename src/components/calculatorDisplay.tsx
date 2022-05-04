import React, { FunctionComponent} from "react";
import styled from "styled-components";

const Display = styled.div`
  border-radius: 8px;
  font-size: 48px;
  grid-column-end: span 4;
  color: #030e12;
  text-align: right;
  height: 120px;
  padding: 30px 24px;
  margin: 30px 29px;
  overflow: auto;
`;

interface display {
  label: any;
  theme: any
}
const CalculatorDisplay: FunctionComponent<display> = ({label, theme}) => {

  return (
  <Display style={{
    "backgroundColor": `${theme?.palette?.mode === "dark" ? "#064663": '#5bccf6'}`,
     "color": `${theme?. palette?.mode === "dark"? "#ECB365" : "#030e12"}`
    }}>
     {label} 
  </Display>
  
  );
};

export default CalculatorDisplay;
