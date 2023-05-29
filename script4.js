function bhaskara(){
    
    var a = parseInt(prompt("Dado a equação: ax^2 + bx + c = 0 \nDigite o valor de a:"))
    var b = parseInt(prompt("Dado a equação: ax^2 + bx + c = 0 \nDigite o valor de b:"))
    var c = parseInt(prompt("Dado a equação: ax^2 + bx + c = 0 \nDigite o valor de c:"))
    var delta = b ** 2 -(4 * a * c);
    delta= "O valor calculado foi:" + delta

    document.getElementById("result").innerHTML=delta


}