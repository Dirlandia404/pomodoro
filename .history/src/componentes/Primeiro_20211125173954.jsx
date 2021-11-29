
import "./componente.css";


function Clock(props){
  var time = 25;
  var cronometro;

  function start() {
      cronometro = setInterval(() => {timer(); }, 1000);

  }
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