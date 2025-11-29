const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.createRsvp = async (req, res) => {
  try {
    const { name, numAttendees, dietaryNotes } = req.body;
    const rsvp = await prisma.guests.create({ data: { name, numAttendees, dietaryNotes } });
    res.json(rsvp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating RSVP' });
  }
};