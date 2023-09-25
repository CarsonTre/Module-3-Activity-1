const db = require('../config/db.manager');


// Get all users
exports.getAllUsers = async function (req, res) {
    const users = await db.getAllUsers();

    if (users && users.length > 0) {
        res.status(200).json({
            status: 'successful',
            data: users
        });
    } else {
        res.status(200).json({
            status: 'successful',
            data: [] 
        });
    }
}

// Get user by ID
exports.getUserByID = function (req, res) {
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

// Create a new user
exports.createNewUser = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

// Update user by ID
exports.updateUserByID = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

// Delete user by ID
exports.deleteUserByID = function (req, res) {
    const { body } = req;
    const { id } = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

