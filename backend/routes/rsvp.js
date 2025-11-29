const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
router.post('/', async (req, res) => {
  const rsvp = await prisma.rsvp.create({
    data: req.body,
  });
  res.json(rsvp);
});
router.get('/', async (req, res) => {
  const rsvpList = await prisma.rsvp.findMany();
  res.json(rsvpList);
});
module.exports = router;