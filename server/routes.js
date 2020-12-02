const controller = require('./controllers');
const router = require('express').Router();

//Connect controller methods to their corresponding routes

// Read reservations
router.get('/api/homes/:id/reservation', controller.reservation.get);

// Create reservation
router.post('/api/homes/:id/reservation', controller.reservation.post);

// Update reseravation
router.put('/api/homes/:id/reservation', controller.reservation.update);

// Delete reservation
router.delete('/api/homes/:id/reservation', controller.reservation.delete);

// Read listings
router.get('/api/homes/:id/listing', controller.listing.get);

// Create listing
router.post('/api/homes/create/listing', controller.listing.post);

// Update listing
router.put('/api/homes/:id/:column', controller.listing.update);

// Delete listing
router.delete('/api/homes/:id/listing', controller.listing.delete);


module.exports = router;