const Redirect = {

    redirectLoginPage : function() {

        window.location = "login.php"

    },

    redirectRegisterPage : function() {

        window.location = "register.php"

    },
    
    redirectBlogPage : function() {

        window.location = "blog.php"

    },

}

console.log("Ola")

//instanciando
const redirecionar = Redirect

var buttonLogin = window.document.getElementById("login")
var buttonRegister = window.document.getElementById("cadastro")
var buttonBlog = window.document.getElementById("blog")

buttonLogin.addEventListener("click", redirecionar.redirectLoginPage)
buttonRegister.addEventListener("click", redirecionar.redirectRegisterPage)
buttonBlog.addEventListener("click", redirecionar.redirectBlogPage)
