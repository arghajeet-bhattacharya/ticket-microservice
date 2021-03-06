import request from 'supertest';
import { app } from '../../server';

it('should clear cookie after successfull logout', async () => {
  await request(app)
    .post('/api/users/registration')
    .send({
      email: 'bruce.wayne@dc.com',
      password: 'dark@123',
    })
    .expect(201);

  const response = await request(app).post('/api/users/logout').expect(200);
  expect(response.get('Set-Cookie')[0]).toEqual(
    'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly',
  );
});
