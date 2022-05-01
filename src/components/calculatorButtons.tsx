import React, { FunctionComponent } from "react";
// import Button from "@mui/material/Button";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// // import { buttonArray } from "../hooks/useMathCalc";

// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: "#a9a9a9",
//       contrastText: "#fff",
//     },
//     primary: {
//       main: "#BE302B",
//       contrastText: "#fff",
//     },
//     secondary: {
//       main: "#f07995",
//       contrastText: "#fff",
//     },
//     info: {
//       main: "#Be3B45",
//       contrastText: "#fff",
//     },
//   },
// });

// declare module "@mui/material/styles" {
//   interface Palette {
//     neutral: Palette["primary"];
//   }

//   // allow configuration using `createTheme`
//   interface PaletteOptions {
//     neutral?: PaletteOptions["primary"];
//   }
// }

// // Update the Button's color prop options
// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     neutral: true;
//   }
// }

// const CalculatorButtons = () => {
//   return (
//     // buttonArray.map((item, index) => {
//     //   return(
//     //     <Button
//     //     key={index}

//     //     >
//     //       {item.value}
//     //     </Button>
//     //     )
//     // }
//     <> 
//     <p>ABS</p>
//     </>
//   );
// };

// // const calculatorButtons: FunctionComponent<buttonProps> = ({
// //   label,
// //   styleType,
// //   onClick,
// // }) => {
// //   if (styleType === "big") {
// //     return (
// //       <ThemeProvider  theme={theme}>
// //         <Button onClick={onClick} variant="contained" color="primary">
// //           {label}
// //         </Button>
// //       </ThemeProvider>
// //     );
// //   } else if (styleType === "c") {
// //     return (
// //       <ThemeProvider theme={theme}>
// //         <Button onClick={onClick} variant="contained" color="info">
// //           {label}
// //         </Button>
// //       </ThemeProvider>
// //     );
// //   } else if (styleType === "other") {
// //     return (
// //       <ThemeProvider theme={theme}>
// //         <Button onClick={onClick} variant="contained" color="secondary">
// //           {label}
// //         </Button>
// //       </ThemeProvider>
// //     );
// //   }
// //   return (
// //     //variant="contained" color={styleType === "big" ? "success" : undefined}
// //     <ThemeProvider theme={theme}>
// //       <Button onClick={onClick} variant="contained" color="neutral">
// //         {label}
// //       </Button>
// //     </ThemeProvider>

// //   );
// // };

// export default CalculatorButtons;
