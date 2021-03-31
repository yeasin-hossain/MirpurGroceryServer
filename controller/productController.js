const mongoose = require('mongoose');
const productSchema = require('../model/productsSchema');
const Product = new mongoose.model('product', productSchema);

// Get All Product
module.exports.getAllProducts = async (req, res) => {
	await Product.find({})
		.sort({ date: -1 })
		.exec((err, products) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(products);
			}
		});
};

// Insert New Product
module.exports.addNewProduct = async (req, res) => {
	const productData = new Product(req.body);
	await productData.save((err, data) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(data);
		}
	});
};

// Get Single Product
module.exports.singleproduct = async (req, res) => {
	await Product.findById(req.params.id).exec((err, product) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(product);
		}
	});
};

// Delete Product
module.exports.deleteProduct = async (req, res) => {
	console.log(req.params.id);
	await Product.deleteOne({ _id: req.params.id }, (err, data) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(data);
		}
	});
};
