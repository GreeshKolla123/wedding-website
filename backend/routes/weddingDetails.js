const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
router.get('/', async (req, res) => {
  const weddingDetails = await prisma.weddingDetails.findMany();
  res.json(weddingDetails);
});
router.post('/', async (req, res) => {
  const weddingDetails = await prisma.weddingDetails.create({
    data: req.body,
  });
  res.json(weddingDetails);
});
module.exports = router;