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
        margin: 5,
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 450,
          py: 3,
          px: 3,
        },
      }}
    >
    <Paper elevation={3}> 
        <Grid>
          <CalculatorDisplay />
          <CalculatorButtons styleType="c" label="C" />
          <CalculatorButtons styleType="other" label="("/>
          <CalculatorButtons styleType="other" label=")"/>
          <CalculatorButtons styleType="other" label="x"/>
          <CalculatorButtons label="7"/>
          <CalculatorButtons label="8"/>
          <CalculatorButtons label="9"/>
          <CalculatorButtons styleType="other" label="÷"/>
          <CalculatorButtons label="4"/>
          <CalculatorButtons label="5"/>
          <CalculatorButtons label="6"/>
          <CalculatorButtons styleType="other" label="-"/>
          <CalculatorButtons label="1"/>
          <CalculatorButtons label="2"/>
          <CalculatorButtons  label="3"/>
          <CalculatorButtons styleType="other" label="+"/>
          <CalculatorButtons label="."/>
          <CalculatorButtons label="0"/>
          <CalculatorButtons label="⌫" />
          <CalculatorButtons styleType="big" label="="/>
        </Grid>
    </Paper>
    </Box>
    );
};

export default calculatorCard;