# wedding-website

A modern online wedding invitation website with RSVP system and photo gallery.

## Tech Stack

- **Frontend**: Next.js 14
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/FfnnHRPoygOhto1mMckkHd/Wedding-Service-Website--Community-?node-id=1-1389&t=sqxqeENx42iYCZay-1))

## Project Structure

```
wedding-website/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- RSVP system
- Photo gallery
- Wedding details management
- Guest list management

## API Endpoints

- `GET /api/wedding-details` - Retrieve wedding details
- `POST /api/rsvp` - RSVP to the wedding
- `GET /api/rsvp-list` - Retrieve the RSVP list
- `POST /api/upload-photo` - Upload a photo to the gallery
- `GET /api/photo-gallery` - Retrieve the photo gallery

## License

MIT
