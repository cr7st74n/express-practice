DROP DATABASE IF EXISTS class_expresss1;

CREATE DATABASE class_expresss1;

USE class_expresss1;

CREATE TABLE todos1(
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- create our key value with auto increment
    words   VARCHAR(250) NOT NULL,
    -- create text with  a limit words of 250
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO todos1 (words) VALUES ('first todo'),('second todo');

--  SELECT * FROM todos1;

-- SELECT * FROM todos1 WHERE id = 1;

-- SELECT * FROM todos1 WHERE words = "second todo"; 
