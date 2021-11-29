
import { useEffect, useState } from "react";
import "./componente.css";


function Clock(){
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [pause, setPause] = useState(false);

    const formatMinutes =  minutes < 10 ? "0" + minutes : minutes;
    const formatSeconds =  seconds < 10 ? "0" + seconds : seconds;

   useEffect(() =>{
       let interval = setInterval(() => {
           if(pause){
               //clearInterval(interval);
               setPause(interval);
               console.log("thhgh");
                if(seconds === 0){
                    if(minutes !== 0){
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else{
                    let seconds = 59;
                        setSeconds(seconds);
                        setMinutes(minutes);
                    }
                }else{
                    setSeconds(seconds - 1)
                }
        }else{
          
        }
    }, 1000);
    }, [seconds]);

    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">{formatMinutes}:{formatSeconds}</p>
                <div className="butoes">
                   {!pause ? <button className="play"  onClick={() =>{setPause(false)}}>
                        <img src="./botao-play.png" alt="" />
                    </button> :
                    <button className="pause"  onClick={() =>{setPause(true)}}>
                        <img src="./pausa.png" alt="" />
                    </button>}

                    <button className="reset" >
                        <img src="./seta-circular.png" alt="" />
                    </button>
                </div>
            </form>
        </main>
    );
}

export default Clock