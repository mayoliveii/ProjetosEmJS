let hr = min = seg = ms = "0" + 0,
startTimer;

const startBotao = document.querySelector(".start"),
stopBotao = document.querySelector(".stop"),
resetBotao = document.querySelector(".reset");

startBotao.addEventListener("click", start);
stopBotao.addEventListener("click", stop);
resetBotao.addEventListener("click", reset);

function start() {
startBotao.classList.add("active");
stopBotao.classList.remove("stopActive");

startTimer = setInterval(()=>{
  ms++
  ms = ms < 10 ? "0" + ms : ms;

  if(ms == 100){
    seg++;
    seg = seg < 10 ? "0" + seg : seg;
    ms = "0" + 0;
  }
  if(seg == 60){
    min++;
    min = min < 10 ? "0" + min : min;
    seg = "0" + 0;
  }
  if(min == 60){
    hr++;
    hr = hr < 10 ? "0" + hr : hr;
    min = "0" + 0;
  }
  putValue();
},10); //1000ms = 1s

}

function stop() {
startBotao.classList.remove("active");
stopBotao.classList.add("stopActive");
clearInterval(startTimer);
}
function reset() {
startBotao.classList.remove("active");
stopBotao.classList.remove("stopActive");
clearInterval(startTimer);
hr = min = seg = ms = "0" + 0;
putValue();
}

function putValue() {
document.querySelector(".milisegundos").innerText = ms;
document.querySelector(".segundos").innerText = seg;
document.querySelector(".minutos").innerText = min;
document.querySelector(".horas").innerText = hr;
}