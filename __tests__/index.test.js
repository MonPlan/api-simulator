const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should respond with bad request the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(400);
  });
});
