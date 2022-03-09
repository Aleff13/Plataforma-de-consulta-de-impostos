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

                //criando a query de consulta à tabela criada 
                $sql = mysqli_query($conn, "SELECT * FROM pessoa") or die( 
                    mysqli_error($conn) //caso haja um erro na consulta 
                );
                
                //pecorrendo os registros da consulta. 
                while($aux = mysqli_fetch_assoc($sql)) { 
                    echo "-----------------------------------------<br />"; 
                    echo "Nome: ".$aux["nome"]."<br />"; 
                    echo "Idade: ".$aux["email"]."<br />";
                    echo "Senha: ".$aux["senha"]."<br/>";
                }

            ?>

        </div>
    </div>
</body>
</html>