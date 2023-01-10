document.getElementById("submitButton").onclick = function(){

    let temperature;

    if (document.getElementById("cButton").checked){
        temperature = document.getElementById("textBox").value;
        temperature = Number(temperature);
        temperature = toCelsius(temperature);
        document.getElementById("tempLabel").innerHTML = temperature + "°C";
    }
    else if (document.getElementById("fButton").checked){
        temperature = document.getElementById("textBox").value;
        temperature = Number(temperature);
        temperature = toFahrenheit(temperature);
        document.getElementById("tempLabel").innerHTML = temperature + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}


function toCelsius(temperature){
    return (5/9) * (temperature - 32);
}

function toFahrenheit(temperature){
    return 1.8 * temperature + 32;
}

