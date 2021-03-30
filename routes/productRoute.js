const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	addNewProduct,
	deleteProduct,
	singleproduct,
} = require('../controller/productController');

// All Product Route
router.get('/', getAllProducts);

//Insert New Product Route
router.post('/addproduct', addNewProduct);

// Delete Product Route
router.get('/deleteproduct/:id', deleteProduct);

// Get Single Product Route
router.get('/singleproduct/:id', singleproduct);

module.exports = router;
