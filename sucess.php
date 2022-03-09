<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <div class="container">
        <div class="box">

            <?php

            include "conection/connection.php";

            $name = $_POST["name"];
            $email = $_POST["email"];
            $pass = $_POST["pass"];

            //verficando se os campos não estão vazios
            if( empty($email) || empty($pass) || empty($name)){

                header("Location: register.php");
                exit();
    
            };

            //Outra validação para verificar os campos de entrada
            if(strlen($pass) < 8){

                header("Location: register.php");
                exit();

            }


            $sql = "INSERT INTO `pessoa`(`nome`, `email`, `senha`) VALUES ('$name','$email', md5('$pass'))";

            if(mysqli_query($conn, $sql)){
                
                header("Location: login.php");
                exit();

            }else
                echo '<p>Failed</p>';

            ?>
        </div>
    </div>
</body>
</html>