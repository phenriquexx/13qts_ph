btn = document.getElementById ("btn")




btn.addEventListener("click", function() {
 

let produto=prompt("Qual produto você está comprando?")

let real =prompt("Quanto custa " + produto + " que você está comprando?" )

let dinheiro =prompt("Qual o valor em dinheiro que você deu pra pagar " + produto + "?" )


real= parseFloat(real)
dinheiro= parseFloat(dinheiro)

let troco= dinheiro-real

alert(`Você comprou ${produto} que custa ${real}.
Deu ${dinheiro} em dinheiro e  vai receber ${troco} de troco. Volte sempre!`  )


})