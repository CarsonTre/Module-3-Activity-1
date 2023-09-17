const db = require('../config/db.manager');

// Get all users
exports.getAllUsers = function (req, res) {
    const users = db.getAllUsers().then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        });
    });
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

