import React from "react";
import ReactDOM from "react-dom";
import Clock from "./componentes/Primeiro";

function App() {
    const  tempo = 25;

    return(
        <div className="App">
            <Clock trabalho={tempo} />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
)