button = document.getElementById("button")
rel = document.getElementById("rel")

let km=0
let hm=0
let dam=0
let dm=0
let cm=0
let mm=0

button.addEventListener("click",function(){
    let m = prompt (' Digite uma distância em metros')

    km=m/1000
    hm=m/100
    dam=m/10
    dm=m*10
    cm=m*100
    mm=m*1000

    rel.innerHTML= `<h3> A distância de ${m} metros, corresponde a... </h3>`
    rel.innerHTML+= `<p>${km} Quilômetros (km) </p>`
    rel.innerHTM+= `<p>${hm} Hectômetros (hm) </p>`
    rel.innerHTML+= `<p>${dam} Decâmetros (dam) </p>`
    rel.innerHTML+= `<p>${dm} Decímetros (dm)  </p>`
    rel.innerHTML+= `<p>${cm} Centímetros (cm) </p>`
    rel.innerHTML+= `<p>${mm} Milímetros (mm)</p>`


    

})