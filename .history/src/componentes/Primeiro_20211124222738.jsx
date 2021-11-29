import { useEffect, useState } from "react";
function Clock(props){
    const tempo = 25;
    const [time, setTime] = useState([tempo]);

    const tick = () =>{
        setTime([tempo -1]);
    }
    useEffect(() =>{
        const timerId = setInterval(() => tempo, 1);
        return () => clearInterval(timerId)
    })
    return (
        <>
            <button onClick={() => tick()}>Butao</button>
            <p>{time}</p>
         </>  
    );
}

export default Clock