CREATE DATABASE IF NOT EXISTS booking;

USE booking;

CREATE TABLE IF NOT EXISTS listings (
  listingID SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  guestMax INTEGER,
  pricePerNigh INTEGER,
  cleaningFee
)