import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/common/Header";
import Main from './components/common/Main';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Route path="/" component={Main} />
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
