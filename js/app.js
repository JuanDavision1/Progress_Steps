"use-strict"
let  circulo = document.getElementById("one")
let circulodos = document.querySelector("#two")
let  circulotres = document.getElementById("#tree")
let circulocuatro = document.querySelector("#four")
let rectangulo = document.querySelector(".rectangle")
let botonAnt = document.querySelector('#prev')
let botonDes = document.querySelector('#next')
console.log(botonAnt)
window.addEventListener('load', ()=>{
circulo.style.border=" 4px solid #3498db"
botonAnt.style.cursor="not-allowed"
})
botonDes.addEventListener('click',()=>{
    rectangulo.style.backgroundColor ="#3498db"
    rectangulo.style.transition= "all 150ms ease-in"
    circulodos.style.border=" 4px solid #3498db"
    circulodos.style.transition= "all 302ms ease-in"
    botonAnt.style.cursor="pointer"
    botonAnt.style.backgroundColor ="#3498db"
    
})