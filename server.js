const http = require('http');
const app = require ('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);


app.post('/api/contacts',(req,res)=>{

    const contact = {
       id:  contacts.length + 1,
       first_name: requestAnimationFrame.body.first_name,
    }
    contacts.push(contact);
    Response.json(contact);
})

server.listen(port);

    