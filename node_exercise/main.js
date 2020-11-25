const request = require("request");
const fs = require("fs");

const [, , ...commandLineArguments] = process.argv;

console.log(commandLineArguments[0]);
const api_url = `https://icanhazdadjoke.com/search?term=${commandLineArguments[0]}`;

request(api_url, { json: true }, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let data = body.results.map((data) => {
      return data.joke;
    });

    if (body.total_jokes === 0) {
      console.log("no jokes found for the search term");
    } else {
      fs.writeFile("jokes.txt", data.toString(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File written successfully\n");
        }
      });
    }
  }
});

const http = require("http");
// notice below, the first parameter to createServer is a callback function!
const server = http.createServer(function (req, res, next) {
  // sending some header info in my response
  res.writeHead(200, { "Content-type": "text/html" });
  // send some data to the client
  res.write("<h1>Welcome to node learning path</h1>");
  // end the response
  return res.end();
});

server.listen(3100, function () {
  console.log("Go to localhost:3100");
});
