import { useEffect, useState } from "react";
function Clock(props){
    const tempo = 25;
    const [time, setTime] = useState([tempo]);

    useEffect(() =>{
        const timerId = setInterval(() => tempo, 1000);
        return () => clearInterval(timerId)
    })
    return (
        <>
            <p>{`${time.toString().padStart(2, "0")}`}</p>
         </>  
    );
}

export default Clock