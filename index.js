const express = require('express');
const productsRouter = require('./routes/productsRouter');
const employeesRouter = require('./routes/employeesRouter');

const app = express();
app.use(express.json())
app.use('/api/products', productsRouter);
// app.use('/api/employees', employeesRouter);

let a = 10/3
console.log(a.toFixed(35))
app.listen(3000, () => {
    console.log('Application is Listening...')
})