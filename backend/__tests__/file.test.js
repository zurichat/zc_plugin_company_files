require('express-async-errors');
const request = require('supertest');
const app = require('../../server');

describe('Files Test', () => {
  // it('should insert into the db', async () => {
  //   const response = await request(app)
  //     .post('/api/v1/files/upload')
  //     .send(require('./files.json'));

  //   expect(response.statusCode).toEqual(201);

  // })

  it('should get all files', async () => {
    const response = await request(app)
      .get('/api/v1/files/all');

    expect(response.statusCode).toEqual(200);
  });

  it('should get files by specified type', async () => {
    const response = await request(app)
      .get('/api/v1/files/type/zip');

    expect(response.statusCode).toEqual(200);
    // expect(response.body)
  })
});