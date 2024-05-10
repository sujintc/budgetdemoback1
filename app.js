


import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";

import { mongoURI } from "./config/keys.js"; 

// Initialize Express app
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    // Start the server after successfully connecting to MongoDB
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
console.log(hello)
// Passport middleware
app.use(passport.initialize());

// Import and configure Passport using ES module syntax
import passportConfig from "./config/passport.js";
passportConfig(passport);




export default app;
