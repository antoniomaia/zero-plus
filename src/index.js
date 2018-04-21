import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Header from "./components/common/Header";
import Main from './components/common/Main';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
