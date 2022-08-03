USE class_expresss1;

-- SELECT * FROM project_groups;

-- SELECT * FROM Students;


-- SELECT 
--     group_name AS "Project Groups",
--     student_name AS "Students"
--     FROM project_groups
--         JOIN Students
--         ON project_groups.group_id = Students.group_id;

SELECT 
  COUNT(group_id) AS "ID Number" FROM project_groups;
  