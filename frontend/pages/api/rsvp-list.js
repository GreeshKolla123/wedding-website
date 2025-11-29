import { NextApiRequest, NextApiResponse } from 'next';

const rsvpList = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Retrieve RSVP list from database
    const rsvpList = [];
    res.status(200).json(rsvpList);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default rsvpList;