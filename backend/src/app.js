require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
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
app.use(express.json());
app.use(cors());
app.use(cookieParser());

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

//routes
app.use("/admin", adminRoutes);
app.use("/instructor", intructorRoutes);
app.use("/courses", coursesRoutes);
app.use("/indiviualtrainee", individualTraineeRoutes);
app.use("/corporatetrainee", corporateTraineeRoutes);
