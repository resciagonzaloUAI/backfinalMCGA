const express = require('express');
const productsRouters = require('./Products');
const usersRouters = require('./Users');

const router = express.Router();


router.use("/Products", productsRouters);
router.use("/Users", usersRouters);



//Devuelvo ok a la solicitud segun enunciado
router.get('', (req, res) => {
  res.send('OK');
})

module.exports = router;