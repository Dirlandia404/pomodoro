
import { useState } from "react";
import "./componente.css";


function Clock(cronometro,display){
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
   
   /*setInterval(() => {
       minutes = parseInt(time / 60, 10);
       seconds = parseInt(time % 60, 10);

       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;

       display.textContent = minutes + ":"+seconds

       if(--time < 0){
           time  = cronometro;
       }
    }, 1000);
    */


    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">{minutes}:{seconds}</p>
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