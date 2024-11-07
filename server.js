const express = require("express");
const app = express();
const PORT = 5000;

const connectDB = require('./connection/db')
const formRouter = require('./routes/formRoute/formRoute')
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
connectDB();
app.use('/form', formRouter)
app.listen(PORT, () => console.log(`Server starter at port ${PORT}`));
  