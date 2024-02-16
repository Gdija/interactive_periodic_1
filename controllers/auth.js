const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

exports.login = async (req, res) => {
    try {
        //grab email and password from the request body
        const { email, password} = req.body;

        if ( !email || !password) {
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            })
        }

        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            console.log(results);
           if( !results || !(await bcrypt.compare(password, results[0].password))) {
             res.status(401).render('login', {
                message: 'Email or Password is incorrect'
             })
           } else {
              const id = results[0].id;

              const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
              });

              console.log("The token is: " + token);

              const cookieOptions = {
                expires: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                ),
                //to protect cookies from external attack
                httpOnly: true
              }

              res.cookie('jwt', token, cookieOptions );
              res.status(200).redirect("/");
           }

        })
    } catch (error) {
       console.log(error); 
    }
}

exports.register = (req, res) => {
    console.log(req.body);

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const passwordConfirm = req.body.passwordConfirm;

    const { name, email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.error(error);
        }

        if( results.length > 0) {
            return res.render('signup', {
                message: 'That email is already in use'
            })
        } else if( password !== passwordConfirm) {
            return res.render('signup', {
                message: 'Passwords do not match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword }, (error, results) => {
            if(error) {
                console.log(error);
            }  else {
                return res.render('signup', {
                    message: 'User registered'
                });

            }

        })
    });

}