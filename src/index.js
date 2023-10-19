const express = require('express');
const path = require('path');
const app = express();
const constants = require('./constants');
const handlebars = require('express-handlebars');



app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/views'); 

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.render('startPage')
    
});
app.get('/signup', (req, res) => {
    res.render('signup')
    
});



app.listen(constants.PORT, () => {
    console.log(`Server has been started on http://localhost:${constants.PORT}`);
})