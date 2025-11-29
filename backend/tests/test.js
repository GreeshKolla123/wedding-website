const request = require('supertest');
const app = require('../app');
describe('Wedding Details API', () => {
  it('should retrieve wedding details', async () => {
    const response = await request(app).get('/api/wedding-details');
    expect(response.status).toBe(200);
  });
  it('should create wedding details', async () => {
    const response = await request(app).post('/api/wedding-details').send({ coupleName: 'John Doe', weddingDate: '2024-01-01', location: 'New York' });
    expect(response.status).toBe(201);
  });
});