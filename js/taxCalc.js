//here we will calc the tax

//4 functions each function, 3 for each calc and 1 for display the result

//each function will return the result and the final function will display the result

function icmsCalc(){

    //referencia aos campos
    let inPrice = window.document.getElementById("price")
    let indescount = window.document.getElementById("discount")
    let inshipping = window.document.getElementById("shipping")
    let inmva = window.document.getElementById("MVA")
    let inInternal = window.document.getElementById("internal")
    let inExternal = window.document.getElementById("external")
    let inIpi = window.document.getElementById("IPI")

    //pegando os valores dos campos
    let price = Number(inPrice.value)
    let descount = Number(indescount.value)
    let shipping = Number(inshipping.value)
    let mva = Number(inmva.value)
    let internal = Number(inInternal.value)
    let external = Number(inExternal.value)
    let ipi = Number(inIpi.value)

    let priceWithDescounts = price - descount - shipping
    let ipiTax = priceWithDescounts * (ipi / 100)

    const icmsBaseInter = priceWithDescounts

    const icmsInter = icmsBaseInter * (internal/100)

    const icmsBase = priceWithDescounts + ipiTax + ((priceWithDescounts + ipiTax)* (mva/100) )

    const result = ((icmsBase * (external/100)) - icmsInter).toFixed(2)

    displayResult(result)




    //validação dos campos de entrada


    
}

function issCalc(){
    //referencia aos campos de entrada
    let inServicePrice = window.document.getElementById("issPrice")
    let inAliquot = window.document.getElementById("pratAliqt")

    //aqui iremos ter a validação
    let servicePrice = Number(inServicePrice.value)
    let aliquot = Number(inAliquot.value)

    if((servicePrice == "" || isNaN(servicePrice)) & (aliquot =="" || isNaN(aliquot))){

        inServicePrice.focus()
        inAliquot.focus()
        alert("Preencha os campos corretamente !")
        return

    }

    let iss = (servicePrice*aliquot/100).toFixed(2)


    displayResult(iss)


}

function irrfCalc(){

    //iremos usar alguns switch cases e validações
    //precisamos referenciar os campos 

    let insalary = window.document.getElementById("Salary")

    //pegar valor
    let salary = Number(insalary.value)

    //validação de campo vazio
    if(salary=="" || isNaN(salary)){
        insalary.focus()
        alert("Preencha todos os campos corretamente ")

        return

    }

    //switch cases

     if(salary < 1903.98){

            let result = "free"

            // alert(result)

            displayResult(result) 

    }
    else if( (salary > 1903.99) & (salary < 2826.65) ){

        // let newSalary = salary - 142.80

        let result = (Salary*(7.5/100)).toFixed(2)

        // alert(result)

        displayResult(result)

    }

    else if( (salary > 2826.66) & (salary < 3751.05) ){

        let result = (Salary*(15/100)).toFixed(2)

        // alert(result)

        displayResult(result)

    }

    else if( (salary > 3751.06) & (salary < 4664.69) ){

        let result = (Salary*(22.5/100)).toFixed(2)

        // alert(result)

        displayResult(result)

    }

    else{

        let result = (Salary*(27.5/100)).toFixed(2)

        // alert(result)

        displayResult(result)

    }



}

function displayResult(value){

    let display = window.document.getElementById("displayText")

    display.innerText="R$ " + value


}

const issSubmit = window.document.getElementById("issSubmit")

const irrfSubmit = window.document.getElementById("irrfSubmit")

const icmsSubmit = window.document.getElementById("icmsSubmit")

icmsSubmit.addEventListener("click", icmsCalc)

irrfSubmit.addEventListener("click", irrfCalc)

issSubmit.addEventListener("click", issCalc)

