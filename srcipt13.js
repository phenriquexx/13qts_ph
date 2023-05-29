button = document.getElementById("button")
rel = document.getElementById("rel")

       button.addEventListener("click", function (){
            let nome = window.prompt ('Qual é o nome do aluno?')
            let nota = prompt (` Primeira nota de ${nome}:`)
            let nota2 = prompt (` Segunda nota de ${nome}:`)
            nota=parseFloat(nota)
            nota2=parseFloat(nota2)
            let media= (nota+nota2)/2
            rel.innerHTML=  `Analisando a situação de ${nome}`
            rel.innerHTML+= `<p>Com as notas ${nota} e ${nota2}, a média é ${media} </p>`
            if (media>=6){
                rel.innerHTML+= `<p>Com média acima ou igual de 6,0, o aluno está APROVADO </p>`

            }else if(media>3 && media<6){
                rel.innerHTML+= `<p>Com média entre 3,0 e 6,0, o aluno está em RECUPERAÇÃO </p>`

            }else{
                rel.innerHTML+= `<p> Com média abaixo de 3, o aluno está REPROVADO </p>`

            }
        })