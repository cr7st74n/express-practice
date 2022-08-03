CREATE TABLE todos1(
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- create our key value with auto increment
    words   VARCHAR(250) NOT NULL,
    -- create text with  a limit words of 250
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO todos1 (words) VALUES
  ("first todo"),
  ("second todo"),
  ("third todo");

-- DELETE FROM todos1  WHERE id = 1;
