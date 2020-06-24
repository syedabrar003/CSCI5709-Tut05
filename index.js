const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const userRoute = require('./api/routes/userRoute');

app.use(bodyParser.json());

app.options('*', cors);
app.use('/user',userRoute);

const server =http.createServer(app);
server.listen(port);

