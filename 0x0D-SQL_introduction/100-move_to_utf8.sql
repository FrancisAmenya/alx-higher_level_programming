-- Converts hbtn_0c_0 database to UTF8 (utf8mb4, collate utf8mb4_unicode_ci) in your MySQL server
-- Convert database to UTF8
ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Select the database
USE hbtn_0c_0;

-- Convert table to UTF8
ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Convert specific column to UTF8
ALTER TABLE first_table MODIFY name VARCHAR(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
