function desconto(){

    var produto;
     produto=prompt("Qual o produto que você está comprando?")

    var preco;
     preco=prompt("Qual o preço do " + produto + "?")

    var calculo;
     calculo=  preco*10/100

    let valor= preco-calculo

    result= document.getElementById("result")

    result.innerHTML= `<h3>Calculando o desconto de 10% para ${produto}</h3>`
    result.innerHTML+= `<p>Calculando o desconto de 10% para ${preco}</p>`
    result.innerHTML+= `<p>Você acaba de ganhar R$ ${calculo} de desconto (-10%).`
    result.innerHTML+= `<p>No fim, você vai pagar ${val}</p>`


}