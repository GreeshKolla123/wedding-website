const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getGallery = async (req, res) => {
  try {
    const gallery = await prisma.gallery.findMany();
    res.json(gallery);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching gallery' });
  }
};
exports.createGallery = async (req, res) => {
  try {
    const { photo, description } = req.body;
    const galleryItem = await prisma.gallery.create({ data: { photo, description } });
    res.json(galleryItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating gallery item' });
  }
};