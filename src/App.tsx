import Typography from "@mui/material/Typography/Typography";
import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Shapes from "./Components/Shapes";

import { useAppDispatch, useAppSelector } from "./store/hooks";

import { Articles } from "./types";

function App() {
  return (
    <>
      <div className="App">
        <Typography>Круги и квадраты, v.1.0</Typography>
        <Header />
        <Shapes />
      </div>
    </>
  );
}

export default App;
