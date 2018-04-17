import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Header from "./components/common/Header";
import Upload from './components/common/Upload';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={Upload} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
