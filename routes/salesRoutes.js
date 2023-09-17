const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
router
    .route('/:id')
    .get(salesController.getSalesByID)
    .patch(salesController.patchSalesById)
    .delete(salesController.deleteSalesByID);

router
    .route('/')
    .get(salesController.getAllSales)
    .post(salesController.createNewSales);

module.exports = router;