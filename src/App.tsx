import React from "react";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Head"></div>
        <Routes />
        <div className="Footer">Test for Leadster © by Murilo Couto</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
