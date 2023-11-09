const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get('/' , async(req,res)=>{
  const allUsers = await URL.find({});
  return res.render("home",{allUsers});
})

router.get('/user',(req,res)=>{
  return res.render("signup");
})

router.get('/user/login',(req,res)=>{
  return res.render("login")
})
module.exports = router;