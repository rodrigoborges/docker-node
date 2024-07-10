USE nodedb;

CREATE TABLE IF NOT EXISTS people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO people (name) VALUES ('Rodrigo');
INSERT INTO people (name) VALUES ('Camila');
INSERT INTO people (name) VALUES ('Paulo');
INSERT INTO people (name) VALUES ('Suely');


