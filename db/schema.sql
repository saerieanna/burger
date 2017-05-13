create database burgers_db;

use burgers_db;

create table burgers(
id INT auto_increment NOT NULL,
burger_name VARCHAR(100),
devoured boolean,
date timestamp,
primary key(id)
);

drop table burgers;

create table burgers(
id INT auto_increment NOT NULL,
burger_name VARCHAR(100),
devoured boolean,
date timestamp,
primary key(id)
);

use burgers_db;

select * from burgers;