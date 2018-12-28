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
        <Button title="Create tenant" url="/create-tenant" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);


kirran