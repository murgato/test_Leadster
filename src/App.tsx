import React from "react";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import logo from "./images/logo.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Head">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Routes />
        <div className="Footer">Test for Leadster © by Murilo Couto</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
