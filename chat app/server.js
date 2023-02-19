import express from 'express'
import * as path from "path";
import * as http from "http";
const app = express()
const server=http.createServer(app)
import bodyParser from "body-parser";
import {serveFile} from "socket.io/dist/uws.js";
// const http = require('http').createServer(app);

const io=require("socket.io")(server);

app.use(express.static(path.join(__dirname+`/chat app`)))
io.on(`connection`,function (socket){

    socket.on("chat", function (message){
        socket.broadcast.emit("chat",message)

    });

});
server.listen(6200);

// const port = 6200;
// app.listen(port, () => {
//     console.log(`Server App listening on port ${port}`)
// });














// app.use(express.static(`chat app`))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))
// app.get(`/`, (request, response) => {
//     response.redirect(`index.html`);
// })
//
//  io.on('connection', function(socket) {
//     console.log('a user connected');
//     socket.on('chat message', function(msg) {
//         console.log('message: ' + msg);
//         io.emit('chat message', msg);
//     });
//     socket.on('disconnect', function() {
//         console.log('user disconnected');
//     });
// });

