<?php 
    require('dbConnection.php');

    if (isset($_POST['username']) and isset($_POST['password'])) {

        // Assigning POST values to variables.
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        // CHECK FOR THE RECORD FROM TABLE
        $query = "SELECT * FROM `user_login` WHERE username='$username' and password='$password'";
         
        $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
        $count = mysqli_num_rows($result);
        
        if ($count == 1) {
            // echo "<script type='text/javascript'>alert('Login Credentials verified')</script>";
            header('Location: '.'index.html');
            // die();
        } else {
            echo "<script type='text/javascript'>alert('Invalid Login Credentials')</script>";
        }
    }
?>