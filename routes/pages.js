const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index', {
        user: req.user
    });
});

router.get("/periodic%20table", authController.isLoggedIn, (req, res) => {
    res.render('periodic table', {
        user: req.user
    });
});

router.get("/indexelement.html",authController.isLoggedIn, (req, res) => {
    res.render("indexelement", {
        user: req.user
    });
});

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.get("/login", (req, res) => {
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

router.get("/quiz", authController.isLoggedIn, (req, res) => {
    res.render("quiz", {
        user: req.user

    });
});

module.exports = router;




