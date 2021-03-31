const express = require('express');
const router = express.Router();
const {
	saveOrder,
	getAllOrder,
	getUserOrder,
	deleteOrder,
	updateOrder,
} = require('../controller/orderController');

// Save Order
router.post('/', saveOrder);

// Get All Order Order
router.get('/allorder', getAllOrder);

// get User Order Info
router.get('/userorder/:useId', getUserOrder);

// Order Delete
router.get('/deleteorder/:orderId', deleteOrder);

// update Order status
router.get('/updateorder/:orderId', updateOrder);

module.exports = router;
