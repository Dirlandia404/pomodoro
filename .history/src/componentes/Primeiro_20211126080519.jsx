
import { useEffect, useState } from "react";
import "./componente.css";


function Clock(cronometro,display){
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
   

    const formatMinutes =  minutes < 10 ? "0" + minutes : minutes;
    const formatSeconds =  seconds < 10 ? "0" + seconds : seconds;

   useEffect(() =>{
       let interval = setInterval(() => {
        clearInterval(interval);
        if(seconds === 0){
            if(minutes !== 0){
                setSeconds(59);
                setMinutes(minutes - 1);
            }
        }
 
   
        
     }, 1000);
   }, [seconds]);
   /*
    */


    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">{formatMinutes}:{formatSeconds}</p>
                <div className="butoes">
                    <button className="play" >
                        <img src="./botao-play.png" alt="" />
                    </button>

                    <button className="reset" >
                        <img src="./seta-circular.png" alt="" />
                    </button>
                </div>
            </form>
        </main>
    );
}

export default Clock