const express = require("express");
const Form = require("../../models/formModel/formModel");
const route = express.Router();



// GET endpoint to retrieve all forms
route.get('/', async (req, res) => {
  try {
    // Fetch all form data from the database
    const forms = await Form.find();  // Mongoose query to fetch all forms
    
    // Send the data back as a response
    res.json(forms);
  } catch (error) {
    // Log error details to the server console for debugging
    console.error("Error retrieving forms:", error);
    
    // Send error response in JSON format with additional error details
    res.status(500).json({
      message: "Server error, unable to retrieve forms",
      error: error.message,        // Include the error message
      stack: error.stack           // Optionally, include the stack trace for debugging (useful in development)
    });
  }
});




route.post("/submit", async (req, res) => {
  const { name, email, message, contact } = req.body;
  if (!name || !email || !message || !contact) {
    return res.status(400).json({ Status: "All fields are required" });
  }
  try {
    const newMessage = await Form.create({
      name,
      email,
      message,
      contact,
    });
    return res.status(202).json({ Status: "Form submitted Successfully" });
  } catch (error) {
    return res.status(500).json({
      Status: "An error occurred form not submitted",
      error: {
        message: error.message,
        stack: error.stack,
      },
    });
  }
});
module.exports = route;
