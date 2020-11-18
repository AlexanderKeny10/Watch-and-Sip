const router = require('express').Router();
const { Review, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Review.findAll({}, {
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // post request needs keys review_text and user_id
    Review.create({
        review_text: req.body.review_text,
        user_id: req.body.userId,
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Review.update(
        {
            review_text: req.body.review_text
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(result => {
            if (!result) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            if (!result) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;