<?php

if(!empty($_POST)) {

    $servername = 'localhost';
    $username = "root";
    $password = "";
    $database = "web";
    
    // Creating connection
    
    $connection = mysqli_connect($servername , $username, $password, $database);
    
    if(!$connection) {
        die("Connection error".mysqli_connect_error());
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $fever = $_POST['Fever'];
    $dcough = $_POST['dcough'];
    $tired = $_POST['Tired'];
    $achepain = $_POST['AP'];
    $diarrhoea = $_POST['Diarr'];
    $headache = $_POST['Head'];
    
    $sql = "insert into corona (name, email, fever, dcough, tired, achepain, diarrhoea, headache) values 
    ('$name', '$email', '$fever' , '$dcough', '$tired', '$achepain' , '$diarrhoea' , '$headache')";

    $result = mysqli_query($connection, $sql);
    
    if ($result) {
        echo "Data inserted successfully";
    }
    else {
        echo "Data not inserted Xx-Error-xX: ".mysqli_error($connection);
    }
    mysqli_close($connection);

}    

?>