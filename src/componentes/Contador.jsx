import { useEffect, useState, useMemo, useCallback } from "react";
import "./componente.css";

function Clock() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState(true);
  const [active, setActive] = useState(true);

  const audio = useMemo(() => new Audio("notification.wav"), []);

  // Função para iniciar o temporizador
  const startTimer = useCallback(() => {
    const interval = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(interval); // Para o temporizador quando chegar a 0
        audio.play();
        setPause(true);
        return;
      }

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes((prevMinutes) => prevMinutes - 1);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return interval;
  }, [seconds, minutes, audio]);

  useEffect(() => {
    let interval;
    if (!pause) {
      interval = startTimer();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Limpeza do intervalo
  }, [pause, startTimer]);

  const handlePlay = () => {
    setPause(false);
    if (minutes === 0 && seconds === 0) {
      if (active) {
        setMinutes(5); // Inicia com 5 minutos quando o tempo estiver zerado
      } else {
        setMinutes(25); // Reinicia com 25 minutos se o ciclo anterior foi de 5 minutos
      }
      setActive(!active);
    }
  };

  const formatTime = (time) => (time < 10 ? "0" + time : time);

  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
    setPause(true);
  };

  return (
    <main>
      <div className="caixa">
        <img src="/tomato.svg" alt="Tomate" />
        <p className="time">
          {formatTime(minutes)}:{formatTime(seconds)}
        </p>
        <div className="butoes">
          {pause ? (
            <button className="play" onClick={handlePlay}>
              <img src="./botao-play.png" alt="play" />
            </button>
          ) : (
            <button className="pause" onClick={() => setPause(true)}>
              <img src="./pausa.png" alt="pausar" />
            </button>
          )}

          <button className="reset" onClick={handleReset}>
            <img src="./seta-circular.png" alt="reset" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Clock;
