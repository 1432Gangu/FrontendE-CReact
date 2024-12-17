const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { authorize } = require('../authMiddleware'); 

const prisma = new PrismaClient();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Register route
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  // Validate role to ensure only valid roles are assigned
  const validRoles = ["SUPER_ADMIN", "RESTAURANT_ADMIN", "RESTAURANT_MANAGER", "CUSTOMER"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ error: "Invalid role" });
  }

  try {
    // Check if the user already exists
    
    
    const existingUser = await prisma.user.findUnique({ where: { username } });
    
    if (existingUser) return res.status(400).json({ error: "User already exists" });
  
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create the user with the role
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role,
       
      },
    });
    

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Prisma Error:", error);
    res.status(500).json({ error: "Server error---" });
  }
});

// SUPER_ADMIN: Full control
router.get(
  "/admin/dashboard",
  authorize("SUPER_ADMIN"), // Use custom authorize middleware here
  (req, res) => {
    res.json({ message: "Welcome SUPER_ADMIN: Full control dashboard" });
  }
);

// RESTAURANT_ADMIN: Manage menus and orders
router.get(
  "/restaurant-admin/manage",
  authorize("RESTAURANT_ADMIN"), // Use custom authorize middleware here
  (req, res) => {
    res.json({ message: "Welcome RESTAURANT_ADMIN: Manage menus and orders" });
  }
);

// RESTAURANT_MANAGER: Handle orders and delivery
router.get(
  "/restaurant-manager/orders",
  authorize("RESTAURANT_MANAGER"), // Use custom authorize middleware here
  (req, res) => {
    res.json({ message: "Welcome RESTAURANT_MANAGER: Handle orders and delivery" });
  }
);

// CUSTOMER: Browse and place orders
router.get(
  "/customer/menu",
  authorize("CUSTOMER"), // Use custom authorize middleware here
  (req, res) => {
    res.json({ message: "Welcome CUSTOMER: Browse menu and place orders" });
  }
);

module.exports = router;
