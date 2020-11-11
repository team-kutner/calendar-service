const controller = require('./controllers');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/api/homes/:id/reservation', controller.reservation.get);

router.post('/api/homes/:id/reservation', controller.reservation.post);

router.get('/api/homes/:id/calendar', controller.calendar.get);

module.exports = router;