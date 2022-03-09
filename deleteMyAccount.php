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

        <div id="sideText">

        Poxa! <br> que pena que você já está <br> indo ;(

        </div>

        <div id="topText">

        Deletar

        </div>

        <div class="box">

            <form action="deleting.php" method="POST">

                <label for="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="" >

                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="" >

                <label for="password">Senha</label>
                <input type="password" name="pass" id="pass" placeholder="" minlength="8" >

                <input type="submit" value="Deletar" id="login" class="btn">

                <hr>

                <p class="footer">Ainda não possui uma conta? <a href="register.php">Cadastre-se aqui!</a></p>
                
            </form>

        </div>
    </div>
</body>
</html>