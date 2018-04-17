import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Header from "./components/common/Header";
import DataParser from "./components/data/DataParser";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={DataParser} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
