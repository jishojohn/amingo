const express =require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const User=require('./models/User');
const keys=require("./config/keys");

const db=keys.mongoURI;
mongoose
.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("DB CONNECTED"))
.catch(err=>console.log(err));


const app=express();
//configure body parser
app.use(bodyParser.urlencoded({extended:false}));
//User routes
const userRoutes = require('./routes/User');
const postRoutes = require('./routes/Post');
app.use('/posts', postRoutes)
app.use('/users', userRoutes)





const port= process.env.PORT || 5000;
  
app.get('/', (req,res) => res.json({
	msg: "Hello! "
}));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

