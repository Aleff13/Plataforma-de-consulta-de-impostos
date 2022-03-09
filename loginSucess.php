<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sucesso</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <div class="container">
        <div class="box">
            
        <?php

        //precisamos fazer uma consulta no banco e verificar um usuario
        include "conection/connection.php";

        $email = $_POST["email"];
        $pass = $_POST["pass"];

        //verficando se o cara preencheu os campos e redirect

        if( empty($email) || empty($pass)){

            header("Location: login.php");
            exit();

        };

        //proteção contra sqlinjection
        $usuario = mysqli_real_escape_string($conn, $email);
        $senha = mysqli_real_escape_string($conn, $pass);

        //query que busca usuario e senha
        $sql = "SELECT * FROM pessoa WHERE email = '{$usuario}' and senha = md5('{$senha}')";

        //echo $sql;

        $result = mysqli_query($conn, $sql);

        $rows = mysqli_num_rows($result);

        if($rows == "1"){

            sleep(2);

            header("Location: taxCalculator.php");
            exit();

        }else{

            echo '<p>Failed</p>';

        }


        ?>

        <!-- <img width="80%" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" alt="" id="img"> -->

        </div>
    </div>
    <script>

    // setTimeout(function() {
    //     window.location.href = "http://localhost/phpCrud/calculadora/";
    // }, 5000);

    </script>
</body>
</html>