import { useEffect, useState } from "react";
function Clock(props){
  const [time, setTime] = useState(25);

    const tick = () =>{
        if(time === 0){
            reset();
        }else{
            setTime([time -1]);
        }
    }
    const reset = () => setTime(parseInt(time));

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