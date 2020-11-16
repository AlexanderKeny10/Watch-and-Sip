const router = require('express').Router();
const { User } = require('../../models');

// Creates a new user
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
        user_name: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then((result) => {
            req.session.save(() => {
                req.session.userId = result.id;
                req.session.username = result.user_name;
                req.session.loggedIn = true;

                res.json(result);
            });
        });
});

// Logs in an existing user
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (!result) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = result.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.userId = result.id;
            req.session.username = result.username;
            req.session.loggedIn = true;

            res.json(result);
        });
    });
});

// Logs out user if loggedin
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;
