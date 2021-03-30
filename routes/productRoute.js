const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	addNewProduct,
	deleteProduct,
} = require('../controller/productController');

// All Product Route
router.get('/', getAllProducts);

//Insert New Product Route
router.post('/addproduct', addNewProduct);

// Delete Product Route
router.get('/deleteproduct/:id', deleteProduct);

module.exports = router;
