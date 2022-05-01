
export interface Button  {
    name: string;
    value: string;
    type: string;
  }

const buttonArray: Button[] = [
    {name: "clear", value: "C", type:"operation"},
    {name: "percentage", value: "%", type:"operation"},
    {name: "squareroot", value: "√", type:"operation"},
    {name: "add", value: "+", type:"operation"},
    {name: "numerical", value: "7", type:"number"},
    {name: "numerical", value: "8", type:"number"},
    {name: "numerical", value: "9", type:"number"},
    {name: "minus", value: "-", type:"operation"},
    {name: "numerical", value: "4", type:"number"},
    {name: "numerical", value: "5", type:"number"},
    {name: "numerical", value: "6", type:"number"},    
    {name: "multiply", value: "*", type:"operation"},
    {name: "numerical", value: "1", type:"number"},
    {name: "numerical", value: "2", type:"number"},
    {name: "numerical", value: "3", type:"number"},
    {name: "divide", value: "/", type:"operation"},
    {name: "numerical", value: "0", type:"number"},
    {name: "dot", value: ".", type:"number"},
    {name: "backspace", value: "⌫", type:"operation"},
    {name: "equals", value: "=", type:"operation"},
  ]

  const operationsArray:any = []
  const numbersArray:any = []
  buttonArray.forEach((item) => {
    if(item.type === "operation"){
      operationsArray.push (item.value)
    } else if(item.type==="number"){
      numbersArray.push(item.value)
    }
  });

  export {buttonArray, operationsArray, numbersArray};