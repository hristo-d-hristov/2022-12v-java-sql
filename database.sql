DROP DATABASE IF EXISTS cars;
CREATE DATABASE cars;
USE cars;
CREATE TABLE potrebiteli (id INT, name VARCHAR(255), mail VARCHAR(255), pass VARCHAR(255));

INSERT INTO potrebiteli VALUES (1, "admin", "admin@local.bg", "adm");
INSERT INTO potrebiteli VALUES (2, "usr", "usr@local.bg", "1234");

CREATE TABLE artikuli(id INT, vid VARCHAR(255), ime VARCHAR(255), snimka VARCHAR(255), cena INT);

--INSERT INTO artikuli ........