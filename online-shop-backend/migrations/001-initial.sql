CREATE TABLE IF NOT EXISTS products
(
    id integer NOT NULL,
    categoryid integer NOT NULL,
    imageurl character varying NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    cost integer NOT NULL,
    PRIMARY KEY (id)
);