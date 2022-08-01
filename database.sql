
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "group" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (32) NOT NULL
);

CREATE TABLE "expense" (
	"id" SERIAL PRIMARY KEY,
	"date" DATE NOT NULL,
	"amount" INTEGER,
	"description" VARCHAR (300),
	"group_id" INTEGER
);
CREATE TABLE "user_group" (
	"user_id" INTEGER,
	"group_id" INTEGER
);

INSERT INTO "group" ("name") 
VALUES ('Personal'), ('Dorian'), ('Japan'), ('Roommate') 
RETURNING "id";