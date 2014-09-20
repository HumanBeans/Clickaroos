USE	clickagoosdb;

drop table users;

CREATE TABLE users (
	'user_id' int(100) NOT NULL AUTO_INCREMENT,
	'user_name' varchar(40) NOT NULL UNIQUE,
	'password' varchar(40) NOT NULL,
	'email' varchar(40) NOT NULL UNIQUE,
	'phone' int(14) NOT NULL UNIQUE,
	'credit_card' int(14) NOT NULL UNIQUE
)

/* test data */
insert into users (user_name, password, email, phone) values ('armando', 'armando', 'aaa@aaa.com', 5535555555);
insert into users (user_name, password, email, phone) values ('david', 'david', 'bbb@bbb.com', 5555555355);
insert into users (user_name, password, email, phone) values ('mai', 'mai', 'ccc@ccc.com', 5555552555);
insert into users (user_name, password, email, phone) values ('eddie', 'eddie', 'ddd@ddd.com', 5555515555);