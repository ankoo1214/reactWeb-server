// const mongoose = require("mongoose");
// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://pataleankush12:dsufegBmtVZ523hB@reactweb-cluster.txdzl.mongodb.net/?retryWrites=true&w=majority&appName=reactWeb-cluster",
//       {
//         serverSelectionTimeoutMS: 30000,
       
//       }
//     );
//     console.log(`Database is connected`);
//   } catch (error) {
//     console.log(`Database is not connected`);
//   }
// };
// module.exports = connectDB;
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://pataleankush12:dsufegBmtVZ523hB@reactweb-cluster.txdzl.mongodb.net/?retryWrites=true&w=majority&appName=reactWeb-cluster",
//       {
//         useNewUrlParser: true, // Ensures compatibility with the latest MongoDB connection string parser
//         useUnifiedTopology: true, // Enables the unified topology layer
//         serverSelectionTimeoutMS: 30000, // 30 seconds timeout
//         socketTimeoutMS: 45000,
      
//       }
//     );
//     console.log(`Database is connected`);
//   } catch (error) {
//     console.error(`Database is not connected`, error);
//   }
// };

// module.exports = connectDB;
const express = require("express");
const app = express();
const PORT = 5000;

const connectDB = require("./connection/db");  // Assuming your DB connection logic is in this file
const formRouter = require("./routes/formRoute/formRoute");  // Assuming your form routes are in this file
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

(async () => {
  try {
    await connectDB();  // Ensure the database connection is completed
    console.log("Database connected successfully.");

    // Only start the server after the DB connection is successful
    app.use("/form", formRouter);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit process if the connection fails
  }
})();


