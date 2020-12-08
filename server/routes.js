const controller = require('./controllers');
const router = require('express').Router();

//Connect controller methods to their corresponding routes

// Read all info for a specific listing (that someone is making a reservations for)
router.get('/api/homes/:id/reservation', controller.reservation.get);

// Create reservation
router.post('/api/homes/create/reservation', controller.reservation.post);

// Update reseravation
router.put('/api/homes/:id/:column/reservation', controller.reservation.update);

// Delete reservation
router.delete('/api/homes/:id/reservation', controller.reservation.delete);

// Read all unavailable dates for a listing
router.get('/api/homes/:id/listing', controller.listing.get);

// Create listing
router.post('/api/homes/create/listing', controller.listing.post);

// Update listing
router.put('/api/homes/:id/:column/listing', controller.listing.update);

// Delete listing
router.delete('/api/homes/:id/listing', controller.listing.delete);


module.exports = router;