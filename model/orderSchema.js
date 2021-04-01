const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	userEmail: {
		type: String,
		required: true,
	},
	productID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
	},
	productName: {
		type: String,
		required: true,
	},
	productPrice: {
		type: Number,
		required: true,
	},
	totalPrice: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	weight: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ['confirm', 'pending'],
		default: 'pending',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = orderSchema;
