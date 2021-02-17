//variaveis
var cookie=document.querySelector('#cookie')
var doce=document.querySelector('#doce')
var mult=document.querySelectorAll('.mult')
var p=document.querySelectorAll('#aaa')
var cookiex=localStorage.getItem('cookiex')
var docex=localStorage.getItem('docex')

//eventos
cookie.addEventListener('mouseup',cookieadd)
doce.addEventListener('mouseup',doceadd)

//funcoes 
function cookieadd(){
 cookiex++
 cookiex+=docex
 console.log(cookiex)
 
}
function doceadd(){
    if (cookiex>=10) {
        docex++
        cookiex-=10
    }
    else alert('sem grana')
}



//intervalos
setInterval(function(){
    p[0].innerHTML=cookiex
    p[1].innerHTML=parseInt(docex)
    localStorage.cookiex=cookiex
    localStorage.docex=docex
    cookiex=parseInt(cookiex)
    docex=parseInt(docex)
},0)


setInterval(function(){
    localStorage.cookiex=cookiex
    localStorage.docex=docex
},500)


if(localStorage.getItem('sla')!=1){
    var cookiex=0
    var docex=0
}
localStorage.setItem('sla',1)
