const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
});

router.get("/periodic%20table", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("periodic table");
});

router.get("/indexelement.html", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("indexelement");
});

router.get("/signup", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("signup");
});

module.exports = router;




