CREATE DATABASE IF NOT EXISTS booking;

USE booking;

CREATE TABLE dates (
	id INT,
	date DATE,
	available BOOLEAN,
	price_per_night DOUBLE,
	cleaning_fee DOUBLE,
	service_fee DOUBLE,
	total_price DOUBLE,
	PRIMARY KEY (id)
);

CREATE TABLE reservations (
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(50),
	check_in DATE NOT NULL,
	check_out DATE NOT NULL,
	adults INT,
	children INT,
	infants INT,
	total_price DOUBLE  NOT NULL,
	PRIMARY KEY (id)
);

insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (1, '2020-07-04', true, 433.11, 40.2, 14.04, 1904.74);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (2, '2020-08-19', false, 425.54, 55.7, 83.86, 1492.23);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (3, '2020-03-05', true, 310.14, 47.45, 14.03, 1256.88);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (4, '2020-10-21', true, 466.32, 72.42, 7.21, 1759.3);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (5, '2020-05-17', true, 236.5, 26.09, 32.76, 917.19);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (6, '2020-02-15', false, 441.14, 44.05, 48.87, 1335.12);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (7, '2020-06-14', true, 402.18, 24.39, 45.27, 1033.72);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (8, '2020-07-30', false, 320.1, 44.37, 7.09, 1835.91);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (9, '2020-10-24', true, 318.68, 78.66, 63.38, 1910.45);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (10, '2020-09-26', false, 323.87, 44.34, 72.43, 1422.18);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (11, '2020-08-07', false, 154.27, 52.91, 50.4, 1015.89);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (12, '2019-11-26', false, 401.42, 89.25, 32.09, 923.73);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (13, '2020-04-17', false, 134.37, 28.53, 97.78, 1191.46);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (14, '2020-04-17', true, 355.0, 94.52, 73.05, 1555.6);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (15, '2020-10-26', false, 458.69, 65.85, 69.26, 248.12);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (16, '2020-04-30', false, 147.29, 59.21, 67.83, 1408.48);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (17, '2019-12-31', true, 154.13, 46.33, 12.9, 1003.63);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (18, '2020-06-11', true, 277.5, 75.08, 70.75, 1025.82);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (19, '2020-01-15', false, 166.51, 22.78, 31.73, 338.32);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (20, '2020-03-27', true, 219.66, 13.81, 47.63, 620.86);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (21, '2020-05-31', false, 156.63, 85.64, 55.09, 1413.82);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (22, '2020-05-26', true, 134.23, 13.04, 74.76, 1648.64);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (23, '2020-06-10', true, 389.08, 72.08, 43.75, 1415.59);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (24, '2020-07-16', true, 179.88, 66.72, 66.24, 558.23);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (25, '2020-06-06', false, 279.76, 55.42, 64.1, 334.71);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (26, '2020-08-17', false, 469.59, 62.04, 14.63, 938.08);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (27, '2020-07-03', false, 84.06, 79.67, 66.95, 915.72);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (28, '2019-12-13', false, 392.44, 38.67, 86.78, 1430.48);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (29, '2020-07-11', false, 186.65, 86.73, 89.75, 1411.67);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (30, '2019-11-17', true, 230.41, 14.27, 78.49, 1605.52);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (31, '2020-06-13', true, 86.16, 2.83, 14.27, 589.98);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (32, '2020-04-04', false, 234.05, 54.98, 13.85, 390.23);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (33, '2020-02-04', true, 187.95, 76.14, 92.44, 1108.51);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (34, '2020-09-22', false, 286.91, 61.84, 54.85, 1363.38);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (35, '2020-08-26', false, 448.54, 76.45, 56.58, 875.21);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (36, '2020-10-19', true, 198.37, 64.71, 93.71, 1593.87);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (37, '2020-01-08', false, 480.31, 58.37, 50.97, 1034.94);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (38, '2020-08-08', false, 312.13, 84.43, 48.47, 1372.14);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (39, '2020-05-09', true, 305.78, 52.86, 60.7, 1982.22);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (40, '2020-03-27', false, 218.06, 95.09, 77.09, 1740.0);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (41, '2020-08-02', true, 150.43, 17.4, 6.01, 1733.05);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (42, '2020-01-08', true, 150.65, 6.13, 84.76, 622.05);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (43, '2020-06-11', false, 474.3, 17.59, 29.25, 1992.58);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (44, '2020-08-12', false, 307.29, 27.82, 33.06, 1439.11);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (45, '2020-03-25', false, 77.16, 40.93, 13.62, 990.17);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (46, '2020-08-05', false, 205.44, 10.39, 40.05, 422.89);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (47, '2020-05-25', false, 201.98, 21.11, 48.33, 1449.73);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (48, '2020-07-26', true, 374.05, 49.59, 1.42, 208.83);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (49, '2020-02-17', true, 240.05, 60.48, 16.52, 1523.48);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (50, '2019-11-14', true, 54.7, 73.54, 53.51, 1825.12);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (51, '2019-12-06', false, 366.38, 40.85, 17.69, 987.91);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (52, '2020-04-04', false, 156.75, 37.23, 91.7, 1837.4);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (53, '2019-12-29', true, 328.91, 5.8, 41.98, 1926.86);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (54, '2019-12-03', false, 399.51, 32.86, 23.94, 1136.85);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (55, '2020-09-15', false, 86.16, 82.71, 99.14, 604.15);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (56, '2020-05-16', true, 146.28, 17.52, 69.12, 1452.58);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (57, '2020-03-12', false, 467.15, 76.28, 79.85, 1973.46);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (58, '2020-01-02', false, 431.98, 57.08, 44.43, 1370.62);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (59, '2020-07-19', true, 99.34, 69.18, 87.45, 773.94);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (60, '2020-06-30', true, 458.97, 70.55, 1.61, 1623.92);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (61, '2020-06-02', false, 177.86, 35.71, 30.83, 1656.17);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (62, '2020-04-01', true, 492.34, 31.44, 54.2, 1263.0);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (63, '2020-10-15', true, 309.9, 64.07, 71.91, 1986.47);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (64, '2020-04-14', true, 447.26, 67.44, 28.6, 726.92);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (65, '2020-03-18', true, 410.72, 37.95, 77.2, 763.74);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (66, '2020-06-06', false, 206.74, 3.21, 50.56, 479.32);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (67, '2020-08-21', false, 255.17, 80.21, 83.06, 801.91);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (68, '2020-02-13', false, 51.18, 32.0, 47.04, 507.64);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (69, '2020-02-22', false, 169.83, 6.34, 66.96, 1774.6);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (70, '2020-07-15', true, 98.47, 64.45, 56.6, 1596.31);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (71, '2020-02-10', false, 332.92, 62.65, 19.09, 483.05);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (72, '2020-04-23', true, 173.44, 77.43, 72.94, 454.84);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (73, '2020-11-06', false, 490.9, 73.92, 8.46, 1336.73);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (74, '2020-01-20', true, 282.22, 87.06, 49.7, 858.7);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (75, '2020-05-15', true, 261.16, 83.08, 92.28, 668.36);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (76, '2020-01-23', false, 130.05, 22.58, 31.38, 1488.73);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (77, '2020-08-23', true, 458.09, 35.24, 28.0, 1687.77);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (78, '2020-04-19', false, 455.36, 7.98, 27.16, 237.15);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (79, '2019-12-27', false, 413.0, 24.6, 78.97, 1978.42);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (80, '2019-12-20', false, 307.22, 85.08, 69.0, 1565.89);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (81, '2019-12-24', true, 399.29, 56.45, 25.39, 1353.08);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (82, '2020-04-12', false, 117.76, 38.13, 33.34, 658.43);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (83, '2020-11-04', false, 358.93, 62.95, 42.61, 1722.61);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (84, '2020-10-09', false, 445.71, 77.35, 94.82, 1248.05);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (85, '2019-12-20', false, 90.43, 75.56, 28.62, 1408.82);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (86, '2020-01-15', true, 440.11, 99.31, 87.12, 1745.74);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (87, '2020-03-19', true, 118.77, 32.21, 40.41, 852.09);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (88, '2020-06-20', true, 179.51, 97.37, 91.97, 1285.19);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (89, '2020-10-01', false, 392.59, 70.15, 51.91, 680.26);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (90, '2020-10-25', false, 323.08, 69.26, 11.7, 1801.74);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (91, '2020-10-25', false, 247.17, 92.22, 73.15, 1800.79);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (92, '2020-01-13', false, 182.99, 26.84, 53.86, 580.95);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (93, '2020-05-24', true, 361.13, 9.75, 9.39, 1514.48);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (94, '2020-07-09', false, 324.2, 46.82, 57.5, 1222.03);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (95, '2019-11-14', false, 467.1, 61.07, 43.49, 1964.33);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (96, '2019-12-03', false, 115.69, 70.25, 24.53, 1684.38);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (97, '2020-10-26', true, 329.73, 33.66, 45.42, 1736.0);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (98, '2020-08-23', true, 337.94, 16.33, 48.12, 1495.66);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (99, '2020-08-16', true, 76.72, 11.71, 98.7, 1457.72);
insert into dates (id, date, available, price_per_night, cleaning_fee, service_fee, total_price) values (100, '2020-08-02', false, 369.12, 20.16, 56.79, 926.8);
