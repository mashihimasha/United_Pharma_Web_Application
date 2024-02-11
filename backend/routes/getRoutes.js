const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/getcontrollers/userController');


router.get('/user', passport.authenticate('jwt', { session: false }), (req, res) => {
    userController.user(req, res, (err) => {
        if (err) {
            console.error('Error getting user Details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});
module.exports = router;
