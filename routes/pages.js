const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index', {
        user: req.user
    });
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
router.get("/login", (req, res) => {
    //res.send("<h1>TEST</h1>");
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render("login");
});
router.get("/profile", authController.isLoggedIn, (req, res) => {

    if (req.user) {
        res.render('profile', {
            user: req.user
        });
    } else {
        res.redirect('/login');
    }
});

module.exports = router;




