# Wedding Website Backend
This is the backend code for the wedding website project.
## Setup
1. Install dependencies: npm install
2. Create a new database: npx prisma migrate dev
3. Start the server: npm start
## API Endpoints
* GET /api/wedding-details: Retrieve wedding details
* POST /api/wedding-details: Create wedding details
* POST /api/rsvp: RSVP to the wedding
* GET /api/rsvp-list: Retrieve the RSVP list
* POST /api/upload-photo: Upload a photo to the gallery
* GET /api/photo-gallery: Retrieve the photo gallery