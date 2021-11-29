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
        const timerId = setInterval(() => tempo, 1);
        return () => clearInterval(timerId)
    })
    return (
        <>
            <p>{`${time.toString().padStart()}`}</p>
         </>  
    );
}

export default Clock