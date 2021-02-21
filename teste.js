var sla=document.querySelector('#aaa')
var slaa=document.querySelector('#aa')
var botao=document.querySelector('#reset')
var h1=document.querySelector('h1')
var h2=document.querySelector('h2')
var h3=document.querySelector('h3')
var contador=0
var maior=0

maior=localStorage.maior
sla.addEventListener('click',mover)
slaa.addEventListener('click',alerta)
botao.addEventListener('click',resetar)


function resetar(){
    contador=0
    sla.style.width=200+'px'
    sla.style.height=200+'px'
}
function mover(){
    sla.style.left=Math.random()*500+1+ 'px'
    sla.style.top=Math.random()*500+1+ 'px'
    sla.style.width=Math.random()*200+1 +'px'
    sla.style.height=sla.style.width
    contador++
}
function alerta(){
    alert('Perdeu')
    contador=0
}


setInterval(() => {
    h1.innerHTML='Pontos: ' + contador
    h2.innerHTML='Sua Maior Pontuaçao: ' + maior
    h3.innerHTML='Maior de todos-Pedro:92'
    localStorage.maior=maior
    if(contador>maior){
        maior=contador
    }
}, 000);



if(localStorage.sla1!=1){
    var maior=0
}
localStorage.setItem('sla1',1)
alert('Se estiver no celular jogue deitado xD')