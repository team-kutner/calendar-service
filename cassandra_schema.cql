CREATE KEYSPACE IF NOT EXISTS booking
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE booking;

CREATE TYPE IF NOT EXISTS reservation (
  resID int,
  checkIn date,
  checkOut date,
  adults int,
  children int,
  infants int,
  totalPrice double
);

CREATE TABLE IF NOT EXISTS listings (
  listingID int,
  name varchar,
  description varchar,
  guestMax int,
  pricePerNight int,
  cleaningFee double,
  serviceFee double,
  rating double,
  numRatings int,
  reservations set <frozen <reservation>>,
  PRIMARY KEY (listingID)
);