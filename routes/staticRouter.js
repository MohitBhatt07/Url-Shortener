const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");
const router = express.Router();


router.get('/admin/urls' , restrictTo(["ADMIN"]) , async(req,res) =>{

  const allUsers = await URL.find({});
  
  return res.render('home' , {allUsers , role : "ADMIN"});
})

router.get('/' ,restrictTo(["NORMAL","ADMIN"]), async(req,res)=>{
  
  const allUsers = await URL.find({"generatedBy.generatorId" : req.user._id });
  return res.render("home",{allUsers });
})

router.get('/user',(req,res)=>{ 
  return res.render("signup");
})

router.get('/user/login',(req,res)=>{
  return res.render("login")
})
module.exports = router;