import React, { useState } from 'react';
import CalculatorCard from "./components/CalculatorCard"
import './App.css';
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFound from './components/NotFound';

function App() {
  

  

  return (
    <div>
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<CalculatorCard />} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
      </Container>

    </Router>
    </div>
  );
}

// const RouterPage = (
//   props: { pageComponent: JSX.Element } & RouteComponentProps
// ) => props.pageComponent;

// <Route path="/*" element={NotFound} />

export default App;


