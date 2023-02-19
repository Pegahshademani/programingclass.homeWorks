

import express from 'express'
import { engine } from 'express-handlebars';
import {promises} from "fs";

// import * as http from "http";
import bodyParser from "body-parser";
import * as fs from "fs";
const path = require('path')
const app = express()
// const server = http.createServer(app);
app.use(express.static(`web`))
app.use(express.static(__dirname + '.../web'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// server.listen(6100);
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set(`views`, `./views`);

const DATA_FILE = 'data.json';

app.get(`/`, (request, response) => {
    response.redirect(`/join`);
})

app.get(`/join`, (request, response) => {
    response.render(`join`);
})

app.get(`/messages`, async (request, response) => {
    const data = await promises.readFile(DATA_FILE, {encoding:'utf-8'});
    let messages = JSON.parse(data);

    const {author} = request.query;
    // messages = messages.map(message =>{
    //     return{
    //         ...message,
    //         isMe: author === message.author
    //     }
    // })
    for(const message of messages){
        message.isMe = author === message.author
    }

    response.render(`messages`, {messages, author});
})

app.post(`/messages`, async (request, response) => {
    const data = await promises.readFile(DATA_FILE, {encoding:`utf-8`});
    const messages = JSON.parse(data);
    const {text, author} = request.body;
    const message = {author, text, date:new Date().toISOString()};
    messages.push(message);
    const stringedJSON = JSON.stringify(messages);
    fs.writeFileSync(`data.json`, stringedJSON);
   response.redirect(`/messages?author=${port}`)
})



const port = 6100;
app.listen(port, () => {
    console.log(`Server App listening on port ${port}`)
});