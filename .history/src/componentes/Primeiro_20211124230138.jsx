import { useEffect, useState } from "react";
import "./componente.css";
import Img from "react-images"
import Tomate from "./tomato.svg"

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
                <img src="./" alt="" />
            </form>
           <p>Dirlandia</p>
        </main>
    );
}

export default Clock