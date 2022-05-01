import { padding } from "@mui/system";
import React, { FunctionComponent} from "react";
import styled from "styled-components";

const Display = styled.div`
  border-radius: 8px;
  font-size: 48px;
  grid-column-end: span 4;
  color: #B0B8B4FF;
  text-align: right;
  height: 120px;
  padding: 30px 24px;
  margin: 30px 20px;
  overflow: auto;
`;

interface display {
  label: any;
  theme: any
}
const CalculatorDisplay: FunctionComponent<display> = ({label, theme}) => {

  return (
  <Display style={{
    "backgroundColor": `${theme?.palette?.mode === "dark" ? "black": '#FC766AFF'}`,
     
    }}>
     {label} 
  </Display>
  
  );
};

export default CalculatorDisplay;
