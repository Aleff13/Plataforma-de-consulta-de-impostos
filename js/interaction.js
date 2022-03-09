//we will create a responsive click option, to switch the form option

function switchForm(){

    let options = window.document.getElementById("options").value

    let icms = window.document.getElementById("icms-st")
    let ISS = window.document.getElementById("ISS")
    let IRRF = window.document.getElementById("IRRF")

    console.log(options)

    switch(options){

        case "icms":

            icms.style.display="flex"
            ISS.style.display="none"
            IRRF.style.display="none"
            break;

        case "iss":

            ISS.style.display="flex"
            icms.style.display="none"
            IRRF.style.display="none"
            break;

        case "IRRF":

            IRRF.style.display="flex"
            ISS.style.display="none"
            icms.style.display="none"
            break;

    }

    return

}

const switchBtn = window.document.getElementById("content")

switchBtn.addEventListener("mouseout", switchForm)

