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

    function ClickTeste(){
        console.log("Clicou")
    }


    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">25:00</p>
                <div className="butoes">
                    <button className="play" onClick="Clock();">
                        <img src="./botao-play.png" alt="" />
                    </button>

                    <button className="reset">
                        <img src="./seta-circular.png" alt="" />
                    </button>
                </div>
            </form>
        </main>
    );
}

export default Clock