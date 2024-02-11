const { Users, Customers, Employees, Addresses, Paymentdetails } = require('../../models');

exports.user = async (req, res) => {
    try {
        let user = await Users.findByPk(req.user.id);
        let dbuser = await Customers.findOne({ where: { userID: req.user.id } });
        if (!dbuser) {
            dbuser = await Employees.findOne({ where: { userID: req.user.id } });
            if (!dbuser) {
                return res.status(400).send({ message: 'User Cannot found' });
            }
        }
        let address = await Addresses.findByPk(dbuser.addressID);
        let paymentoptions = await Paymentdetails.findAll({where:{userID: user.id,}});

        const userResult = { ...user.toJSON(), password: undefined, createdAt: undefined };
        const detailsResult = { ...dbuser.toJSON(), createdAt: undefined };
        const addressResult = "No data";
        const paymentResult = "No data";
        if (!paymentoptions) {
            paymentoptions = "No data";
        }
        if (!address) {
            address = "No data";
        }

        res.status(200).send({ user: userResult, user_details: detailsResult, user_address: addressResult, user_paymentdetails: paymentResult });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while changing Details.' });
        }
    }
};
