DROP DATABASE IF EXISTS class_express;


CREATE DATABASE class_express;

USE class_express;


CREATE TABLE todos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    words VARCHAR(250) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

