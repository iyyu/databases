CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  msgid int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  roomname varchar(10),
  text varchar(140) NOT NULL,
  PRIMARY KEY (MessageUUID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  userid int NOT NULL AUTO_INCREMENT,
  username varchar(10) NOT NULL,
  PRIMARY KEY (UserID)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

