

import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();


app.use(cors());
app.use(express.json());


// MongoDB connection
const mongoURI = "mongodb+srv://tcsujin99:XPnLMYqJT9rF7WBt@cluster0.h7jttdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Start the server after successfully connecting to MongoDB
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);