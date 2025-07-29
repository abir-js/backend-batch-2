-- Active: 1752853493999@@127.0.0.1@3306@book_reviews
CREATE DATABASE book_reviews;

DROP DATABASE book_reviews;

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_title VARCHAR(100),
    reviewer_name VARCHAR(50),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    reviews (
        book_title,
        reviewer_name,
        rating,
        review_text
    )
VALUES (
        'Atomic Habits',
        'Suraj',
        5,
        'Life-changing and practical.'
    ),
    (
        'Deep Work',
        'Neha',
        4,
        'Helped me focus better.'
    ),
    (
        'The Alchemist',
        'Raj',
        3,
        'Good story, but a bit overhyped.'
    ),
    (
        'Clean Code',
        'Amit',
        5,
        'A must-read for devs.'
    ),
    (
        'Rich Dad Poor Dad',
        'Sana',
        4,
        'Great for financial mindset.'
    ),
    (
        'Ikigai',
        'Dev',
        3,
        'Simple read, calming.'
    ),
    (
        'Rework',
        'Nidhi',
        5,
        'Short, direct, and inspiring.'
    ),
    (
        'Do Epic Shit',
        'Tanmay',
        4,
        'Modern, relatable thoughts.'
    ),
    (
        'Can’t Hurt Me',
        'Aryan',
        5,
        'Powerful mindset shift.'
    ),
    (
        'Hooked',
        'Isha',
        4,
        'Useful for product building.'
    );

SELECT * FROM reviews;

--* Views
CREATE VIEW five_star_reviews AS
SELECT
    book_title,
    reviewer_name,
    review_text
FROM reviews
WHERE
    rating = 5;

SELECT * FROM five_star_reviews;

CREATE VIEW average_rating AS
SELECT book_title, AVG(rating)
FROM reviews
GROUP BY
    book_title;

SELECT * FROM average_rating;

--* Indexes
CREATE INDEX idx_book_title ON reviews (book_title);

SELECT * FROM reviews WHERE book_title = 'Atomic Habits';

--* Triggers
-- TODO: If a user inserts 1 star review, log it
CREATE TABLE low_ratings_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    review_id INT,
    book_title VARCHAR(100),
    reviewer_name VARCHAR(50),
    rating INT,
    logged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$

CREATE PROCEDURE log_low_rating (
    IN rid INT,
    IN btitle VARCHAR(100),
    IN rname VARCHAR(50),
    IN rating_val INT
)
BEGIN
    INSERT INTO low_ratings_log (review_id, book_title, reviewer_name, rating)
    VALUES (rid, btitle, rname, rating_val);
END$$

DELIMITER;

DELIMITER $$

CREATE TRIGGER after_insert_review
AFTER INSERT ON reviews
FOR EACH ROW
BEGIN
    IF NEW.rating = 1 THEN
        CALL log_low_rating(new.id, new.book_title, new.reviewer_name);
    END IF;
END $$
DELIMITER ;

-- INSERT INTO reviews (book_title, reviewer_name, rating, review_text)
-- VALUES('Some boring Book', 'Ravi', 1, 'Did not enjoy at all');

INSERT INTO reviews (book_title, reviewer_name, rating, review_text)
VALUES('Some boring Book', 'Ravi', 1, 'Did not enjoy at all');

USE book_reviews;