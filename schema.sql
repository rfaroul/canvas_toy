DROP TABLE IF EXISTS drawings CASCADE;

CREATE TABLE drawings(
id SERIAL PRIMARY KEY,
title VARCHAR(100),
username VARCHAR(100),
image TEXT
)