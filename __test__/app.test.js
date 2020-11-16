const app = require('./server/app.js');
const request = require('supertest');

describe('Test root path', () => {
  test('It should receive response from GET method', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test GET request for listing data', () => {
  test('It should receive price per night, fees, and rating info', () => {
    return request(app)
      .get('/api/homes/75/reservation')
      .then(response => {
        let data = response.body[0];

        expect(data.pricePerNight).toBeDefined();
        expect(data.cleaningFee).toBeDefined();
        expect(data.serviceFee).toBeDefined();
        expect(data.rating).toBeDefined();
        expect(data.numRatings).toBeDefined();
      });
  });
});

describe('Test GET request when component mounts', () => {
  test('It should receive an array of unavailable dates', () => {
    return request(app)
      .get('/api/homes/75/listing')
      .then(response => {
        let data = response.body;
        for (var date of data) {
          expect(date).toBeDefined();
        }
      });
  });
});