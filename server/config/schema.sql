USE clickagoosdb;

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
  PRIMARY KEY(campaign_id)
);

CREATE TABLE ab_tests (
  ab_test_id INT NOT NULL AUTO_INCREMENT,
  ab_test_title VARCHAR(50) NOT NULL UNIQUE,
  campaign_id BIGINT NOT NULL,
  start_time DATETIME NOT NULL,
  time_after_start TIME NOT NULL,
  winner VARCHAR(40),
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
insert into ab_tests( ab_test_title, campaign_id, start_time, time_after_start ) values ( 'Splash Photo', 1, '2014-11-27 11:00:00', '01:00:00' );
insert into ab_tests( ab_test_title, campaign_id, start_time, time_after_start ) values ( 'That One Product', 1, '2014-11-27 11:00:00', '01:00:00' );

-- test ab_imgs
-- Q: would the user rather know the number of clicks and views at the time the 'winner' was choosen
insert into ab_imgs( ab_test_id, clicks, views, asset_url, redirect_url ) values ( 1, 20, 100, 'https://www.google.com/logos/doodles/2014/first-day-of-autumn-2014-5193866277814272.2-res.png', 'www.google.com' );
insert into ab_imgs( ab_test_id, clicks, views, asset_url, redirect_url ) values ( 1, 30, 101, 'https://s.yimg.com/rz/l/yahoo_en-US_f_p_142x37.png', 'www.yahoo.com' );



