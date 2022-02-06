import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

// Apply middleware
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

// Initialise environmental constant
const CONNECTION_URI = process.env.CONNECTION_URI;
const PORT = process.env.PORT || 4000;

// Connect mongoDB server and Listen
mongoose.connect(CONNECTION_URI)
  .then(() => app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}...`)))
  .catch(error => console.log(error));
