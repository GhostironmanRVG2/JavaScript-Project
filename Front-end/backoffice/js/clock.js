setInterval(displayclock, 500);
function displayclock (){
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var en = 'am'
  
  if (hrs > 12){
    en = 'pm';
  }
  
  if (hrs > 12) {
    hrs = hrs - 12;
  }

  if (hrs == 0){
    hrs = 12;
  }
  
  if (hrs < 0){
      hrs = '0' + hrs;
  }
  
  if (min < 0){
      min = '0' + min;
  }
  
  if (sec < 0){
      sec = '0' + sec;
  }

  document.getElementById('clock').innerHTML = hrs + ":" + min + ":" + sec + ' ' +  en;

}