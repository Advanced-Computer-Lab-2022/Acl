require("dotenv").config();
const express = require("express");
var async = require('async');
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
var nodemailer = require('nodemailer');
var crypto = require('crypto');
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

    user =await Instructor.findOne({username})
        user1 =await indTrainee.findOne({username})
        user2=await Admin.findOne({username})
        user3 =await corporateTraineeC.findOne({username})
        if(user||user1||user2||user3)
        res.status(400).json({ error:"Username Already In Use" })
        
         else{ 
      const salt = await bcrypt1.genSalt();
      const hashedPassword = await bcrypt1.hash(password, salt);
      const user = await indTrainee.create({ username: username, email: email,last_name:last_name,first_name:first_name,gender:gender, password: hashedPassword });
      const token = createToken(user.username);

      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json(`/individualtrainee/${user.id}`)
  } }catch (error) {
      res.status(400).json({ error: error.message })
  }
}
const forgetPassPost=async(req,res) =>{
  const {email}=req.body
  try {
    var m=0;
      user =await Instructor.findOne({email})
      user1=await Instructor.findOne({email})
      if (user){
        user=await Instructor.findOne({email})
        m=0
      // x=await Instructor.findOne({email},'FirstTime')
      }if(!user){
      user =await indTrainee.findOne({email})
      m=1}
       if(!user){
        user =await corporateTraineeC.findOne({email})
        m=2}
        if(!user){
          m=6
        }

if (m==1)
{
    {
  console.log(m+"jaskjk")
  async.waterfall(
    [
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          var token = buf.toString("hex");
          done(err, token);
          
        });
      },
      function (token, done) {
        
        indTrainee.findOne({ email: email }, function (err, user) {
          if (!user) {
            req.flash("error", "No account with that email address exists.");
            return res.redirect("/forgot");
          }

          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

          user.save(function (err) {
            done(err, token, user);
          });
        });
      },
      function (token, user, done) {
        //let testAccount =nodemailer.createTestAccount();
        //clientID     459689521337-pkpimajok78e5f00jhlubvtr28smvm0p.apps.googleusercontent.com
        // create reusable transporter object using the default SMTP transport
        console.log(user)
        let transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.user,
            pass: process.env.pass,
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            //accessToken:"ya29.a0AeTM1ieMVZBpenPBICXA6zFObVV3zENDTYEAiEMRxQutN09Fmw1aiKnsYXqWH8z1VZHkOP-X6D4bwwivH91txfzPC730fkVQYNZYlimvuvhHNGxN7LDcavYBWEfDCxB7YGo-vkH44C6yjXqLlYb8t3wa17uFaCgYKAa0SARESFQHWtWOmDzsiOVBe6Tm3hh0v15kMsQ0163"
          },
        });
        var mailOptions = {
          to: user.email,
          from: "kikomarco12345@gmail.com",
          subject: "Node.js Password Reset",
          text:
            "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
            "" +
            "l" +
            "ocalhost" +
            ":3000/indiviual/reset/" +
            token +
            "\n\n" +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n",
        };
        transport.sendMail(mailOptions, function (error, response) {
          if (error) {
            console.log(error);
          } else {
            
            return res.status(200).json("we have send an email to you to reset your Password")
          console.log("Message sent: " + response.message);
          }
        });
      },
    ],
    function (err) {
      if (err) return  res.status(400).json(err);
      //res.redirect('/forgot');
      return res.status(200).json(email);
    }
  );
};}
else if(m==0)
{ {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      Instructor.findOne({ email: email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
       //let testAccount =nodemailer.createTestAccount();
//clientID     459689521337-pkpimajok78e5f00jhlubvtr28smvm0p.apps.googleusercontent.com
// create reusable transporter object using the default SMTP transport

let transport= nodemailer.createTransport({
service: 'gmail',
 auth: {
   type: 'OAuth2',
   user: process.env.user,
   pass: process.env.pass,
   clientId: process.env.clientId,
   clientSecret: process.env.clientSecret,
   refreshToken:process.env.refreshToken
   //accessToken:"ya29.a0AeTM1ieMVZBpenPBICXA6zFObVV3zENDTYEAiEMRxQutN09Fmw1aiKnsYXqWH8z1VZHkOP-X6D4bwwivH91txfzPC730fkVQYNZYlimvuvhHNGxN7LDcavYBWEfDCxB7YGo-vkH44C6yjXqLlYb8t3wa17uFaCgYKAa0SARESFQHWtWOmDzsiOVBe6Tm3hh0v15kMsQ0163"
 },
});
      var mailOptions = {
        to: user.email,
        from: 'kikomarco12345@gmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          '' +'l'+'ocalhost' + ':3000/instructor/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      transport.sendMail(mailOptions, function(error, response){
       if(error){
           console.log(error);
       }else{
           console.log("Message sent: " + response);
           return res.status(200).json("we have send an email to you to reset your Password")
          }
      });
    }
  ], function(err) {
    if (err) return res.status(400).json(err);
    //res.redirect('/forgot');
    return res.status(200).json(email)
  });
};}
else if(m==2)
{ {
  async.waterfall(
    [
      function (done) {
        crypto.randomBytes(20, function (err, buf) {
          var token = buf.toString("hex");
          done(err, token);
        });
      },
      function (token, done) {
        corporateTraineeC.findOne(
          { email: email },
          function (err, user) {
            if (!user) {
              //  req.flash('error', 'No account with that email address exists.');
              return res.redirect("/forgot");
            }

            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

            user.save(function (err) {
              done(err, token, user);
            });
          }
        );
      },
      function (token, user, done) {
        let testAccount = nodemailer.createTestAccount();
        //clientID     459689521337-pkpimajok78e5f00jhlubvtr28smvm0p.apps.googleusercontent.com
        // create reusable transporter object using the default SMTP transport
        let transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.user,
            pass: process.env.pass,
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            //accessToken:"ya29.a0AeTM1ieMVZBpenPBICXA6zFObVV3zENDTYEAiEMRxQutN09Fmw1aiKnsYXqWH8z1VZHkOP-X6D4bwwivH91txfzPC730fkVQYNZYlimvuvhHNGxN7LDcavYBWEfDCxB7YGo-vkH44C6yjXqLlYb8t3wa17uFaCgYKAa0SARESFQHWtWOmDzsiOVBe6Tm3hh0v15kMsQ0163"
          },
        });
        var mailOptions = {
          to: user.email,
          from: "kikomarco12345@gmail.com",
          subject: "Node.js Password Reset",
          text:
            "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
            "" +
            "l" +
            "ocalhost" +
            ":3000/corporatetrainee/reset/" +
            token +
            "\n\n" +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n",
        };
        transport.sendMail(mailOptions, function (error, response) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + response.message);
          return res.status(200).json("we have send an email to you to reset your Password")
          }
        });
      },
    ],
    function (err) {
      if (err) return res.status(400).json(err);
      res.redirect("/forgot");
    }
  );
};}
else if(m==6){
  res.status(400).json('No account with that email address exists.');
          
}

} catch (error) {
return res.status(400).json({ error: error.message })
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
      user1=await Instructor.findOne({username})
      if (user){
        y=await Instructor.findOne({username})
       x=await Instructor.findOne({username},'FirstTime')
      }if(!user){
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
          //console.log(x.FirstTime);
          if(user1){
          if(x.FirstTime==true){
            m=5;
           res.json(`/instructor/${y._id}`);
           await Instructor.findOneAndUpdate({username},{FirstTime:false})
          }}
          if (m==1)
          res.json(`/individualtrainee/${id}`);
          else if(m==0)
          res.json(`/instructorHome/${id}`);
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
app.post('/forgetPassPost',forgetPassPost)

