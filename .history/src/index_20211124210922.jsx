import React from "react";
import ReactDOM from "react-dom";
import Clock from "./componentes/Primeiro";

function App() {
    return(
        <div>
            <Clock name="Dirlandia" />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
)