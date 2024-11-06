const express = require("express");
const Form = require("../../models/formModel/formModel");
const route = express.Router();

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
    return res.status(500).json({ Status: "An error occurred" });
  }
}); 
module.exports = route;
