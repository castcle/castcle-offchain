var request = require('request');

request.post(
    'https://api.defender.openzeppelin.com/autotasks/e46334d3-8cf0-4899-ba01-e37da7d334eb/runs/webhook/a1d81e7b-c323-4ebc-8002-5aec500b8212/URAHAkh72X1X1mZ5PgXEez',
    { 
      json: { 
        key: 'value' 
      } 
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);