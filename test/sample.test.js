import express from 'express';
import request from 'supertest';
import sampleRoutes from '../src/routes/sample.route';

const app = express();
app.use(sampleRoutes);

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
