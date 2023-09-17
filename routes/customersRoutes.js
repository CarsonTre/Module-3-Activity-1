const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

router
    .route('/:id')
    .get(customersController.getCustomerByID)
    .patch(customersController.patchCustomerById)
    .delete(customersController.deleteCustomerByID);

router
    .route('/')
    .get(customersController.getAllCustomers)
    .post(customersController.createNewCustomer);

module.exports = router;