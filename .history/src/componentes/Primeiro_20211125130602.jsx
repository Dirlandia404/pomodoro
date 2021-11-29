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

    const Teste= () =>{
        console.log(time);
        while(setTime > 0){
                setTime([time -1]);
        }
    }
    function Click(){
        var time = 25;
        var intervalo = window.setInterval(function(){
            document.getElementById("txt").textContent = time;
            time--;
        }, 1000);

        setTimeout(function(){
            clearInterval(intervalo);
        document.getElementById("fig").innerHTML = ""
        }, 5000);
    }


    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">25:00</p>
                <div className="butoes">
                    <button className="play" onClick="Click()">
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