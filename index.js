const countdate = new Date('jan 1, 2021 00:00:00').getTime();


function newyear(){
  const now = new Date().getTime();
  gap = countdate - now;


  const second = 1000;
  const minut = second * 60;
  const hour = minut * 60;
  const day = hour * 24;

  const d = Math.floor(gap / (day));
  const h = Math.floor((gap % (day)) / (hour));
  const m = Math.floor((gap % (hour)) / (minut));
  const s = Math.floor((gap % (minut)) / (second));

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minut').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(function(){
  newyear();
},1000)