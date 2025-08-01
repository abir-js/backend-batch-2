create DATABASE startersql;

use startersql;

create table users (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    gender ENUM("Male", "Female", "Other"),
    date_of_birth DATE,
    salary DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    users (
        name,
        email,
        gender,
        date_of_birth,
        salary
    )
VALUES (
        "Abir",
        "abir@example.com",
        "Male",
        "2000-01-01",
        60000.00
    );

INSERT INTO
    users (
        name,
        email,
        gender,
        date_of_birth,
        salary
    )
VALUES (
        'Aarav',
        'aarav@example.com',
        'Male',
        '1995-05-14',
        65000.00
    ),
    (
        'Ananya',
        'ananya@example.com',
        'Female',
        '1990-11-23',
        72000.00
    ),
    (
        'Raj',
        'raj@example.com',
        'Male',
        '1988-02-17',
        58000.00
    ),
    (
        'Sneha',
        'sneha@example.com',
        'Female',
        '2000-08-09',
        50000.00
    ),
    (
        'Farhan',
        'farhan@example.com',
        'Male',
        '1993-12-30',
        61000.00
    ),
    (
        'Priyanka',
        'priyanka@example.com',
        'Female',
        '1985-07-12',
        84000.00
    ),
    (
        'Aisha',
        'aisha@example.com',
        'Female',
        '1997-03-25',
        56000.00
    ),
    (
        'Aditya',
        'aditya@example.com',
        'Male',
        '1992-06-17',
        69000.00
    ),
    (
        'Meera',
        'meera@example.com',
        'Female',
        '1989-09-05',
        77000.00
    ),
    (
        'Ishaan',
        'ishaan@example.com',
        'Male',
        '2001-10-02',
        45000.00
    ),
    (
        'Tanvi',
        'tanvi@example.com',
        'Female',
        '1994-04-18',
        62000.00
    ),
    (
        'Rohan',
        'rohan@example.com',
        'Male',
        '1986-12-01',
        75000.00
    ),
    (
        'Zoya',
        'zoya@example.com',
        'Female',
        '1998-01-15',
        54000.00
    ),
    (
        'Karan',
        'karan@example.com',
        'Male',
        '1990-08-22',
        68000.00
    ),
    (
        'Nikita',
        'nikita@example.com',
        'Female',
        '1987-03-10',
        71000.00
    ),
    (
        'Manav',
        'manav@example.com',
        'Male',
        '1996-11-29',
        61000.00
    ),
    (
        'Divya',
        'divya@example.com',
        'Female',
        '1991-02-28',
        57000.00
    ),
    (
        'Harshit',
        'harshit@example.com',
        'Male',
        '1993-09-09',
        65000.00
    ),
    (
        'Ritika',
        'ritika@example.com',
        'Female',
        '1999-05-05',
        52000.00
    ),
    (
        'Imran',
        'imran@example.com',
        'Male',
        '1995-07-30',
        63000.00
    ),
    (
        'Juhi',
        'juhi@example.com',
        'Female',
        '1992-10-14',
        59000.00
    ),
    (
        'Tushar',
        'tushar@example.com',
        'Male',
        '1990-01-08',
        73000.00
    ),
    (
        'Lata',
        'lata@example.com',
        'Female',
        '1984-11-11',
        78000.00
    ),
    (
        'Yash',
        'yash@example.com',
        'Male',
        '1997-06-06',
        64000.00
    ),
    (
        'Fatima',
        'fatima@example.com',
        'Female',
        '1993-03-03',
        55000.00
    );

--* IS and IS NOT operator
SELECT name, salary FROM users WHERE salary IS NOT NULL;

--* BETWEEN operator
SELECT name, salary FROM users WHERE salary BETWEEN 60000 AND 70000;

--* find users born between 1990 and 1995
SELECT name, date_of_birth
FROM users
WHERE
    date_of_birth BETWEEN '1990-01-01' AND '1995-12-31';

--* IN operator
-- find male and female users except others
SELECT name, salary FROM users WHERE gender IN ("Male", "Female");

--* find users with specific salaries
SELECT name, salary FROM users WHERE salary IN (60000, 65000, 70000);

--* combining conditions (AND, OR)
-- find users with salary > 70k or born before 1990
SELECT name, salary, date_of_birth
FROM users
WHERE
    salary > 70000
    OR date_of_birth < '1900-01-01';

--* find female users who earn more than 60k
SELECT name, salary
FROM users
WHERE
    gender = "Female"
    AND salary > 60000;

--* order by
-- sort by salary in desending order
SELECT name, gender, salary
FROM users
ORDER BY gender ASC, salary DESC;

--* pattern matching (LIKE)
-- select names starting with 'A'
SELECT name FROM users WHERE name LIKE "A%";
-- select emails ending with 'example.com'
SELECT name, email FROM users WHERE email LIKE "%example%";

--* Aggregate function
-- count
-- count all users
SELECT COUNT(*) FROM users;

SELECT MAX(salary) as max_salary FROM users;

SELECT MIN(salary) as min_salary FROM users;

SELECT AVG(salary) as avg_salary FROM users;

SELECT SUM(salary) as total_salary FROM users;

SELECT SUM(salary) as total_female_salary
FROM users
WHERE
    gender = "Female";

--* limit
-- Get data of top 5 users
SELECT name, salary FROM users ORDER BY salary DESC LIMIT 5;
-- Get top 3 youngest users
SELECT name, date_of_birth
FROM users
ORDER BY date_of_birth DESC
LIMIT 5;

--* update records
-- increase salary of all female emplaoyes by 5k
UPDATE users SET salary = salary + 5000 WHERE gender = "Female";

--* delete
DELETE FROM users WHERE salary < 50000;

--? questions
--* Find all Female users with a salary greater than 70,000, sorted by salary (descending).
SELECT name, salary
FROM users
WHERE
    gender = 'Female'
    AND salary > 70000
ORDER BY salary DESC;

--* Find all users born after 1995 OR with salary less than 55,000.
SELECT name, salary, date_of_birth
FROM users
WHERE
    date_of_birth > '1995-12-31'
    OR salary < 55000;

--* Count how many Male users earn between 60,000 and 75,000.
SELECT COUNT(*)
FROM users
WHERE
    gender = "Male"
    AND salary BETWEEN 60000 AND 75000;

--* Find the highest salary among Females and display their name and salary.
SELECT name, salary
FROM users
WHERE
    gender = 'Female'
    AND salary = (
        SELECT MAX(salary)
        FROM users
        WHERE
            gender = 'Female'
    );

--* Increase salary by 5,000 for all users earning less than 60,000.
UPDATE users SET salary = salary + 5000 WHERE salary < 5000;

--* Delete all users whose names start with 'I'.
DELETE FROM users WHERE name LIKE "I%";

--* Get the top 3 highest-paid Male employees, sorted by salary.
SELECT name, salary
FROM users
WHERE
    gender = "Male"
ORDER BY salary DESC
LIMIT 3;

--* Find the average salary of users born before 1990.
SELECT AVG(salary) FROM users WHERE date_of_birth < '1990-01-01';

--* List all users whose email ends with 'example.com' and sort them by name (ascending).
SELECT name, email
FROM users
WHERE
    email LIKE "%example.com"
ORDER BY name ASC;

--* Find all users whose name contains the letter 'a' (case-insensitive) and salary is more than 60,000.
SELECT name, salary
FROM users
WHERE
    name LIKE "%a%"
    AND salary > 60000;

SELECT * FROM users;