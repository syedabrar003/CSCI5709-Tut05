const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userRoute = require('./api/routes/userRoute');

app.use('/user',userRoute);


const server =http.createServer(app);

server.listen(port);

