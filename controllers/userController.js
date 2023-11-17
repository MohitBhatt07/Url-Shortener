const User = require("../models/user");
const { v4: uuidv4 } = require('uuid');
const { setAuthValues } = require("../services/auth");

async function userSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
    role
  });
  return res.redirect("/user/login")
  
}

async function userLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });

  if (!user) {
    return res.render("login", {
      error: "wrong email or password",
    });
  }
  
  const token = setAuthValues(user);
  res.cookie("token" , token);
  return res.redirect('/');

}

module.exports ={ userSignup,userLogin };
