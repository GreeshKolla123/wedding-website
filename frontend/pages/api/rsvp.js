import { NextApiRequest, NextApiResponse } from 'next';

const rsvp = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { guestName, numberOfGuests, attending } = req.body;
    // Save RSVP to database
    res.status(201).json({ message: 'RSVP saved successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default rsvp;