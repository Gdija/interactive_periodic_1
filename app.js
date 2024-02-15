// const myModule = require('C:\\Users\\me\\Documents\\interactive_periodoc\\JS\\app.js');
const  express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: './.env'});
const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));



app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MYSQL Connected.....")
    }
})
//app.use(express.static(path.join(__dirname, 'public')));
//create home page
app.get("/", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("index");
});

//create periodic table page
app.get("/periodic%20table", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("periodic table");
});
//create element page
app.get("/indexelement.html", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("indexelement");
});
//
app.get("/signup", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("signup");
});
app.listen(5000, () => {
    console.log("server started on port 5000");
});