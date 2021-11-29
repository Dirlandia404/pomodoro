
import "./componente.css";


function Clock(props){
  var time =minutes, seconds;
  var cronometro;

   setInterval(() => {
       minutes = parseInt(timer / 60, 10);
       seconds = parseInt(timer % 60, 10);

       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);


  function pause() {
      clearInterval(cronometro);
  }
  function restart(){
      clearInterval(cronometro);
      time = 0;
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
                <p className="time">25:00</p>
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