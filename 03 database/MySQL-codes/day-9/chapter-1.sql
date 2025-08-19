-- Active: 1752606113881@@127.0.0.1@3306@mydb
--? show all databases
SHOW DATABASES;

--? create a database
CREATE DATABASE myDb;

-- ? use a database
USE myDb;

--! delete a database
DROP DATABASE myDb;

--? create a table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--? add a new column
ALTER TABLE users add gender VARCHAR(10);

--? modify column
ALTER TABLE users MODIFY age SMALLINT;

--? rename our column
ALTER TABLE users CHANGE name full_name VARCHAR(20);

--? drop a column
ALTER TABLE users DROP COLUMN gender;

--? describe our table
DESCRIBE users;

SELECT * FROM users;