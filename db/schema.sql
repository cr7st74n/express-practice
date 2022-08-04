DROP DATABASE IF EXISTS class_expresss1_assoc;

CREATE DATABASE class_expresss1_assoc;

USE class_expresss1_assoc;

CREATE TABLE project_groups(
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    -- create our key value with auto increment
    group_name VARCHAR(250) NOT NULL,
    project_url VARCHAR(250) DEFAULT NULL,
    is_finished BOOLEAN DEFAULT FALSE,
    -- create text with  a limit words of 250
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Students(
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(250) NOT NULL,
    group_id INT NOT NULL ,
    FOREIGN KEY (group_id) REFERENCES project_groups(group_id)
);



-- INSERT INTO todos1 (words) VALUES ('first todo'),('second todo');

--  SELECT * FROM todos1;

-- SELECT * FROM todos1 WHERE id = 1;

-- SELECT * FROM todos1 WHERE words = "second todo"; 
