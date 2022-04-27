import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Styled from "styled-components";
import CalculatorButtons from "./calculatorButtons";
import CalculatorDisplay from "./calculatorDisplay";
import Box from "@mui/material/Box";
import Calc, {
  CalcInput,
  InputType,
  Operation,
  OperatorType,
} from "../modules/mathCalc";

const Grid = Styled.div`
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(4, 80px);
grid-teplate-rows: repeat(5, 80px);
`;

function CalculatorCard() {
  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);

  const appendInput = (input: CalcInput): void => {
    setInputs((prev) => [...prev, input]);
  };

  const handleNumerical = (value: number) => () => {
    appendInput({ type: InputType.Numerical, value });
  };

  const handleOperator = (operator: OperatorType) => () => {
    appendInput({ type: InputType.Operator, operator });
  };

  const handleClear = () => setInputs([]);

  const handleDelete = () => setInputs((prev) => prev.slice(0, -1))

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        "& > :not(style)": {
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
          <CalculatorDisplay label={state.displayValue} />
          <CalculatorButtons styleType="c" label="C" onClick={handleClear} />
          <CalculatorButtons styleType="other" label="(" />
          <CalculatorButtons styleType="other" label=")" />
          <CalculatorButtons
            styleType="other"
            label="x"
            onClick={handleOperator(OperatorType.Multiply)}
          />
          <CalculatorButtons label="7" onClick={handleNumerical(7)} />
          <CalculatorButtons label="8" onClick={handleNumerical(8)} />
          <CalculatorButtons label="9" onClick={handleNumerical(9)} />
          <CalculatorButtons
            styleType="other"
            label="÷"
            onClick={handleOperator(OperatorType.Divide)}
          />
          <CalculatorButtons label="4" onClick={handleNumerical(4)} />
          <CalculatorButtons label="5" onClick={handleNumerical(5)} />
          <CalculatorButtons label="6" onClick={handleNumerical(6)} />
          <CalculatorButtons
            styleType="other"
            label="-"
            onClick={handleOperator(OperatorType.Subtract)}
          />
          <CalculatorButtons label="1" onClick={handleNumerical(1)} />
          <CalculatorButtons label="2" onClick={handleNumerical(2)} />
          <CalculatorButtons label="3" onClick={handleNumerical(3)} />
          <CalculatorButtons
            styleType="other"
            label="+"
            onClick={handleOperator(OperatorType.Add)}
          />
          <CalculatorButtons label="." />
          <CalculatorButtons label="0" onClick={handleNumerical(0)} />
          <CalculatorButtons label="⌫" onClick={handleDelete} />
          <CalculatorButtons
            styleType="big"
            label="="
            onClick={handleOperator(OperatorType.Equals)}
          />
        </Grid>
      </Paper>
    </Box>
  );
}

export default CalculatorCard;
