const express = require("express");
const URL = require("../models/url");
const router = express.Router();

router.get('/' , async(req,res)=>{
  if(!req.user) { 
    return res.redirect('/user/login');
  }
  const allUsers = await URL.find({generatedBy : req.user._id });
  return res.render("home",{allUsers ,url : req.body.url});
})

router.get('/user',(req,res)=>{ 
  return res.render("signup");
})

router.get('/user/login',(req,res)=>{
  return res.render("login")
})
module.exports = router;