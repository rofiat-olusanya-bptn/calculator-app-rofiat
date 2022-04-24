import React from "react";
import Paper from '@mui/material/Paper';
import Styled from 'styled-components';
import CalculatorButtons from "./calculatorButtons";
import Box from '@mui/material/Box';

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
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 200,
          padding: 1,
        },
      }}
    >
    <Paper elevation={3} square> 
        <Grid>
          <CalculatorButtons label="9" />
          <CalculatorButtons label="8"/>
          <CalculatorButtons label="7"/>
          <CalculatorButtons label="6"/>
          <CalculatorButtons label="5"/>
          <CalculatorButtons label="4"/>
          <CalculatorButtons label="3"/>
          <CalculatorButtons label="2"/>
          <CalculatorButtons label="1"/>
          <CalculatorButtons label="0"/>
          <CalculatorButtons label="."/>
        </Grid>
    </Paper>
    </Box>
    );
};

export default calculatorCard;