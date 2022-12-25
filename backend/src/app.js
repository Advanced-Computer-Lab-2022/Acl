require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Instructor = require("./models/instructor.model");
const corporateTraineeC= require("./models/cortrainee.model");
const indTrainee = require("./models/individualTrainee.model");
const Admin = require('./models/adminstrator.model');
const app = express();
const PORT = process.env.PORT;
const { requireAuth } = require('./Middleware/authMiddleware');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const MongoURI = process.env.MongoURI;
const adminRoutes = require("./routes/admin.routes");
const corporateTraineeRoutes = require("./routes/cortrainee.routes");
const intructorRoutes = require("./routes/instructor.routes");
const coursesRoutes = require("./routes/courses.routes");
const individualTraineeRoutes = require("./routes/individualTrainee.routes");
const sessions = require('express-session');
const bcrypt1 = require('bcrypt')//hash for password
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));
var session;
//db connection
mongoose
  .connect(MongoURI)
  .then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(PORT, () => {
      console.log(`Listening to requests on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

console.log(mongoose.connection.readyState);

app.get("/home", (req, res) => {
  res.status(200).send("You have everything installed!");
});

const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};


const signUp = async (req, res) => {
  const { username, email,last_name,first_name,gender, password } = req.body;
  try {
      const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(password, salt);
      const user = await indTrainee.create({ username: username, email: email,last_name:last_name,first_name:first_name,gender:gender, password: hashedPassword });
      const token = createToken(user.username);

      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json(`/indiviualtrainee/${user.id}`)
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}

const login = async (req, res) => {
  // TODO: Login the user
  const {username, password} = req.body;
  //const {type}=req.body;
    
      //user3= await Admin.findOne({email,password})
      
  try {
    var m=0;
      user =await Instructor.findOne({username})
      if(!user){
      user =await indTrainee.findOne({username})
      m=1}
      if(!user){
        user =await corporateTraineeC.findOne({username})
        m=2}
        if(!user){
          user =await Admin.findOne({username})
          m=3}
       //console.log("dakhal el if sah"+ user)}
       if (user && bcrypt1.compareSync(password, user.password)) {
        // console.log(user+"dakhal")
          id =user._id;
          session=req.session;
          session.userid=username;
          const token = createToken(user.username);
          //console.log(user)
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          if (m==1)
          res.json(`/indiviualtrainee/${id}`);
          else if(m==0)
          res.json(`/instructor/${id}`);
          else if(m==2)
          res.json(`/corporatetrainee/${id}`);
          else if(m==3)
          res.json(`/admin/${id}`);
          //res.status(200).json({
             // username: user.username,
              //first_name: user.first_name,
              //last_name: user.last_name,
          //    username: user.username,
          //    token: token,
              
          //  });
         //   console.log(id)
          }
        
        else {
          console.log(user)
          res.status(400).json({ message: "Invalid Credentials" });
        }
      
  
      //const token = createToken(user.name);

     // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      //res.status(200).json(user)
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}

const logout = async (req, res) => {
  res.cookie('jwt', 'logout', {
      expires: new Date(Date.now() + 5 * 1000),
      httpOnly: true
    });
  
    res.status(200).json("/");
  
  // TODO Logout the user
}
app.post('/user',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypassword){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  }
  else{
      res.send('Invalid username or password');
  }
})


//routes
app.use("/admin", adminRoutes);
app.use("/instructor", intructorRoutes);
app.use("/courses", coursesRoutes);
app.use("/indiviualtrainee", individualTraineeRoutes);
app.use("/corporatetrainee", corporateTraineeRoutes);
app.post('/login', login)
app.post('/signUp', signUp)
app.get('/logout', logout)

