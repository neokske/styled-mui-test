import React, { useState } from "react";
import ReactDOM from "react-dom";
import TestComp from "./TestComp";

import "./styles.css";

const App = () => <TestComp />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
