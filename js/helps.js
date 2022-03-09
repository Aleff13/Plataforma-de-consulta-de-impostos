//in this script we will put the helps for each impost

//function will that switch the help
function switchHelp(){
    let options = window.document.getElementById("options").value

    let display = window.document.getElementById("display")

    //console.log(options)

    switch(options){

        case "icms":

            // display.innerText="icms"
            
            break;

        case "iss":

            // display.innerText="iss"
            
            break;

        case "IRRF":

            // display.innerText="This calc only need the salary value" +"\n"+
            // "The tax will be: " + "\n\n" +

            // "for salary until R$ 1.903,98, the employer is free; " + "\n" + 
            // "for R$ 1.903,99 until R$ 2.826,65, the aliquot is 7,5%;" + "\n" + 
            // "for R$ 2.826,66 until R$ 3.751,05, the aliquot is 15%;" + "\n" + 
            // "for R$ 3.751,06 until R$ 4.664,68, the aliquot is 22,5%;" + "\n" + 
            // "above R$ 4.664,68, the aliquot is 27,5%."
            
            
            break;

    }

    return
}


//the button and the event will show and switch the help
const switchHelpBtn = window.document.getElementById("content")

switchHelpBtn.addEventListener("mouseout", switchHelp)