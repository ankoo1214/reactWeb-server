// const express = require("express");
// const app = express();
// const PORT = 5000;

// const connectDB = require('./connection/db')
// const formRouter = require('./routes/formRoute/formRoute')
// const cors = require("cors");
// app.use(cors());
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// connectDB();
// app.use('/form', formRouter)
// app.listen(PORT, () => console.log(`Server starter at port ${PORT}`));
  
const express = require("express");
const app = express();
const PORT = 5000;

const connectDB = require("./connection/db");
const formRouter = require("./routes/formRoute/formRoute");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

(async () => {
  try {
    await connectDB(); // Ensure the database connection is completed
    console.log("Database connected successfully.");

    // Only start the server after the DB connection is successful
    app.use("/form", formRouter);
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit process if the connection fails
  }
})();
