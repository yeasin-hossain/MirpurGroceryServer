const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	weight: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: false,
	},
	date: { type: Date, default: Date.now },
});

module.exports = productSchema;
