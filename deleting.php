<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deletar conta</title>
    <link rel="stylesheet" href="css/cadastro.css">
</head>
<body>

    <div class="container">

        <div class="box">

            <?php

                include ("conection/connection.php");

                $email = $_POST["email"];
                $pass = $_POST["pass"];
                $name = $_POST["name"];

                //verficando se o cara preencheu os campos e redirect

                if( empty($email) || empty($pass) || empty($name)){

                    header("Location: deleteMyAccount.php");
                    exit();

                };

                //proteção contra sqlinjection
                $usuario = mysqli_real_escape_string($conn, $email);
                $senha = mysqli_real_escape_string($conn, $pass);
                $nome = mysqli_real_escape_string($conn, $name);

                //primeiro vamos verificar se as entradas estão corretas
                $sql = "SELECT * FROM pessoa WHERE email = '{$usuario}' and senha = md5('{$senha}')";

                $result = mysqli_query($conn, $sql);

                $rows = mysqli_num_rows($result);

                    //agora, se ele passar nesse requisito ele irá deletar, caso não ele será redirecionado

                    if($rows == "1"){
                        //query que busca usuario, senha e nome e exclui
                        // $sql_delete = "DELETE FROM pessoa WHERE email = '{$usuario}' and senha = md5('{$senha}')";
                        
                        $sql_delete = "DELETE FROM `pessoa` WHERE `pessoa`.`email` = '{$usuario}' and `pessoa`.`name` = '{$nome}' `pessoa`.`senha` = md5('{$senha}') " ;

                        $result = mysqli_query($conn, $sql_delete);

                        echo "<label> Sucesso </label>";

                    }else{

                        header("Location: deleteMyAccount.php");
                        echo "<label> failed </label>";
                        exit();

                    }
            ?>

        </div>
    </div>
</body>
</html>