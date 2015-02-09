// var dateCounter = function() {
// var date = new Date();
// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();

var counter  = function() {

  var date   = new Date();
  var hour   = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds(); 

  if (hour >= 13) {
      hour = hour - 12;
  }
  if (hour.toString().length < 2) {
      hour = "0" + hour;
  }
    if (minute.toString().length < 2) {
      minute = "0" + minute;
  }
  if (second.toString().length < 2) {
      second = "0" + second;
  };
  
  var clock  = hour + ":" + minute + ":" + second;

  $(".time").text(clock)
  
};

$(function() {
  setInterval(counter, 1000);
});



var hexCounter  = function() {

  var date   = new Date();
  var hour   = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds(); 

  if (hour.toString().length < 2) {
      hour = "0" + hour;
  }
  if (minute.toString().length < 2) {
      minute = "0" + minute;
  }
  if (second.toString().length < 2) {
      second = "0" + second;
  };

  var hexClock  = "#" + hour + minute + second;
  
  $(".hex").text(hexClock)
  .css("background-color", hexClock);
  
};

$(function() {
  setInterval(hexCounter, 1000);
});







