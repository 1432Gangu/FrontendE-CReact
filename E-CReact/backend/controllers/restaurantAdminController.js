// Controller (restaurantAdminController.js)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addMenuItem = async (req, res) => {
  const { dishName, price, restaurantId } = req.body;
  const menuItem = await prisma.menu.create({
    data: {
      dishName,
      price,
      restaurantId
    }
  });
  res.json(menuItem);
};

exports.removeMenuItem = async (req, res) => {
  const { id } = req.params;
  await prisma.menu.delete({
    where: { id: Number(id) }
  });
  res.json({ message: "Menu item deleted successfully" });
};

exports.viewRestaurantOrders = async (req, res) => {
  const { restaurantId } = req.query;
  const orders = await prisma.order.findMany({
    where: {
      restaurantId: Number(restaurantId)
    }
  });
  res.json(orders);
};
