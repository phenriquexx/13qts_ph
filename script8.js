function conversor(){

    var num = prompt("Digite uma temperatura em °C (Celsius)")
    num = parseFloat(num)
    
    let kelvin = num + 273.15
    let fahrenheit = num * 1.8 + 32
    
    let txt = document.getElementById('txt')
     txt.innerHTML = `<h3> A temperatura de ${num}, corresponde a...</h3>`
     txt.innerHTML += `<p> ${kelvin}°K (Kelvin) <br>
                           ${fahrenheit}°F (fahrenheit)</p>`
    }