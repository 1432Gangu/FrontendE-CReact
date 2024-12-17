
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.browseMenu = async (req, res) => {
  const menuItems = await prisma.menu.findMany();
  res.json(menuItems);
};

exports.addToCart = async (req, res) => {
  const { customerId, menuItemId, quantity } = req.body;
  const cartItem = await prisma.cart.upsert({
    where: { customerId_menuItemId: { customerId, menuItemId } },
    update: { quantity },
    create: { customerId, menuItemId, quantity }
  });
  res.json(cartItem);
};

exports.viewCart = async (req, res) => {
  const { customerId } = req.query;
  const cartItems = await prisma.cart.findMany({
    where: { customerId: Number(customerId) },
    include: {
      menuItem: true
    }
  });
  res.json(cartItems);
};

exports.placeOrder = async (req, res) => {
  const { customerId, items } = req.body;
 
  const order = await prisma.order.create({
    data: {
      customerId,
      totalAmount: 100, 
      menuItems: {
        connect: items.map(item => ({ id: item.menuItemId }))
      }
    }
  });
  res.json(order);
};

exports.trackOrder = async (req, res) => {
  const { orderId } = req.params;
  const order = await prisma.order.findUnique({
    where: { id: Number(orderId) }
  });
  res.json(order);
};

exports.viewPastOrders = async (req, res) => {
  const { customerId } = req.query;
  const orders = await prisma.order.findMany({
    where: { customerId: Number(customerId) }
  });
  res.json(orders);
};
