setInterval(currentTime, 1000);

function currentTime()
{
    let time = new Date();   // creating object of Date class
    let dayName=time.getDay();
    let month=time.getMonth();
    let year=time.getFullYear();
    let date=time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    var am_pm = "";
    if(hour==24)
    am_pm = "";
    if (hour > 24) {
    hour -= 24;
    am_pm = "";
    }
    if (hour == 0) {
    hour = 24;
    am_pm = "";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

   //value of current time
   let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm;

  // value of present day(Day, Month, Year)
  var months=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  var week=["Domingo","Segunda Feira","Terça Feira","Quarta Feira","Quinta Feira","Sexta Feira","Sabádo"];

  var presentDay=week[dayName]+", "+months[month]+" "+date+", "+year;

  const clock = document.getElementById("time");
  const dayIntro=document.getElementById("dayName");

  clock.innerHTML = currentTime;
  dayIntro.innerHTML = presentDay;
}

currentTime();  //calling currentTime() function to initiate the process
