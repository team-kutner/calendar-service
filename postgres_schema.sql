
CREATE TABLE IF NOT EXISTS listings (
  id INT GENERATED ALWAYS AS IDENTITY,
  listingID SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  guestMax INTEGER,
  pricePerNigh INTEGER,
  cleaningFee NUMERIC(5,2),
  serviceFee NUMERIC(5,2),
  rating NUMERIC(3,2),
  numRatings INTEGER
);

CREATE TABLE IF NOT EXISTS reservations (
  id INT GENERATED ALWAYS AS IDENTITY,
  resID SERIAL PRIMARY KEY,
  listingID INTEGER,
  checkIn DATE,
  checkOut DATE,
  adults INTEGER,
  children INTEGER,
  infants INTEGER,
  totalprice NUMERIC(7,2),
  CONSTRAINT fk_listing
    FOREIGN KEY(listingID)
      REFERENCES listings(listingID)
        ON DELETE CASCADE
);