import { useEffect, useState } from "react";
function Clock(props){
    const tempo = 25;
    const [time, setTime] = useState([tempo]);

    const tick = () =>{
        if(time === 0){
            reset();
        }else{
            setTime([tempo -1]);
        }
    }
    const reset = () => setTime(parseInt(tempo));

    useEffect(() =>{
        const timerId = setInterval(() => tick, 60);
        return () => clearInterval(timerId)
    })
    return (
        <>
            <button onClick={() => setTime[time -1]}>{`${time.toString().padStart()}`}</button>
           
         </>  
    );
}

export default Clock