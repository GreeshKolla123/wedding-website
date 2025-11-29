import { NextApiRequest, NextApiResponse } from 'next';

const uploadPhoto = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { photo } = req.body;
    // Upload photo to cloud storage
    res.status(201).json({ message: 'Photo uploaded successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default uploadPhoto;