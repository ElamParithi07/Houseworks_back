const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const mongoose=require("mongoose")
const express = require("express");
const BookingRouter = require("./routes/BookingRouter");
const JobRouter = require("./routes/JobRouter");
const PersonRouter = require("./routes/PersonRouter");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(JobRouter);
app.use(PersonRouter);
app.use(BookingRouter);
const uri = process.env.Mongo_url;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB ATlas')
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });
app.listen(process.env.PORT,()=>{
    console.log("Server running on "+ process.env.PORT);
});