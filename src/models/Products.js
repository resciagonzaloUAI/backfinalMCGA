const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creo el esquema con lo pedido en el parcial

const ProductSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true,
    null: false
  },
  name: {
    type: String,
    require: true,
    unique: false,
    null: false
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  }
});


const Products = mongoose.model ('Products', ProductSchema );
module.exports = Products;


//module.exports = mongoose.model('products', ProductSchema);