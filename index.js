const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const router = require("./routes/urlRoutes");
const connectToMongoDB = require("./connect");

const URL = require("./models/url");
const app = express();
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/userRoutes');
const cookieParser = require("cookie-parser");
const { restrictUser,checkAuth } = require("./middlewares/auth");
const dotenv  = require('dotenv');

dotenv.config();
connectToMongoDB();
const PORT = process.env.PORT ;
app.set('view engine' , 'ejs');
app.set("views" , path.resolve('./views'));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use('/', checkAuth, staticRouter);
app.use('/user',userRouter);

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
