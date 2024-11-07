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
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pataleankush12:dsufegBmtVZ523hB@reactweb-cluster.txdzl.mongodb.net/?retryWrites=true&w=majority&appName=reactWeb-cluster",
      {
        useNewUrlParser: true, // Ensures compatibility with the latest MongoDB connection string parser
        useUnifiedTopology: true, // Enables the unified topology layer
        serverSelectionTimeoutMS: 30000, // 30 seconds timeout
        socketTimeoutMS: 45000,
      
      }
    );
    console.log(`Database is connected`);
  } catch (error) {
    console.error(`Database is not connected`, error);
  }
};

module.exports = connectDB;



