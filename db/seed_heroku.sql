DROP TABLE IF EXISTS todos1;


CREATE TABLE todos1(
    id INT AUTO_INCREMENT PRIMARY KEY,
    words   VARCHAR(250) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

  INSERT INTO todos1 (words) VALUES
    ("first todo"),
    ("second todo"),
    ("third todo");
