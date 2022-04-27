// Calculator Brain:
// Input will be user input
// generate {state}

// create object that holds exisiting input tpes on page
export enum InputType {
  Numerical,
  Operator,
}

export enum OperatorType {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
  Equals = "equals",
}

export type CalcInput =
  | { type: InputType.Numerical; value: number }
  | { type: InputType.Operator; operator: OperatorType };

//  create a type that shows the state of calculator
export type CalcState = {
  displayValue: number;
};

// create a type that holds the operations
export type Operation = {
  operator: OperatorType;
  value: number;
};

// create operations builder that holds the operations list
export type OperationsBuilder = {
  operations: Operation[];
  working: Operation;
};

// There are single operations and it needs to be turned into real numbers. map?? reduce??
// Create a function that takes an array of calculation inputs and returns them as an array of operations
const getOperationsBuilder = (inputs: Array<CalcInput>): OperationsBuilder => {
  return inputs.reduce<OperationsBuilder>(
    (builder, input) => {
      switch (input.type) {
        case InputType.Numerical:
          const prevValue = builder.working?.value || 0;
          const newValue = prevValue * 10 + input.value;
          return {
            ...builder,
            working: { ...builder.working, value: newValue },
          };

        case InputType.Operator:
          if (input.operator === OperatorType.Equals) {
            return {
              operations: [
                ...builder.operations,
                builder.working,
                { operator: OperatorType.Equals, value: 0 },
              ],
              working: { operator: OperatorType.Add, value: 0 },
            };
          } else {
            return {
              operations: [...builder.operations, builder.working],
              working: { operator: input.operator, value: 0 },
            };
          }
      }
    },
    {
      operations: [],
      working: { operator: OperatorType.Add, value: 0 },
    }
  );
};

const getTotal = (operations: Array<Operation>): number =>
  operations.reduce<number>((sum, operation) => {
    switch (operation.operator) {
      case OperatorType.Add:
        return sum + operation.value;

      case OperatorType.Subtract:
        return sum - operation.value;

      case OperatorType.Multiply:
        return sum * operation.value;

      case OperatorType.Divide:
        return sum / operation.value;

      case OperatorType.Equals:
        return sum;
    }
  }, 0);

// Function accepts an array of calc inputs and returns the calc state
const getState = (inputs: Array<CalcInput>): CalcState => {
  const builder = getOperationsBuilder(inputs);
  const { operations } = builder;
  const lastOperation = operations.length
    ? operations[operations.length - 1]
    : null;
  if (!lastOperation) return { displayValue: builder.working.value };

  const lastInput = inputs.length ? inputs[inputs.length - 1] : null;
  const total = getTotal(operations);

  switch (lastOperation.operator) {
    case OperatorType.Equals:
      return { displayValue: total };

    default:
      return {
        displayValue:
          lastInput && lastInput.type === InputType.Numerical
            ? builder.working.value
            : total,
      };
  }
};

// This object will Holds all functions
const mathCalc = {
  getOperationsBuilder,
  getState,
};

export default mathCalc;
