const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
router.post('/', async (req, res) => {
  const photo = await prisma.photoGallery.create({
    data: req.body,
  });
  res.json(photo);
});
router.get('/', async (req, res) => {
  const photoGallery = await prisma.photoGallery.findMany();
  res.json(photoGallery);
});
module.exports = router;