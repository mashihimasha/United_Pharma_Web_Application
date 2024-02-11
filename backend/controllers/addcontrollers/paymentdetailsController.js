const { Customers, Paymentdetails } = require('../../models');

exports.addpaymentmethod = async (req, res) => {
    try {
        const { cardType, cardNumber, nameOnCard, expiryDate, CVV } = req.body;

        if (!cardType || !cardNumber || !nameOnCard || !expiryDate || ! CVV) {
            return res.status(400).send({ error: "Can't be empty." });
        }
        let existingcard = await Paymentdetails.findOne({ where: { cardNumber } });
        if (existingcard) {
            return res.status(400).json({ message: 'Card Already Exists' });
        }
        let checkcustomer = await Customers.findOne({ where: { userID: req.user.id } });
        if (!checkcustomer) {
            return res.status(400).json({ message: 'Only Customers can add Payment methods' });
        }
        
        await Paymentdetails.create({  userID: req.user.id, cardType, cardNumber, nameOnCard, expiryDate, CVV });
        return res.status(201).json({
            message: 'Payment method added successfully',
        });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while registering Employee.' });
        }
    }
};
