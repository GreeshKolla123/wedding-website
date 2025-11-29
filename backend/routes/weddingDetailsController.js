const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getWeddingDetails = async (req, res) => {
  try {
    const weddingDetails = await prisma.weddingDetails.findFirst();
    res.json(weddingDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching wedding details' });
  }
};