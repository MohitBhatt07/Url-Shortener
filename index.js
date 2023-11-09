const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const router = require("./routes/urlRoutes");
const connectToMongoDB = require("./connect");
const PORT = 8000;
const URL = require("./models/url");
const app = express();
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/userRoutes');
const cookieParser = require("cookie-parser");
const { restrictUser } = require("./middlewares/auth");

connectToMongoDB("mongodb://localhost:27017/short-id")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err.message));

app.set('view engine' , 'ejs');
app.set("views" , path.resolve('./views'));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use('/',staticRouter);
app.use('/user',userRouter);
// app.get('/',(req,res)=>{
//   res.send(`<h1>APP is RUNNING</h1>`)
// })
// app.get('/test' ,async(req,res)=>{
//   const allUrls  = await URL.find({});
//   return res.render('home' , {
//     urls : allUrls
//   });
// })

app.use("/url",restrictUser ,router);
app.get("/url/:shortId", async (req, res) => {
  
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {timestamps : Date.now()},
      },
    }
  );
  
  res.redirect(entry.redirectUrl);
});


app.listen(PORT, () => console.log(`server started at ${PORT}`));
