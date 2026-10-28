// What is SQL?
// What is a relational database?
// What is a table?
// What is a row?
// What is a column?
// What is a primary key?
// What is a foreign key?
// What is a unique key?
// What is a candidate key?
// What is a composite key?
// What is a surrogate key?
// What are SQL constraints?
// What is NOT NULL?
// What is UNIQUE?
// What is DEFAULT?
// What is CHECK?
// What is a relationship between tables?
// What is a one-to-one relationship?
// What is a one-to-many relationship?
// What is a many-to-many relationship?
// How do you model a many-to-many relationship?
// SQL command categories
// What is DDL?
// What is DML?
// What is DQL?
// What is DCL?
// What is TCL?
// What is the difference between CREATE, ALTER and DROP?
// What is the difference between INSERT, UPDATE and DELETE?
// What does SELECT do?
// What is TRUNCATE?
// DELETE vs TRUNCATE vs DROP?
// SELECT / filtering
// What is SELECT?
// What is WHERE?
// What is ORDER BY?
// How do you sort ascending and descending?
// What is LIMIT?
// What is OFFSET?
// What is DISTINCT?
// How do you filter multiple conditions?
// What is the difference between AND and OR?
// What is IN?
// What is BETWEEN?
// What is LIKE?
// What are wildcard characters?
// LIKE vs =?
// NULL
// What is NULL in SQL?
// NULL vs 0?
// NULL vs empty string?
// Why does NULL = NULL not return true?
// Why should you use IS NULL instead of = NULL?
// What happens when you perform arithmetic with NULL?
// What happens when you concatenate NULL?
// What does COALESCE() do?
// What does NULLIF() do?
// How does NULL affect COUNT()?
// COUNT(*) vs COUNT(column)?
// How does NULL affect joins?
// JOINs
// What is a JOIN?
// What is an INNER JOIN?
// What is a LEFT JOIN?
// What is a RIGHT JOIN?
// What is a FULL OUTER JOIN?
// What is a CROSS JOIN?
// What is a SELF JOIN?
// INNER JOIN vs LEFT JOIN?
// LEFT JOIN vs RIGHT JOIN?
// LEFT JOIN vs INNER JOIN?
// When would you use a self join?
// When would you use a cross join?
// What happens if there is no matching row in a LEFT JOIN?
// Why does a JOIN sometimes produce duplicate rows?
// How can you avoid unintended duplicate rows after a JOIN?
// Can a LEFT JOIN effectively behave like an INNER JOIN?
// GROUP / aggregates
// What does GROUP BY do?
// What are aggregate functions?
// What does COUNT() do?
// What does SUM() do?
// What does AVG() do?
// What does MIN() do?
// What does MAX() do?
// Why do we use GROUP BY?
// What happens if you select a column that isn't in GROUP BY or an aggregate?
// How do you count rows per group?
// How do you calculate averages per department?
// WHERE vs HAVING
// What is the difference between WHERE and HAVING?
// When do you use WHERE?
// When do you use HAVING?
// Can you use WHERE with aggregate functions?
// Can you use HAVING without GROUP BY?
// What happens first: WHERE or HAVING?
// Execution order
// What is the logical execution order of a SQL query?
// Why can't you normally use a SELECT alias in WHERE?
// What is the order of FROM, JOIN, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY and LIMIT?
// DISTINCT / set operations
// What does DISTINCT do?
// DISTINCT vs GROUP BY?
// Does DISTINCT improve performance?
// How does DISTINCT interact with multiple columns?
// What is UNION?
// UNION vs UNION ALL?
// Why can UNION be slower than UNION ALL?
// What requirements must both queries satisfy?
// What is INTERSECT?
// What is EXCEPT?
// Subqueries
// What is a subquery?
// Where can you use a subquery?
// What is a correlated subquery?
// Correlated vs non-correlated subquery?
// Subquery vs JOIN?
// When would you use a subquery instead of a JOIN?
// Can a subquery return multiple rows?
// What happens if a scalar subquery returns more than one row?
// EXISTS
// What does EXISTS do?
// EXISTS vs IN?
// When would you prefer EXISTS?
// Why can NOT IN behave surprisingly with NULL?
// Normalization
// What is database normalization?
// Why do we normalize databases?
// What is 1NF?
// What is 2NF?
// What is 3NF?
// What is BCNF?
// What problems does normalization solve?
// What is data redundancy?
// What are update anomalies?
// What are insertion anomalies?
// What are deletion anomalies?
// What is denormalization?
// Why would you denormalize a database?
// Normalization vs denormalization?
// What are the disadvantages of denormalization?
// Indexes
// What is an index?
// Why do indexes improve query performance?
// What are the disadvantages of indexes?
// Can indexes make writes slower?
// When should you create an index?
// When should you not create an index?
// What columns should usually be indexed?
// Should every foreign key be indexed?
// What is a composite index?
// What is a covering index?
// What is a unique index?
// What is a full-text index?
// What is a B-tree index?
// B-tree vs hash index?
// How does a composite index work?
// What is the leftmost-prefix rule?
// How do indexes affect ORDER BY?
// How do indexes affect JOINs?
// How do you verify that an index is being used?
// What is index selectivity?
// What is cardinality?
// EXPLAIN / optimization
// What is EXPLAIN?
// How do you use EXPLAIN to debug a slow query?
// What information does an execution plan provide?
// What is a table scan?
// What is an index scan?
// What is an index lookup?
// What is EXPLAIN ANALYZE?
// What does "rows examined" mean?
// How can you tell if a query is inefficient?
// How would you optimize a slow SQL query?
// What would you check first?
// Why is SELECT * sometimes a bad idea?
// How can unnecessary JOINs hurt performance?
// How can functions on indexed columns prevent efficient index use?
// How does pagination affect performance?
// OFFSET pagination vs cursor pagination?
// What is a full table scan?
// What is the N+1 query problem?
// How would you identify N+1?
// How would you fix N+1?
// Transactions / ACID
// What is a transaction?
// Why use transactions?
// What are BEGIN, COMMIT and ROLLBACK?
// When should multiple queries be inside one transaction?
// What happens if a transaction fails halfway?
// What is Atomicity?
// What is Consistency?
// What is Isolation?
// What is Durability?
// What does ACID stand for?
// Why does ACID matter?
// Isolation / concurrency
// What are transaction isolation levels?
// What is READ UNCOMMITTED?
// What is READ COMMITTED?
// What is REPEATABLE READ?
// What is SERIALIZABLE?
// Which isolation level does MySQL InnoDB use by default?
// What is a dirty read?
// What is a non-repeatable read?
// What is a phantom read?
// What is a database lock?
// What is row-level locking?
// What is table-level locking?
// What is pessimistic locking?
// What is optimistic locking?
// What is a deadlock?
// How can deadlocks happen?
// How would you handle a deadlock?
// Why should transactions be kept short?
// Window functions
// What is a window function?
// Window function vs aggregate function?
// What does OVER() do?
// What is PARTITION BY?
// What is the difference between PARTITION BY and GROUP BY?
// What is ROW_NUMBER()?
// What is RANK()?
// What is DENSE_RANK()?
// ROW_NUMBER vs RANK vs DENSE_RANK?
// What are LAG() and LEAD()?
// How do you calculate a running total?
// How do you calculate a moving average?
// How do you find the top N records per group?
// How do you calculate month-over-month revenue?
// CTE / views
// What is a CTE?
// What does WITH do?
// CTE vs subquery?
// CTE vs temporary table?
// Can a CTE be recursive?
// When would you use a CTE?
// What is a recursive CTE?
// When would you use a recursive CTE?
// How can you query hierarchical data using a recursive CTE?
// What is a view?
// Why use a view?
// View vs table?
// View vs materialized view?
// Can you update a view?
// What are the advantages and disadvantages of views?
// What is a materialized view?
// Stored logic
// What is a stored procedure?
// What is a stored function?
// Procedure vs function?
// When would you use a stored procedure?
// What are the disadvantages of business logic inside the database?
// What is a database trigger?
// When would you use a trigger?
// What are the advantages and disadvantages of triggers?
// Why can triggers make systems harder to debug?
// Schema / integrity
// What is referential integrity?
// What happens when a foreign key references a deleted row?
// What is ON DELETE CASCADE?
// What is ON DELETE SET NULL?
// What is ON UPDATE CASCADE?
// When should you use CASCADE?
// What are the risks of CASCADE?
// Can a foreign key be NULL?
// Can multiple rows reference the same row?
// Can a foreign key reference a non-unique column?
// Pagination
// What is pagination?
// What is OFFSET/LIMIT pagination?
// What are the disadvantages of OFFSET pagination?
// What is cursor-based pagination?
// Cursor vs offset pagination?
// How would you paginate a table with millions of rows?
// Dates / strings / CASE
// How do you query data by date?
// Date vs datetime/timestamp?
// How do you get today's rows?
// How do you get rows from the last 7 days?
// How do you group sales by month?
// How do you calculate the difference between dates?
// How do you find users who signed up this month?
// How do you avoid problems caused by time zones?
// How do you concatenate strings?
// How do you convert strings to uppercase/lowercase?
// What does TRIM() do?
// What does SUBSTRING() do?
// What does REPLACE() do?
// What does CASE do?
// How do you use CASE in a SELECT?
// How do you perform conditional aggregation?
// Security / application
// What is SQL injection?
// How does SQL injection work?
// How do you prevent SQL injection?
// Why are parameterized queries safer?
// Are ORMs automatically immune to SQL injection?
// What is the difference between escaping input and parameterizing queries?
// What is a prepared statement?
// Why use parameterized queries?
// Node + SQL
// How do you connect Node.js to MySQL?
// What Node.js libraries have you used for MySQL?
// What is a database connection pool?
// Why use a pool instead of creating a new connection for every request?
// How do you handle database connection errors?
// How do you close database connections?
// How do you handle transactions from Node.js?
// How do you prevent SQL injection from Node.js?
// How do you map database rows to JavaScript objects?
// ORM
// What is an ORM?
// Why use an ORM?
// What are the advantages and disadvantages of an ORM?
// ORM vs raw SQL?
// What is Prisma?
// What is a migration?
// What is eager loading?
// What is lazy loading?
// What is N+1 in an ORM?
// When would you use raw SQL instead of an ORM?
// Migrations / production
// What is a database migration?
// Why use migrations?
// How do you safely change a production database schema?
// What is a migration rollback?
// Why shouldn't you modify production schemas manually?
// SQL coding
// Select all users.
// Select users older than 18.
// Sort users by name.
// Get the first 10 rows.
// Find users whose email contains "gmail".
// Find duplicate emails.
// Count users.
// Find the maximum salary.
// Find the average salary.
// Get distinct cities.
// Find employees earning more than the average salary.
// Find the second highest salary.
// Find the third highest salary.
// Find duplicate records.
// Delete duplicates while keeping one record.
// Find users without orders.
// Find products that have never been sold.
// Find customers with more than five orders.
// Find departments with more than 10 employees.
// Find the highest salary in each department.
// Find users and their orders.
// Get users who have never placed an order.
// Get every product with its category.
// Get products without categories.
// Get categories without products.
// Get total sales per customer.
// Get the top customer by revenue.
// Get the most sold product.
// Get employees and the manager they report to.
// Count orders per customer.
// Calculate total revenue per day.
// Calculate average order value.
// Find customers whose total spending exceeds $1,000.
// Find departments with average salary greater than $5,000.
// Find the month with the highest revenue.
// Find employees earning above their department average.
// Find customers who placed at least one order.
// Find customers who never placed an order.
// Find products whose price is above the average product price.
// Find the top 3 salaries per department.
// Rank customers by revenue.
// Find each employee's salary compared to the department average.
// Calculate a running total.
// Calculate month-over-month revenue.
// Find the previous order of each customer.
// Find the next order.
// Find the first order per customer.
// Find the most recent order per customer.
// Find the percentage contribution of each product to total sales.
// What rows does this query return?
// Is this JOIN correct?
// Why does this query return duplicate rows?
// Why is this query returning zero rows?
// Why is this LEFT JOIN behaving like an INNER JOIN?
// Database design
// How would you design a database for an e-commerce application?
// How would you model users and orders?
// How would you model products and categories?
// How would you model users and roles?
// How would you model order items?
// How would you design a database for a restaurant?
// How would you design a database for a social network?
// How would you design a database for a POS system?
// How would you model a many-to-many relationship?
// How would you model payments?
// How would you model friend relationships?
// How would you model chat messages?
// POS-specific SQL follow-ups
// Why did you choose MySQL for your POS system?
// How did you model the database?
// Why did you separate sales and sale details?
// How are products related to sales?
// How would you guarantee that a product's stock cannot become negative?
// Would you use a transaction when creating a sale?
// What happens if inserting the sale succeeds but inserting the sale details fails?
// How would you handle concurrent sales of the same product?
// Which columns would you index?
// Why?
// How would you query the top-selling products?
// How would you calculate daily sales?
// How would you generate sales statistics?
// How do you create a sale transaction?
// How do you guarantee inventory consistency?
// What happens if two users sell the last product simultaneously?
// What happens if payment is recorded but inventory update fails?