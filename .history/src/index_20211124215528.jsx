import React from "react";
import ReactDOM from "react-dom";
import Clock from "./componentes/Primeiro";

function App() {
    const  trabalho = 25;
    const descanso = 5;

    return(
        <div className="App">
            <Clock trabalho={trabalho} />
            <Clock trabalho={descanso} />
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
)