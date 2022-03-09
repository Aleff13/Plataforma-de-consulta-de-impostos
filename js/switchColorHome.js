function switchColor(){

    let body = window.document.getElementById("container");

    if(now == "1"){

        body.classList.add("switch")
        switchBtn.classList.add("switch")

        now = "0"
    
    }else{

        body.classList.remove("switch")
        switchBtn.classList.remove("switch")


        now = "1"

    }

}

var switchBtn = window.document.getElementById('switch');


var now = "1"

switchBtn.addEventListener("click", switchColor)
