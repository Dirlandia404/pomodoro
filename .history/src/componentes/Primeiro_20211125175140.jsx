
import "./componente.css";


function Clock(cronometro, props){
  var time =  cronometro, minutes, seconds;

   setInterval(() => {
       minutes = parseInt(timer / 60, 10);
       seconds = parseInt(timer % 60, 10);

       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;

       display.textContent = minutes + ":"+seconds

       if(--time < 0){
           time  = cronometro;
       }
    }, 1000);


  function pause() {
      clearInterval(cronometro);
  }
  function restart(){
      clearInterval(cronometro);
      minutes = 25;
      seconds = 0;
  }

  function timer(){
      time--;
      console.log(time);
      document.getElementById('counter').innerText = time;

  }
 


    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">{}</p>
                <div className="butoes">
                    <button className="play" onClick={start()}>
                        <img src="./botao-play.png" alt="" />
                    </button>

                    <button className="reset" onClick={pause()}>
                        <img src="./seta-circular.png" alt="" />
                    </button>
                </div>
            </form>
        </main>
    );
}

export default Clock