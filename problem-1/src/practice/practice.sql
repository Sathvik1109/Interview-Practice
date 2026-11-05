SELECT name, salary
FROM employees
WHERE department = "IT"
AND salary > 60000
ORDER BY salary DESC;


SELECT 
    e.name,
    d.department_name
FROM employees AS e

INNER JOIN departments AS d
    ON e.department_id = d.department_id
    

SELECT 
    e.name,
    d.department_name
FROM employees AS e

LEFT JOIN departments AS d
    ON e.department_id = d.department_id;

SELECT 
    e.name,
    d.department_name
FROM employees AS e
LEFT JOIN departments AS d
    ON e.department_id = d.department_id
WHERE e.department_id IS NULL

-- 2
SELECT department, COUNT(*) AS no_of_employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 1