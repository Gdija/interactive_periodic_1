// const myModule = require('C:\\Users\\me\\Documents\\interactive_periodoc\\JS\\app.js');
const  express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

dotenv.config({path: './.env'});
const app = express();

// create a database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended: false}));
//parse json bodies (as sent by AOPI clients)
app.use(express.json());
app.use(cookieParser());


app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected.....")
    }
})

//define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(5001, () => {
    console.log("server started on port 5001");
});