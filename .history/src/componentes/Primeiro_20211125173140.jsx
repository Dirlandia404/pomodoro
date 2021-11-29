import { useEffect, useState } from "react";
import "./componente.css";


function Clock(props){
  const [time, setTime] = useState(25);

  function start() {
      const cronometro = setInterval(() => {timer(); }, 1000);

  }

  function timer(){
      time--;

  }
 


    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">25:00</p>
                <div className="butoes">
                    <button className="play" onClick="useEffect()">
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