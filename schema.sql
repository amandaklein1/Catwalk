-- DROP DATABASE projectRunway;
-- CREATE DATABASE projectRunway;

-- USE projectRunway;

-- CREATE TABLE products (
--   id int NOT NULL,
--   name varchar(100) NOT NULL,
--   slogan varchar(250) NOT NULL,
--   description varchar(500) NOT NULL,
--   category varchar(40) NOT NULL,
--   defaultPrice varchar(10) NOT NULL,
--   PRIMARY KEY (id)


-- );

-- CREATE TABLE features (
--   id int NOT NULL,
--   productId int NOT NULL,
--   feature varchar(100) NOT NULL,
--   value varchar(250),
--   PRIMARY KEY (id),
--   FOREIGN KEY (productId) REFERENCES products(id)

-- );

-- CREATE TABLE relatedProducts (
--   id int NOT NULL,
--   current_productId int NOT NULL,
--   related_productId int NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (current_productId) REFERENCES products(id),
--   FOREIGN KEY (related_productId) REFERENCES products(id)

-- );

-- CREATE TABLE styles (
--   id int NOT NULL,
--   productId int NOT NULL,
--   name varchar(100) NOT NULL,
--   originalPrice varchar(250) NOT NULL,
--   salePrice varchar(500),
--   defaultStyle boolean NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (productId) REFERENCES products(id)

-- );


-- CREATE TABLE skus (
--   id int NOT NULL,
--   styleId int NOT NULL,
--   size varchar(10),
--   quantity int,
--   PRIMARY KEY (id),
--   FOREIGN KEY (styleId) REFERENCES styles(id)

-- );

-- CREATE TABLE images (
--   id int NOT NULL,
--   styleId int NOT NULL,
--   thumbnail_Url varchar(500),
--   url varchar(500),
--   PRIMARY KEY (id),
--   FOREIGN KEY (styleId) REFERENCES styles(id)

-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/