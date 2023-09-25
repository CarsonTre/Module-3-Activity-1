// Import the database manager module
const db = require('../config/db.manager');

// Handler to get all sales
exports.getAllSales = function (req, res) {
    // Call the getSalesProducts function from the database manager
    const salesProduct = db.getSalesProducts().then(results => {
        console.log(results);
        
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        });
    });
}

// Handler to get sales by ID 
exports.getSalesByID = function( req, res){
    const {id} = req.params; 
    res.status(200).json({
        status: 'not implemented'
    });
}

// Handler to create new sales 
exports.createNewSales = function( req, res){ 
    const {body} = req; 
    const {id} = req.params; 
    res.status(200).json({
            status: 'not implemented'
        });
}

// Handler to update sales by ID 
exports.patchSalesById = function( req, res){ 
    const {body} = req; 
    const {id} = req.params; 
    res.status(200).json({
            status: 'not implemented'
        });
}

// Handler to delete sales by ID 
exports.deleteSalesByID = function( req, res){ 
    const {body} = req; 
    const {id} = req.params; 
    res.status(200).json({
        status: 'not implemented'
    });
}
