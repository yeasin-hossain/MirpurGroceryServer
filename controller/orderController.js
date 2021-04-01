const mongoose = require('mongoose');
const orderSchema = require('../model/orderSchema');
const Order = new mongoose.model('order', orderSchema);

// Get All Product
module.exports.getAllOrder = async (req, res) => {
	await Order.find({})
		.sort({ date: -1 })
		.exec((err, orders) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(orders);
			}
		});
};

// Get All Product
module.exports.getUserOrder = async (req, res) => {
	await Order.find({ userId: req.params.useId })
		.sort({ date: -1 })
		.exec((err, orders) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(orders);
			}
		});
};

// Insert New Order
module.exports.saveOrder = async (req, res) => {
	const orderData = new Order(req.body);
	console.log(orderData);
	await orderData.save((err, data) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(data);
		}
	});
};

// Delete Order Route
module.exports.deleteOrder = async (req, res) => {
	await Order.deleteOne({ _id: req.params.orderId }, (err, data) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(data);
		}
	});
};

// update and confirm order status
module.exports.updateOrder = async (req, res) => {
	await Order.updateOne(
		{ _id: req.params.orderId },
		{ status: 'confirm' },
		(err, data) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(data);
			}
		}
	);
};
