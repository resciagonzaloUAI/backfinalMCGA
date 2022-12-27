const express = require('express');
const indexRoutes = require('./src/routes');
const mongoose = require('mongoose');
const productsRoutes = require('./src/routes/products');
const cors = require('cors');
require('dotenv').config();

const URL_DB = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(indexRoutes);
app.use(productsRoutes);

mongoose.connect(URL_DB).then(() => {
  console.log("🟢 DB Connected");

  app.listen(PORT, () => {
    console.log(`🚗 Server running on port http://localhost:${PORT}`);
  })
}).catch(err => {
  console.log('🔴 There was an error on the DB connection method.');
  console.log(err);
})

module.exports = app;