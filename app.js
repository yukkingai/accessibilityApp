const express = require('express'); // import the express package
const app = express(); // create an express app
// const http = require('http'); // import the Node server package
// const server = http.createServer(app); //use out app file with the server

const port = process.env.PORT || 3000;

// this is a route handler -> listen for incoming requests and send back a response
app.get('/', (req, res) => { // this is defult index "/" root route, expects to render an index page
    // this is pointing at index.html -> shared team page
    res.sendFile(__dirname + '/index.html');
});

app.get('/audio', (req, res) => {
    // this is pointing at index.html -> shared team page
    res.sendFile(__dirname + '/audio.html');
});

app.get('/video', (req, res) => {
  // this is pointing at index.html -> shared team page
  res.sendFile(__dirname + '/video.html');
});


// setup the server to listern for incoming connetion at this port
app.listen(port, () => {
  console.log(`listening on ${port}`);
});