const express = require('express');
const app = express();
const generate = require('./routes/generate')
const ejs = require('ejs')

app.use(express.static('./public'))
app.set('view-engine',ejs);
app.use(express.urlencoded({ extended: true }));
app.use('/generate',generate);


app.listen('3000', () => {
    console.log("Server is running a")
})