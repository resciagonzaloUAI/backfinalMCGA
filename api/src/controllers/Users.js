const User = require('../models/Users.js');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ mail: req.body.user });
    if (user) {
      if (user.password === req.body.password) {
        const token = generateJWT(user);
        res.status(200).json({
          Message: 'User logged',
          Success: true,
          data: {
              email: user.mail,
              token: token
          }
      })

      } else {
        res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } else {
      res.status(404).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const generateJWT = (user) => {
  const payload = {
    sub: user._id,
    username: user.mail,
    iat: moment().unix(),
    exp: moment().add(10, 'days').unix()
  }

  return jwt.sign(payload, process.env.JWT_KEY)
}

//const getUsers = async (req, res) => {
//  try {
//    const users = await User.find();
//    res.json(users);
//  } catch (error) {
//    res.status(500).json({ message: error.message });
//  }
//};



const getUsers = (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
};

const validateUser = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (user && !user.isDeleted) {
      if (user.password === req.body.password) {
        res.status(200).json({ message: "OK" });
      } else {
        res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } else {
      res.status(404).json({ message: "El usuario no existe" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
    try {
        User.updateOne({ _id: req.params.id }, req.body, (err, result) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else if (result.matchedCount === 0) {
                res.status(404).json({ message: "Usuario no encontrado" });
            } else {
                res.status(200).json({ message: "Usuario actualizado" });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.isDeleted = true;
      await user.save();
      res.status(200).json({message: "Usuario eliminado"});
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const activateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.isDeleted = false;
      await user.save();
      res.status(200).json({message: "Usuario activado"});
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { loginUser, getUsers, validateUser, createUser, updateUser, deleteUser, activateUser };