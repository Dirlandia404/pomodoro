import { useEffect, useState } from "react";
function Clock(props){
    const tempo = 25;
    const [time, setTime] = useState([tempo]);

    useEffect(() =>{
        const timerId = setInterval(() => tempo, 1000);
        return () => clearInterval(timerId)
    })
    return <h1>Hello, {props.tempo}</h1>
}

export default Clock