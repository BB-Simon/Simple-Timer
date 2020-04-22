window.onload = function(){
  const count = document.getElementById("count");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const reset = document.getElementById("reset");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  
  let num = 0
  minus.addEventListener('click', function(){
    count.innerHTML = num--;
  })
  plus.addEventListener('click', function(){
    count.innerHTML = num++;
  })
  
  let intervalId = null
  start.addEventListener('click', function(){
    intervalId = setInterval(()=>{
      count.innerHTML = num++
      start.style.display = 'none'
      stop.style.display = 'block'
    }, 50)
  })
  stop.addEventListener('click', function(){
    clearInterval(intervalId)
    stop.style.display = 'none'
    start.style.display = 'block'
  })

  reset.addEventListener("click", function () {
    num = 0;
    count.innerHTML = num;
  });
}
