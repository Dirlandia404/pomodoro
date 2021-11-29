import { useEffect, useState } from "react";
import "./componente.css";

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
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p class="time">25:00</p>
                <button>
                    Play
                </button>
            </form>
           <p >Dirlandia</p>
        </main>
    );
}

export default Clock