import { NextApiRequest, NextApiResponse } from 'next';

const photoGallery = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Retrieve photo gallery from database
    const photoGallery = [];
    res.status(200).json(photoGallery);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default photoGallery;