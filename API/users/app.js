const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  if(!error && response.statusCode== 200)
  {
    var parseData= JSON.parse(body);
    console.log(parseData["name"]);
    console.log(parseData.address.city);
  }
});