import React from "react";
import ReactDOM from "react-dom";
import Clock from "./componentes/Primeiro";

function App() {
    const  tempo ={time:25};

    return(
        <div className="App">
            <Clock trabalho={tempo} />
        </div>
    );
}
ReactDOM.render(
    <Clock />,
    document.getElementById("root")
)