const express = require('express');
const router = express.Router();
const {
	saveOrder,
	getAllOrder,
	getUserOrder,
} = require('../controller/orderController');

// Save Order
router.post('/', saveOrder);

// Get All Order Order
router.get('/allorder', getAllOrder);

// get User Order Info
router.get('/userorder/:useId', getUserOrder);

module.exports = router;
