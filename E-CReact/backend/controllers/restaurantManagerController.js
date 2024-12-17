
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await prisma.order.update({
    where: { id: Number(id) },
    data: { status }
  });
  res.json(order);
};

exports.assignToDelivery = async (req, res) => {
  const { id } = req.params;
  const { deliveryPerson } = req.body;
  const order = await prisma.order.update({
    where: { id: Number(id) },
    data: { deliveryPerson, status: "Out for Delivery" }
  });
  res.json(order);
};
