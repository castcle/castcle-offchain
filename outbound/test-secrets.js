var request = require('request');

request.post(
    'https://api.defender.openzeppelin.com/autotasks/0de85c5f-5804-49b1-9433-1be8655baeaa/runs/webhook/a1d81e7b-c323-4ebc-8002-5aec500b8212/XVVrt87aSn6RDTNMqX3FKb',
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