
const express = require("express");
const router = express.Router();
const { addMenuItem, removeMenuItem, viewRestaurantOrders } = require("../controllers/restaurantAdminController");

router.post("/addMenuItem", addMenuItem);
router.delete("/removeMenuItem/:id", removeMenuItem);

router.get("/orders", viewRestaurantOrders);

module.exports = router;
