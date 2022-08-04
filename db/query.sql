USE class_expresss1_assoc;

-- SELECT * FROM project_groups;

-- SELECT * FROM Students;


-- SELECT 
--     group_name AS "Project Groups",
--     student_name AS "Students"
--     FROM project_groups
--         JOIN Students
--         ON project_groups.group_id = Students.group_id;

-- SELECT 
--   COUNT(group_id) AS "ID Number" FROM project_groups;
  

  SELECT 
  group_name,
  JSON_ARRAYAGG(JSON_OBJECT('student_id', s.student_id, 'name', s.student_name)) AS Students
  FROM project_groups pg 
    JOIN Students s 
    ON pg.group_id = s.group_id
  GROUP BY pg.group_id; 