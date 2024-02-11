const { Users, Customers, Employees } = require('../models');

exports.register = async (req, res) => {
    const { email, password, userRole, employeeID } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email, user role, and password.' });
    }

    try {
        let existingUser = await Users.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User account with this email address already exist.' });
        }
        if (userRole === "retail" || userRole === "wholesale") {
            return await registerCustomer(userRole, email, password, res);
        } else if (userRole === "pharmacist") {
            return await registerPharmacist(employeeID, email, password, req, res);
        } else {
            return res.status(400).json({ message: 'Unauthorized role for registration.', userRole });
        }
    } catch (error) {
        console.error(`Register Error: ${error.message}`);
        return res.status(500).json({ message: 'Server error while registering user.' });
    }
};

async function registerCustomer(userRole, email, password, res) {
    const user = await Users.create({ email, password, userGroup: userRole });
    const customer = await Customers.create({ cType: userRole, userID: user.id });

    const userResult = { ...user.toJSON(), password: undefined };
    const customerResult = customer.toJSON();

    return res.status(201).json({
        message: 'User registered successfully',
        user_id: userResult.id,
        customer_id: customerResult.id,
        customer_type: customerResult.cType
    });
}

async function registerPharmacist(employeeID, email, password, req, res) {
    if (req.body.user == '' || req.body.user.role !== "administrator") {
        console.log(req.role);
        return res.status(400).json({ message: 'Unauthorized creation of pharmacist accounts' });
    }

    const checkemp = await Employees.findByPk(employeeID);
    if (!checkemp) {
        return res.status(400).json({ message: `Cannot find employee with ID: ${employeeID}` });
    }

    const user = await Users.create({ email, password, userGroup: 'pharmacist' });
    checkemp.userID = user.id;
    await checkemp.save();

    const userResult = { ...user.toJSON(), password: undefined };

    return res.status(201).json({
        message: 'User registered successfully',
        user_id: userResult.id,
        employee_id: checkemp.id,
        employee_type: userResult.userGroup
    });
}
