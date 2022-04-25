import React from "react";
import Paper from '@mui/material/Paper';
import Styled from 'styled-components';
import CalculatorButtons from "./calculatorButtons";
import CalculatorDisplay from "./calculatorDisplay";
import Box from '@mui/material/Box';
import { lightBlue } from "@mui/material/colors";

const Grid = Styled.div`
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(4, 80px);
grid-teplate-rows: repeat(5, 80px);
`;

function calculatorCard(){
    return (
<Box
      sx={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
        background: lightBlue,
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
          padding: 1,
        },
      }}
    >
    <Paper elevation={3}> 
        <Grid>
          <CalculatorDisplay />
          <CalculatorButtons label="C" />
          <CalculatorButtons label="("/>
          <CalculatorButtons label=")"/>
          <CalculatorButtons label="x"/>
          <CalculatorButtons label="√" />
          <CalculatorButtons label="%"/>
          <CalculatorButtons label="±" />
          <CalculatorButtons label="÷"/>
          <CalculatorButtons label="7"/>
          <CalculatorButtons label="8"/>
          <CalculatorButtons label="9"/>
          <CalculatorButtons label="-"/>
          <CalculatorButtons label="4"/>
          <CalculatorButtons label="5"/>
          <CalculatorButtons label="6"/>
          <CalculatorButtons label="+"/>
          <CalculatorButtons label="1"/>
          <CalculatorButtons label="2"/>
          <CalculatorButtons styleType="big" label="3"/>
          <CalculatorButtons label="="/>
          <CalculatorButtons label="."/>
          <CalculatorButtons label="0"/>
          <CalculatorButtons label="⌫" />
          
        </Grid>
    </Paper>
    </Box>
    );
};

export default calculatorCard;