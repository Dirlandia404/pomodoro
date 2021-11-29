import { useState } from "react";
function Clock(props){
    const tempo = 25;
    const [time, setTime] = useState([tempo]);
    return <h1>Hello, {props.tempo}</h1>
}

export default Clock