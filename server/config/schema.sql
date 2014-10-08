USE clickagoosdb;
-- USE clickaroosTest;
-- USE Test;

drop table users;
drop table campaigns;
drop table ab_tests;
drop table ab_imgs;

CREATE TABLE users (
	user_id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(40) NOT NULL UNIQUE,
	password VARCHAR(100) NOT NULL,
	email VARCHAR(40) NOT NULL UNIQUE,
	phone BIGINT UNIQUE,
	credit_card BIGINT UNIQUE,
	PRIMARY KEY(user_id)
);

CREATE TABLE campaigns (
  campaign_id INT NOT NULL AUTO_INCREMENT,
  campaign_title VARCHAR(50) NOT NULL UNIQUE,
  user_id BIGINT NOT NULL,
  clicks BIGINT NOT NULL,
  views BIGINT NOT NULL,
  -- time_viewed BIGINT NOT NULL UNIQUE,
  -- location VARCHAR(40) NOT NULL UNIQUE,
  tablet BIGINT,
  desktop BIGINT,
  android BIGINT,
  iphone BIGINT,
  webmail BIGINT,
  outlook BIGINT,
  apple_mail BIGINT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  modified_at DATETIME ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(campaign_id)
);

CREATE TABLE ab_tests (
  ab_test_id INT NOT NULL AUTO_INCREMENT,
  ab_test_title VARCHAR(50) NOT NULL UNIQUE,
  campaign_id BIGINT NOT NULL,
  start_time DATETIME NOT NULL,
  milliseconds_after_start BIGINT NOT NULL,
  milliseconds_pick_winner BIGINT NOT NULL,
  winner_imgid BIGINT,
  winner_views BIGINT,
  winner_clicks BIGINT,
  PRIMARY KEY(ab_test_id)
);

CREATE TABLE ab_imgs (
  ab_imgs_id INT NOT NULL AUTO_INCREMENT,
  ab_test_id BIGINT NOT NULL,
  clicks BIGINT NOT NULL,
  views BIGINT NOT NULL,
  asset_url VARCHAR(150) NOT NULL,
  redirect_url VARCHAR(150) NOT NULL,
  PRIMARY KEY(ab_imgs_id)
);

CREATE TABLE ab_open_time(
  ab_test_id INT NOT NULL,
  campaign_id BIGINT NOT NULL,
  0_1 BIGINT,
  1_2 BIGINT,
  2_3 BIGINT,
  3_4 BIGINT,
  4_5 BIGINT,
  5_6 BIGINT,
  6_7 BIGINT,
  7_8 BIGINT,
  8_9 BIGINT,
  9_10 BIGINT,
  10_11 BIGINT,
  11_12 BIGINT,
  12_13 BIGINT,
  13_14 BIGINT,
  14_15 BIGINT,
  15_16 BIGINT,
  16_17 BIGINT,
  17_18 BIGINT,
  18_19 BIGINT,
  19_20 BIGINT,
  20_21 BIGINT,
  21_22 BIGINT,
  22_23 BIGINT,
  23_24 BIGINT,
  PRIMARY KEY(ab_test_id)
);

CREATE TABLE ab_click_time(
  ab_test_id INT NOT NULL,
  campaign_id BIGINT NOT NULL,
  0_1 BIGINT,
  1_2 BIGINT,
  2_3 BIGINT,
  3_4 BIGINT,
  4_5 BIGINT,
  5_6 BIGINT,
  6_7 BIGINT,
  7_8 BIGINT,
  8_9 BIGINT,
  9_10 BIGINT,
  10_11 BIGINT,
  11_12 BIGINT,
  12_13 BIGINT,
  13_14 BIGINT,
  14_15 BIGINT,
  15_16 BIGINT,
  16_17 BIGINT,
  17_18 BIGINT,
  18_19 BIGINT,
  19_20 BIGINT,
  20_21 BIGINT,
  21_22 BIGINT,
  22_23 BIGINT,
  23_24 BIGINT,
  PRIMARY KEY(ab_test_id)
);

/* test data */
-- test users
insert into users (username, password, email, phone, credit_card) values ('armando', 'armando', 'aaa@aaa.com', 155555523, 2);
insert into users (username, password, email, phone, credit_card) values ('david', 'david', 'bbb@bbb.com', 325555551, 3);
insert into users (username, password, email, phone, credit_card) values ('mai', 'mai', 'ccc@ccc.com', 425555552, 4);
insert into users (username, password, email, phone, credit_card) values ('eddie', 'eddie', 'ddd@ddd.com', 255555535, 5);

-- test campagins
insert into campaigns( campaign_title, user_id, clicks, views, tablet, desktop, android, iphone, webmail ) values ( 'Winter Sale', 1, 4000, 10000, 400, 2000, 800, 700, 1000 );
insert into campaigns( campaign_title, user_id, clicks, views, tablet, desktop, android, iphone, webmail ) values ( 'Fall Sale', 1, 3000, 9000, 400, 1500, 600, 500, 700 );
insert into campaigns( campaign_title, user_id, clicks, views, tablet, desktop, android, iphone, webmail ) values ( 'Summer Sale', 1, 1000, 7000, 100, 600, 150, 130, 400 );

-- test ab_tests
insert into ab_tests( ab_test_title, campaign_id, start_time, milliseconds_after_start, milliseconds_pick_winner ) values ( 'Splash Photo', 1, '2014-11-27 11:00:00', 3600000, 500000000000 );
insert into ab_tests( ab_test_title, campaign_id, start_time, milliseconds_after_start, milliseconds_pick_winner ) values ( 'That One Product', 1, '2014-11-27 11:00:00', 3600000, 500000000000 );

-- test ab_imgs
-- Q: would the user rather know the number of clicks and views at the time the 'winner' was choosen
insert into ab_imgs( ab_test_id, clicks, views, asset_url, redirect_url ) values ( 1, 20, 100, 'https://www.google.com/logos/doodles/2014/first-day-of-autumn-2014-5193866277814272.2-res.png', 'www.google.com' );
insert into ab_imgs( ab_test_id, clicks, views, asset_url, redirect_url ) values ( 1, 30, 101, 'https://s.yimg.com/rz/l/yahoo_en-US_f_p_142x37.png', 'www.yahoo.com' );



