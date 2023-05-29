let btn = document.getElementById("btn")

btn.addEventListener("click", function(){


let nome = prompt('Qual é o nome do funcionário?')
let salario = prompt(`Qual é o salário de ${nome}?`)
salario = parseFloat(salario)
let pct = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)

let aumento = parseFloat((salario*pct/100))
let reajuste = (salario+aumento)

let txt = document.getElementById('txt')
txt.innerHTML = `<h3>${nome} recebeu um aumento salarial!</h3>`
txt.innerHTML += `<p>O salário atual era R$ ${salario}. <br>`
txt.innerHTML += `Com o aumento de ${pct}, o salário vai aumentar R$ ${aumento} no próximo mês. <br>`
txt.innerHTML += `E a partir daí, ${nome} vai passar a ganhar R$ ${reajuste}. </p>`
})