
const express = require("express");
const router = express.Router();
const { updateOrderStatus, assignToDelivery } = require("../controllers/restaurantManagerController");


router.put("/updateOrderStatus/:id", updateOrderStatus);


router.put("/assignToDelivery/:id", assignToDelivery);

module.exports = router;
