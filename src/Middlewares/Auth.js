const User = require('../models/Users.js');
const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
    try{
        const { token } = req.headers;
        console.log(token);
        const decoded = await jwt.verify(JSON.parse(token), process.env.JWT_KEY);
        console.log(decoded);
        const user = await User.findOne({ mail: decoded.username });       
        console.log(user); 
        if(!token || !user){
            throw new Error('Invalid token');
        }
        next();
    } catch (error) {
        res.status(401).json({
            Message: 'Unauthorized',
            Success: false,
            data: error.toString(),
        })
    }
}

module.exports = checkAuth