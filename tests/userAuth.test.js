/* eslint-disable no-undef */
require('dotenv').config();
const mongoose = require('mongoose');
const testRequest = require('supertest');
const app = require('../app');
const User = require('../models/user');
const { testUser, fakeUser } = require('./testUsers');

const { DB_TEST_HOST } = process.env;

describe('registration', () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_TEST_HOST)
      .then(() => console.log('DB Connected'))
      .catch(e => console.log(e));
    await User.deleteMany({});
  });

  it('should registration new user', async () => {
    const response = await testRequest(app)
      .post('/api/users/register')
      .send(testUser);

    expect(response.statusCode).toBe(201);
    expect(response.body.user.email).toBe(testUser.email);
    expect(response.body.user.subscription).toBe('starter');
  });

  it('should not registrate the same user 2 times', async () => {
    const response = await testRequest(app)
      .post('/api/users/register')
      .send(testUser);

    expect(response.statusCode).toBe(409);
  });

  it('login user', async () => {
    const response = await testRequest(app)
      .post('/api/users/login')
      .send(testUser);

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toMatch(
      /^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$/
    );
  });

  it('should not login unregistered user', async () => {
    const response = await testRequest(app)
      .post('/api/users/login')
      .send(fakeUser);

    expect(response.statusCode).toBe(401);
  });

  afterAll(async () => {
    await mongoose.connection
      .close()
      .then(() => console.log('DB disconnected'));
  });
});
