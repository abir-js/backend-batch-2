-- Active: 1752853493999@@127.0.0.1@3306@company_db
show databases;

CREATE DATABASE company_db;

DROP DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    department_id INT
);

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

INSERT INTO
    employees (
        employee_id,
        name,
        department_id
    )
VALUES (1, 'Alice', 1), -- HR
    (2, 'Bob', 2), -- IT
    (3, 'Charlie', 3), -- Finance
    (4, 'David', NULL), -- No department
    (5, 'Eve', 1), -- HR
    (6, 'Frank', 2), -- IT
    (7, 'Grace', 4), -- Marketing
    (8, 'Hannah', 2), -- IT
    (9, 'Ian', 3), -- Finance
    (10, 'Jack', NULL), -- No department
    (11, 'Karen', 1), -- HR
    (12, 'Leo', 4), -- Marketing
    (13, 'Mia', NULL), -- No department
    (14, 'Nina', 3), -- Finance
    (15, 'Oscar', 2); -- IT

INSERT INTO
    departments
VALUES (1, 'HR'),
    (2, 'IT'),
    (3, 'Finance'),
    (4, 'Marketing');

--* Inner Join
SELECT e.name, d.department_name
FROM employees e
    INNER JOIN departments d ON e.department_id = d.department_id;

--* Left Join
SELECT e.name, d.department_name
FROM employees e
    LEFT OUTER JOIN departments d ON e.department_id = d.department_id;

--* Right Join
SELECT e.name, d.department_name
FROM employees e
RIGHT JOIN departments d
ON e.department_id = d.department_id;

--* Self Join
SELECT e1.name AS employee1, e2.name AS employee2, d.department_name
FROM employees e1
JOIN employees e2 ON e1.department_id = e2.department_id 
AND e1.employee_id <> e2.employee_id

JOIN departments d ON e1.department_id = d.department_id;

--* UNION
SELECT name as entity from employees
UNION
SELECT department_name from departments;


--* UNION ALL
SELECT name as entity from employees
UNION ALL
SELECT department_name from departments;

--* SUBQUERY
SELECT name 
FROM employees
WHERE department_id = (
    SELECT department_id 
    FROM employees 
    WHERE name = 'Alice'
);

--* Stored Procedure
DELIMITER $$
CREATE PROCEDURE GetAllEmployees()
BEGIN
    -- SQL statements
    SELECT * FROM employees;
END $$
DELIMITER ;

CALL GetAllEmployees();

USE company_db;

-- create a procedure to get employees based on id
DELIMITER $$
CREATE PROCEDURE GetEmployeesById(
    IN deptId INT
)
BEGIN
    SELECT NAME FROM employees
    WHERE department_id = deptId;
END $$
DELIMITER ;

CALL `GetEmployeesById`(2);