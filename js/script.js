// Convert Celcius to Fahrenheit //
function ConvertCF(a){
    if (a == ""){
        a = ""
    }
    else{
        let CelcResult = document.querySelector('input.CelciusNumb').value

        let hasil = parseInt(CelcResult) * 9 / 5 + 32 + " F"
        let caraKerja = parseInt(CelcResult) + " * 9 / 5 + 32 = " + hasil

        document.getElementById("FahrenheitResult").innerText = hasil
        document.getElementById("CaraKerjaCF").innerText = caraKerja
    }
}

// Convert Fahrenheit to Celcius //
function ConvertFC(a){
    if (a == ""){
        a = ""
    }
    else{
        let CelcResult = document.querySelector('input.fahrNumb').value

        let hasil = parseInt(CelcResult) * 9 / 5 + 32 + " F"
        let caraKerja = parseInt(CelcResult) + " * 9 / 5 + 32 = " + hasil

        document.getElementById("CelciusResult").innerText = hasil
        document.getElementById("CaraKerjaFC").innerText = caraKerja
    }
}

// Reset function for Ceclius-Fahrenheit //
function ResetFuncCF(){
    let CelcResult = ""
    let fahResult = ""
    let caraKerjanull = ""

    document.querySelector('input.CelciusNumb').value = CelcResult
    document.getElementById('FahrenheitResult').innerText = fahResult
    document.getElementById('CaraKerjaCF').innerText = caraKerjanull
}

// Reset function for Fahreheit-Celcius //
function ResetFuncFC(){
    let fahrResult = ""
    let celcResult = ""
    let caraKerjanull = ""

    document.querySelector('input.fahrNumb').value = fahrResult
    document.getElementById('CelciusResult').innerText = celcResult
    document.getElementById('CaraKerjaFC').innerText = caraKerjanull
}