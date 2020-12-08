CREATE TABLE IF NOT EXISTS listings (
  listingID SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  guestMax INTEGER,
  pricePerNight INTEGER,
  cleaningFee NUMERIC(5,2),
  serviceFee NUMERIC(5,2),
  rating NUMERIC(3,2),
  numRatings INTEGER
);

CREATE TABLE IF NOT EXISTS reservations (
  resID SERIAL PRIMARY KEY,
  listingID INTEGER,
  checkIn DATE NOT NULL,
  checkOut DATE NOT NULL,
  adults INTEGER,
  children INTEGER,
  infants INTEGER,
  totalPrice NUMERIC(7,2) NOT NULL
);