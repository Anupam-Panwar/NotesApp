const express = require("express");
const app = express();

const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log("Connected to MongoDB");
  }
);


// Middleware to print the request details
app.use((req, res, next) => {
  console.log(" -> Request received  <- ");
  console.log(process.env.PORT + " -- " + req.url + " --  " + req.method);
  next();
});

// Route to process the request related to notes
app.use("/notes", require("./controllers/notes"));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname + "/Client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname+'/Client/build/index.html'));
    });
}

app.listen(process.env.PORT || 8000, (err) => {
  if (err) {
    console.log("Error in starting server");
  } else {
    console.log("Server is running on port " + process.env.PORT);
  }
});
