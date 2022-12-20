const productController = require('../controllers/products');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middlewares/Auth.js');


const {
    getAllProducts,
    getProductByIdOrName,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products.js');

//Agrego endpoints get,post,put,delete

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductByIdOrName);
router.post('/products', authMiddleware, productController.createProduct);
router.put('/products/:id', authMiddleware, productController.updateProduct);
router.delete('/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;