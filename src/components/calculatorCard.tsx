import React, { useState } from "react";
import {
  Paper,
  Box,
  Grid,
  Switch,
  ThemeProvider, 
  createTheme
} from "@mui/material";
import CalculatorDisplay from "../components/CalculatorDisplay";
import { buttonArray, operationsArray, numbersArray } from "./ButtonArray";
import styled from "styled-components";

const GDisplay = styled(Grid)`
border: 2px solid black;
color: #B0B8B4FF;
border-radius: 8px;
margin: 1500px;
background-color: #184A45FF;

&:hover {
  cursor: pointer;
}
`


const CalculatorCard = () => {
  const [inputs, setInputs] = useState("0");
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
     mode: darkMode ? "dark" : "light",
    },           
  })

  const replaceLastItemInState = (val: any) => {
    const currentInput = inputs.toString();
    const updatedInput = currentInput.slice(0, -1) + `${val}`;
    setInputs(updatedInput);
    return;
  };

  const appendToState = (val: any) => {
    const currentInput = inputs.toString();
    const updatedInput = currentInput + `${val}`;
    setInputs(updatedInput);
    return;
  };

  const handleResultLogic = () => {
    const lastInputVal = inputs.slice(-1);

    const secondLastInputVal = inputs.slice(-2, -1);

    if (inputs === "0") {
      return;
    }

    if (secondLastInputVal === "/" && lastInputVal === "0") {
      return;
    }

    if(operationsArray?.includes(lastInputVal)){
      if (inputs.length === 1 && operationsArray.includes(inputs)) {
        return;
      }
    }
    

    if (operationsArray.includes(lastInputVal)) {
      return;
    }

    if (numbersArray.includes(lastInputVal)) {
      const result = eval(inputs);
      setInputs(result.toString());
      return;
    }
  };

  const handleButtonclick = (value: any) => {
    if (value === "=") {
      handleResultLogic();
      return;
    }

    if (value === "C" && inputs!== "0"){
      setInputs("0")
      return;
    }

    if (value === "%" && inputs!== "0"){
      const divide:any = inputs;
      setInputs((divide/100).toString())
      return;
    }
    if(value === "√" && inputs !== "0"){
      let squareroot:any = inputs;
      setInputs(Math.sqrt(squareroot).toString())
      return
    }
    if(value === "⌫" && inputs !== "0"){
      setInputs((prev) => (prev.slice(0, -1)))
      return;
    }

    if (inputs.length === 1 && numbersArray.includes(value) && inputs === "0") {
      replaceLastItemInState(value);
      return;
    }
    if (inputs === "0" && value === "-") {
      setInputs(value);
      return;
    }
    if (inputs.length === 1 && operationsArray.includes(inputs)) {
      if (operationsArray.includes(value) && value !== "-") {
        return;
      }
    }

    if (inputs === "0") {
      if (operationsArray.includes(value) && value !== "-") {
        return;
      }
    }

    const lastInputVal = inputs.slice(-1);
    const secondLastInputVal = inputs.slice(-2, -1);
    if (operationsArray.includes(value)) {
      if (value === lastInputVal) {
        return;
      }
      
      if (
        (secondLastInputVal === "/" || secondLastInputVal === "*") &&
        lastInputVal === "-" &&
        operationsArray.includes(value)
      ) {
        return;
      }
      if ((lastInputVal === "*" || lastInputVal === "/") && value === "-") {
        appendToState(value);
        return;
      }

      if (
        operationsArray.includes(lastInputVal) &&
        value !== lastInputVal &&
        operationsArray.includes(value)
      ) {
        replaceLastItemInState(value);
        return;
      } else {
        appendToState(value);
        return;
      }
    }
    if (inputs.length >= 0 && numbersArray.includes(value)) {
      if (inputs === "0") {
        setInputs(value);
        return;
      }
      if (
        operationsArray.includes(secondLastInputVal) &&
        lastInputVal === "0" &&
        numbersArray.includes(value)
      ) {
        replaceLastItemInState(value);
        return;
      }
      appendToState(value);
      return;
    }
  };

  return (
<ThemeProvider  theme={theme}>
<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": {
          width: 400,
          height: 600,
        },
      }}
    >
      <Paper elevation={3}>
        <CalculatorDisplay label={inputs} theme={theme} />
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          spacing={2}
          paddingY={3}
          paddingX={5}
          fontSize={30}
        >
          {buttonArray.map((item, index) => {
            return (
              <GDisplay
                item
                xs={3}
                key={index}
                onClick={() => handleButtonclick(item.value)}
              >
                  {item.value}
                
              </GDisplay>
            );
          })}
        </Grid>
      </Paper>
    </Box>
    </ThemeProvider>
  );
};

export default CalculatorCard;
