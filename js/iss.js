// requires jQuery

var getISSLocation = function (onData) {
  $.getJSON('http://api.open-notify.org/iss-now/', function(data) {
    console.log(data);
  });
};
