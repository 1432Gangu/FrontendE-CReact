const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createRestaurant = async (req, res) => {
  console.log("Controller function called");
  console.log("createRestaurant function called")
  const { name, address, contactNumber } = req.body;
  try {
    const restaurant = await prisma.restaurantDetails.create({
      data: {
        name,
        address,
        contactNumber
      }
    });
    res.status(201).json(restaurant); 
  } catch (error) {
    res.status(500).json({ error: "Server error: Could not create restaurant" });
  }
};

exports.viewUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error: Could not fetch users" });
  }
};

exports.viewOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Server error: Could not fetch orders" });
  }
};
