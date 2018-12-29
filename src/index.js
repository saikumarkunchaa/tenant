import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import "./styles.css";
import Routes from "./routes";
import Header from "./components/header";
export default function App() {
  return (
    <div id="wrapper">
      <Header />
      <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Add Tenant</h1>
                </div>
            </div>
        <Routes />
        </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);