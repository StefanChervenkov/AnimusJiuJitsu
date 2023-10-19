const express = require('express');
const app = express();
const constants = require('./src/constants');

app.get('/login', (req, res) => {
    res.send('Hello from express');
})

app.listen(constants.PORT, () => {
    console.log(`Server has been started on http://localhost:${constants.PORT}`);
})