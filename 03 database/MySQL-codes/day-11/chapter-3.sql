-- Active: 1752853493999@@127.0.0.1@3306@startersql
CREATE DATABASE techdb;

USE techdb;

CREATE TABLE tech (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    release_year INT check (release_year >= 1990),
    website VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE tech;

INSERT INTO
    tech (
        name,
        category,
        release_year,
        website
    )
VALUES (
        "React",
        "Frontend",
        2013,
        "https://react.dev"
    ),
    (
        "Node.js",
        "Backend",
        2009,
        "https://nodejs.org"
    ),
    (
        "MySQL",
        "Database",
        1995,
        "https://mysql.com"
    );

SELECT * FROM tech;

desc tech;

CREATE TABLE frameworks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tech_id INT, -- FOREIGN KEY
    framework_name VARCHAR(50) NOT NULL,
    version VARCHAR(10) DEFAULT "1.0",
    constraint fk_tech FOREIGN KEY (tech_id) REFERENCES tech (id) ON DELETE CASCADE ON UPDATE CASCADE
);

drop table frameworks;

INSERT INTO
    frameworks (
        tech_id,
        framework_name,
        version
    )
VALUES (1, "Next.js", "15"),
    (2, "Express.js", "5"),
    (3, "InnoDB", "8");

SELECT * FROM tech;

SELECT * FROM frameworks;

DELETE from tech WHERE id = 2;

USE techdb;


-- Commit
SET autocommit = 0;
START TRANSACTION;

INSERT INTO
    tech (
        name,
        category,
        release_year,
        website
    )
VALUES (
        "Vue.js",
        "Frontend",
        2014,
        "https://vuejs.org"
    ),
    (
        "Angular",
        "Frontend",
        2016,
        "https://angular.io"
    );

SELECT * FROM tech;

DELETE FROM tech WHERE id = 5;

ROLLBACK;
COMMIT;

SET autocommit = 1;