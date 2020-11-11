CREATE DATABASE IF NOT EXISTS booking;

USE booking;

CREATE TABLE IF NOT EXISTS listings (
	listingID INT AUTO_INCREMENT,
	name VARCHAR(100),
	description VARCHAR(250),
	pricePerNight DOUBLE,
	cleaningFee DOUBLE,
	serviceFee DOUBLE,
	rating DOUBLE,
	numRatings INT,
	PRIMARY KEY (listingID)
);

CREATE TABLE IF NOT EXISTS reservations (
	resID INT AUTO_INCREMENT,
	listingID INT,
	email VARCHAR(50),
	checkIn DATE NOT NULL,
	checkOut DATE NOT NULL,
	adults INT,
	children INT,
	infants INT,
	totalPrice DOUBLE NOT NULL,
	PRIMARY KEY (resID),
	FOREIGN KEY (listingID) REFERENCES listings (listingID)
);

CREATE TABLE IF NOT EXISTS dates (
	dateID INT AUTO_INCREMENT,
	listingID INT,
	date DATE,
	available BOOLEAN,
	PRIMARY KEY (dateID),
	FOREIGN KEY (listingID) REFERENCES listings (listingID)
);
