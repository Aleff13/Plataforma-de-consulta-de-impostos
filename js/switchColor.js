function switchColor(){

    let body = window.document.getElementById("body");
    let btnDownload = window.document.getElementById("btnDownload");
    let btnHome = window.document.getElementById("btnHome");
    let footer = window.document.getElementById("footer");

    if(now == "1"){

        body.classList.add("switch")
        footer.classList.add("switch")
        btnDownload.classList.add("switch")
        btnHome.classList.add("switch")

        now = "0"
    
    }else{

        body.classList.remove("switch")
        footer.classList.remove("switch")
        btnDownload.classList.remove("switch")
        btnHome.classList.remove("switch")

        now = "1"

    }

}

function redirect(){

    window.location = "home.php"

}

var switchBtn = window.document.getElementById('switch');
var buttonHome = window.document.getElementById("btnHome");


var now = "1"

switchBtn.addEventListener("click", switchColor)

buttonHome.addEventListener("click", redirect)