const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pataleankush12:dsufegBmtVZ523hB@reactweb-cluster.txdzl.mongodb.net/?retryWrites=true&w=majority&appName=reactWeb-cluster"
    );
    console.log(`Database is connected`);
  } catch (error) {
    console.log(`Database is not connected`);
  }
};
module.exports = connectDB;
