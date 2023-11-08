const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get('/' , async(req,res)=>{
  const allUsers = await URL.find({});
  return res.render("home",{allUsers});
})

module.exports = router;