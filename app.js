countDown();
window.onscroll = function() {startAnimation();addText();};


var myWindow;
function contact(){
  myWindow = window.open("mailto:info@roadtoironman2018.com?Subject=Vi%20vill%20sponsra%20er!", "contactWindow", "width=300,height=100");
  myWindow.document.write("<p>Du kan stänga det här fönstret eller använd denna adress info@roadtoironman2018.com direkt.</p>");
  var interval = setInterval(function() {
   myWindow.close();
 }, 2000);
}

function countDown(){
  var countDownDate = new Date("Aug 18, 2018 07:00:00").getTime();
  // Uppdatera varje sekund
  var x = setInterval(function() {

  // Dagens datum och tid
  var now = new Date().getTime();

  // Mellanskillnaden idag tills satta tiden
  var distance = countDownDate - now;

  // Uträckning dagar, timmar, minuter, sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // visa i <p> id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}, 1000);
}



function startAnimation(){
  var width = window.innerWidth;
  if(width < 450){
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("swimbar").className = "bar swim";
    document.getElementById("bikebar").className = "bar bike";
    document.getElementById("runbar").className = "bar run";
  }
}else if(width < 800){
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("swimbar").className = "bar swim";
    document.getElementById("bikebar").className = "bar bike";
    document.getElementById("runbar").className = "bar run";
  }
}else{
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("swimbar").className = "bar swim";
    document.getElementById("bikebar").className = "bar bike";
    document.getElementById("runbar").className = "bar run";
  }

} 

}
function addText(){
  var t = setInterval(function() {
    var width2 = window.innerWidth;
    if(width2 < 450){
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("swimtext").innerHTML = "Simning 3,86km";
      document.getElementById("biketext").innerHTML = "Cykling: 18 Mil";
      document.getElementById("runtext").innerHTML = "Löpning: 42195 Meter";
      document.getElementById("swimtext").className = "bartext";
      document.getElementById("biketext").className = "bartext";
      document.getElementById("runtext").className = "bartext";
    }
  }else if(width2 < 800){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.getElementById("swimtext").innerHTML = "Simning 3,86km";
      document.getElementById("biketext").innerHTML = "Cykling: 18 Mil";
      document.getElementById("runtext").innerHTML = "Löpning: 42195 Meter";
      document.getElementById("swimtext").className = "bartext";
      document.getElementById("biketext").className = "bartext";
      document.getElementById("runtext").className = "bartext";
    }

  }else{
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
      document.getElementById("swimtext").innerHTML = "Simning 3,86km";
      document.getElementById("biketext").innerHTML = "Cykling: 18 Mil";
      document.getElementById("runtext").innerHTML = "Löpning: 42195 Meter";
      document.getElementById("swimtext").className = "bartext";
      document.getElementById("biketext").className = "bartext";
      document.getElementById("runtext").className = "bartext";
    }
  }
  },3000);
}
