
const express = require("express");
const router = express.Router();
const { browseMenu, addToCart, viewCart, placeOrder, trackOrder, viewPastOrders } = require("../controllers/customerController");


router.get("/menu", browseMenu);

router.post("/addToCart", addToCart);

router.get("/viewCart", viewCart);

router.post("/placeOrder", placeOrder);

router.get("/trackOrder/:orderId", trackOrder);

router.get("/viewPastOrders", viewPastOrders);

module.exports = router;
