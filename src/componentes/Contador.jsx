import { useEffect, useState, useMemo } from "react";
import "./componente.css";

function Clock() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState(true);
  const [active, setActive] = useState(true);

  const audio = useMemo(() => new Audio("notification.wav"), []);

  useEffect(() => {
    let interval;
    if (!pause) {
      interval = setInterval(() => {
        // clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let seconds = 59;
            setSeconds(seconds);
            setMinutes(minutes);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (minutes === 0 && seconds === 0) {
      audio.play();
      setPause(true);
    } else audio.pause();

    return () => clearInterval(interval);
  }, [seconds, minutes, pause, audio]);

  function handlePlay() {
    setPause(false);
    if (minutes === 0 && seconds === 0) {
      if (active) setMinutes(5);
      else setMinutes(25);
      setActive(!active);
    }
  }

  const formatMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formatSeconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <main>
      <div className="caixa">
        <img src="/tomato.svg" alt="Tomate" />
        <p className="time">
          {formatMinutes}:{formatSeconds}
        </p>
        <div className="butoes">
          {pause ? (
            <button
              className="play"
              onClick={() => {
                handlePlay();
              }}
            >
              <img src="./botao-play.png" alt="play" />
            </button>
          ) : (
            <button
              className="pause"
              onClick={() => {
                setPause(true);
              }}
            >
              <img src="./pausa.png" alt="pausar" />
            </button>
          )}

          <button
            className="reset"
            onClick={() => {
              setMinutes(25);
              setSeconds(0);
              setPause(true);
            }}
          >
            <img src="./seta-circular.png" alt="" />
          </button>
        </div>
      </div>
    </main>
  );
}
export default Clock;
