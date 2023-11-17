const { getAuthValues } = require("../services/auth");

function checkForAuthentication(req, res, next) {
  const authHeaderValue = req.cookies;
  if (!authHeaderValue) {
    return next();
  }

  const token = authHeaderValue.token;
  const user = getAuthValues(token);

  req.user = user;
  return next();
}

function restrictTo(roles) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/user/login");

    if(!roles.includes(req.user.role))
      return res.end("Unauthorized User");

    return next();
  };
}

module.exports = { restrictTo, checkForAuthentication };
