import React from "react";
import ReactDOM from "react-dom";
import Clock from "./componentes/Primeiro";

function App() {
    return(
        <div className="App">
            <Clock />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
)