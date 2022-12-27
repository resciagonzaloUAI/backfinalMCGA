const Product = require('../models/Products');


//Controladora con endpoints para cumplir con la consigna.

const getAllProducts = (req, res) => {
  Product.find().then((products) => {
    res.json(products);
  });
};


const getProductByIdOrName = (req, res) => {
  const idOrName = req.params.id;
  Product.findOne({
    $or: [{ name: idOrName }, { id: idOrName }],
  }).then((product) => {
    if (!product) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado',
      });
    }

    res.json(product);
  });
};

const createProduct = (req, res) => {
  const newProduct = new Product({
    id: req.body.id,
    name: req.body.name,
    stock: req.body.stock,
    price: req.body.price,
    description: req.body.description,
  });

  newProduct
    .save()
    .then(() => {
      res.status(201).json({
        data: newProduct,
        message: 'Producto creado'
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
      });
    });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.findOne({ id }).then(product => {
    if (!product) {
      return res.status(404).json({
        error: true,
        message: 'Producto no encontrado',
      });
    }

    product.delete().then(() => {
      return res.json({
        message: 'Producto borrado'
      });
    }).catch(error => {
      res.status(400).json({
        message: error,
      });
    })
  });
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  Product.findOne({ id }).then(product => {
    if (!product) {
      return res.status(404).json({
        error: true,
        message: 'Producto no encontrado',
      });
    }
    return Product.findOneAndUpdate({ id }, {
      $set: {
        id: req.body.id,
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price,
        description: req.body.description
      }
    })
  }).then((result) => {
    return res.json({
      data: result,
      message: 'Producto actualizado'
    });
  }).catch(error => {
    return res.status(400).json({
      message: error,
      error: true,
    });
  });

};

module.exports = {
  getAllProducts: getAllProducts,
  getProductByIdOrName: getProductByIdOrName,
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
};