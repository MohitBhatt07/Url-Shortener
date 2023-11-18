const authMap = new Map();
const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

const setAuthValues = (user)=>{
  return jwt.sign({
    _id : user._id,
    email : user.email,
    role : user.role,
    name : user.name
  },`${secret}`);
}

const getAuthValues = (token)=>{
  try {
    return jwt.verify(token,`${secret}`);
  } catch (error) {
    return null;
  }
}

module.exports = {setAuthValues,getAuthValues}