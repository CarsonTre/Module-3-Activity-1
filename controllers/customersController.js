// Import required modules
const sql = require('mssql'); // SQL Server driver
const db = require('../config/db.manager'); // Database configuration

// Handler to get all customers
exports.getAllCustomers = async function (req, res) {
    try {
        const pool = await sql.connect(db);
        const result = await pool.request().query('SELECT CustomerID, FirstName, LastName, EmailAddress FROM CustomerLT.Customer');

        res.status(200).json({
            status: 'success',
            data: result.recordset
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching customers.'
        });
    }
}
// Handler to get a customer by ID (not implemented)
exports.getCustomerByID = function( req, res){
    const {id} = req.params; 
    res.status(200).json({
        status: 'not implemented'
    });
}

// Handler to create a new customer (not implemented)
exports.createNewCustomer = function( req, res){ // To use, select the body to be raw->JSON in Postman
    const {body} = req; 
    const {id} = req.params;
    res.status(200).json({
            status: 'not implemented'
        });
}

// Handler to update a customer by ID (not implemented)
exports.patchCustomerById = function( req, res){ 
    const {body} = req; 
    const {id} = req.params; 
    res.status(200).json({
            status: 'not implemented'
        });
}

// Handler to delete a customer by ID (not implemented)
exports.deleteCustomerByID = function( req, res){ // To use, select the body to be raw->JSON in Postman
    const {body} = req; 
    const {id} = req.params; 
    res.status(200).json({
        status: 'not implemented'
    });
}
