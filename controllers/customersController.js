const db = require('../config/db.manager');

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
exports.getCustomerByID = function( req, res){
    const {id} = req.params; // get id
    res.status(200).json({
        status: 'not implemented'
    });
}
exports.createNewCustomer = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get (attribute)
    res.status(200).json({
            status: 'not implemented'
        });
}

exports.patchCustomerById = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id (attribute)
    res.status(200).json({
            status: 'not implemented'
        });
}
exports.deleteCustomerByID = function( req, res){ // must select the body to be raw->JSON in Postman
    const {body} = req;// req.body (attribute)
    const {id} = req.params;// get id
    res.status(200).json({
        status: 'not implemented'
    });
}

