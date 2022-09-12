-- 1757. Recyclable and Low Fat Products
select product_id from Products where low_fats = "Y" and recyclable = "Y";

-- 1741. Find Total Time Spent by Each Employee
select event_day as day, emp_id, sum(out_time - in_time) as total_time from Employees group by day, emp_id;