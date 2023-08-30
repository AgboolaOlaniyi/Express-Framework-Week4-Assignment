
const express = require('express');
const itemsrouter = require('./items/api.router');


const port = 3002;

const app = express()

app.use('/items', itemsrouter)





app.listen(port, () => console.log(`listening on port: ${port}`))