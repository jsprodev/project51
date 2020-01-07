<?php 
    $connection = mysqli_connect('localhost', 'root', '', 'project51', '3308');
    if(!$connection) {
        die('Database connection Failed' . mysqli_error($connection));
    }
    $selectDB = mysqli_select_db($connection, 'project51');
    if(!$selectDB) {
        die("Database Selection Failed" . mysqli_error($connection));
    }
?>