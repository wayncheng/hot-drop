
SELECT markers.id, 
       markers.x AS mark_x, 
       markers.y AS mark_y, 
       paths.angle,
       paths.x AS path_x, 
       paths.y AS path_y
FROM markers, paths
WHERE markers.path_id = paths.id
AND paths.angle = 360
;