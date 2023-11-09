const { getAuthValues } = require("../services/auth");

async function restrictUser (req,res,next){
  const userId = req.cookies.uid;

  if(!userId){
    return res.redirect('/user/login');
  }

  const user  = getAuthValues(userId);

  if(!user){
    return res.redirect('/user/login');
  }

  req.user = user;
  next();
}

module.exports = {restrictUser};