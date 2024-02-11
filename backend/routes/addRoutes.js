const express = require('express');
const passport = require('passport');
const router = express.Router();

const paymentdetailsController = require('../controllers/addcontrollers/paymentdetailsController');


router.post('/addpaymentmethod', passport.authenticate('jwt', { session: false }), (req, res) => {
    paymentdetailsController.addpaymentmethod(req, res, (err) => {
        if (err) {
            console.error('Error Adding payment method:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});
module.exports = router;
