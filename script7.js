btn = document.getElementById ("btn")

let d

let dolar=prompt("Quanto está a cotação do dólar agora?")


btn.addEventListener("click", function() {


var real =prompt("Quantos R$ você tem na carteira?")
dolar= parseFloat(dolar)
real= parseFloat(real)
d = real/dolar + "--" + "é a quantidade de dolar que você tem."; 
alert(d)

})