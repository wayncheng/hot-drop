-- ALTER TABLE `fortnitedrops_prod_clone`.`markers` 
-- ADD COLUMN `chapter` INT(4) NULL DEFAULT 2 AFTER `time`,
-- ADD COLUMN `season` INT(4) NULL AFTER `chapter`;

----------------------------------------------------------
-- Add chapter and season column and set all existing records to c1, s7
-- CHANGE DEFAULTS TO NEW SEASON AFTER RUNNING
----------------------------------------------------------
ALTER TABLE `fortnitedrops_prod_clone`.`markers` 
ADD COLUMN `chapter` INT(4) NULL DEFAULT 1 AFTER `time`,
ADD COLUMN `season` INT(4) NULL DEFAULT 7 AFTER `chapter`;

----------------------------------------------------------
-- Update all current records to be chapter 1, season 7
----------------------------------------------------------
UPDATE `fortnitedrops_prod_clone`.`markers` 
SET `chapter` = '1', `season` = '7';

