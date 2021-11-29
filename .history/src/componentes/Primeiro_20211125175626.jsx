
import "./componente.css";


function Clock(cronometro, props){
  var time =  cronometro, minutes, seconds;

   setInterval(() => {
       minutes = parseInt(time / 60, 10);
       seconds = parseInt(time % 60, 10);

       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;

       props.textContent = minutes + ":"+seconds

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

  window.onload = function() {
    var cronometro = 60 * 25;
    var display = document.querySelector("#time");

    Clock(cronometro, display)
}

  


    return (
        <main>
            <form action="">
                <img src="/tomato.svg" alt="Tomate" />
                <p className="time">{}</p>
                <div className="butoes">
                    <button className="play" >
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