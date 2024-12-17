const express = require("express");
const router = express.Router();
const { createRestaurant, viewUsers, viewOrders } = require("../controllers/superAdminController");


router.post("/createRestaurant", createRestaurant);
router.get("/users", viewUsers);
router.get("/orders", viewOrders);

module.exports = router;
