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
 cookiex+=parseInt(docex)
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
    p[0].innerHTML= parseInt(localStorage.getItem('cookiex'))
    p[1].innerHTML=parseInt(localStorage.getItem('docex'))
    localStorage.cookiex=cookiex
    localStorage.docex=docex
   
},0)


