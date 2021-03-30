const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	weight: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: false,
	},
	date: { type: Date, default: Date.now },
});

module.exports = productSchema;
