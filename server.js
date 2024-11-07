// const express = require("express");
// const app = express();
// const PORT = 5000;

// const connectDB = require('./connection/db')
// const formRouter = require('./routes/formRoute/formRoute')
// const cors = require("cors");
// app.use(cors());
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// try {
//     await connectDB();
// } catch (error) {
    
// }

// app.use('/form', formRouter)
// app.listen(PORT, () => console.log(`Server starter at port ${PORT}`));
  
const express = require("express");
const app = express();
const PORT = 5000;

const connectDB = require('./connection/db');
const formRouter = require('./routes/formRoute/formRoute');
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startServer = async () => {
    try {
        await connectDB(); // Ensure the database connection is established first
        console.log("Database connected successfully");
        
        app.use('/form', formRouter);

        app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process if database connection fails
    }
};

startServer(); // Start the server
