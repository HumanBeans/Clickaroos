USE	clickagoosdb;

drop table users;

CREATE TABLE users (
	user_id int(100) NOT NULL AUTO_INCREMENT,
	user_name varchar(40) NOT NULL UNIQUE,
	password varchar(40) NOT NULL,
	email varchar(40) NOT NULL UNIQUE,
	phone BIGINT NOT NULL UNIQUE,
	credit_card BIGINT NOT NULL UNIQUE,
	PRIMARY KEY(user_id)
);

/* test data */
insert into users (user_name, password, email, phone, credit_card) values ('armando', 'armando', 'aaa@aaa.com', 155555523, 2);
insert into users (user_name, password, email, phone, credit_card) values ('david', 'david', 'bbb@bbb.com', 325555551, 3);
insert into users (user_name, password, email, phone, credit_card) values ('mai', 'mai', 'ccc@ccc.com', 425555552, 4);
insert into users (user_name, password, email, phone, credit_card) values ('eddie', 'eddie', 'ddd@ddd.com', 255555535, 5);