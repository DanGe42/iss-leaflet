var http = require('http');

/*
 * GET current location of ISS
 */

exports.current = function(req, res) {
  try {
    http.get("http://api.open-notify.org/iss-now/", function (api_res) {
        res.setHeader("Content-Type", "application/json");
      if (api_res.statusCode !== 200) {
        res.statusCode = api_res.statusCode;
        res.send(JSON.stringify({
          "message": "Something wrong occurred!"
        }));

        return;
      }

      api_res.on('data', function (data) {
        res.send(data);
      });
    });
  } catch (e) {
    console.log(e);
    res.send(500, JSON.stringify({
      "message": "Could not GET external server"
    }));
  }
}
