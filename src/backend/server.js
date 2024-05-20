const express = require('express');
const bodyParser = require("body-parser");
const connection = require("./config/config.js"); // Import database connection
const adminRouter=require("./users/Admin.js")

const app = express();

// Apply middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use("/api",adminRouter)




// Database connection (improved error handling)
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    process.exit(1); // Exit process on connection failure
  }
  console.log("Connected to MySQL database");
});

const port = process.env.PORT || 30000; // Use environment variable for port or default to 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
