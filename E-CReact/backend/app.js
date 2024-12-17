const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");  // Import body-parser

const app = express();

// Use CORS for handling cross-origin requests
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json()); // You only need this one to parse JSON
// Alternatively, you can just use `app.use(express.json())` without `body-parser`

// Import your route handlers
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const restaurantAdminRoutes = require("./routes/restaurantAdminRoutes");
const restaurantManagerRoutes = require("./routes/restaurantManagerRoutes");
const superAdminRoutes = require("./routes/superAdminRoutes");

// Register the routes
app.use("/api", authRoutes); // For /api routes
app.use("/api/customer", customerRoutes);
app.use("/api/restaurantAdmin", restaurantAdminRoutes);
app.use("/api/restaurantManager", restaurantManagerRoutes);
app.use("/api/superAdmin", superAdminRoutes);

// Set up the server port
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
