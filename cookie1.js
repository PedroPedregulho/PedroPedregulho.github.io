//variaveis
var cookies=document.querySelectorAll('.princ')
var p=document.querySelectorAll('#aaa')
var x=document.querySelectorAll('input')


cookie=localStorage.cookie
doce=localStorage.doce
batata=localStorage.batata
coxinha=localStorage.coxinha
pirulito=localStorage.pirulito
kau=localStorage.kau

setInterval(() => {
    valor = checado()
}, 0);


  
//eventos
cookies[0].addEventListener('mouseup',cookieadd)
cookies[1].addEventListener('mouseup',doceadd)
cookies[2].addEventListener('mouseup',batataadd)
cookies[3].addEventListener('mouseup',coxinhaadd)
cookies[4].addEventListener('mouseup',pirulitoadd)
cookies[5].addEventListener('mouseup',kauadd)

//funcoes 
function cookieadd(){
 cookie=cookie + (1+doce)*(1+batata)**(1+coxinha/10+pirulito)
 
}
function doceadd(){
    if (cookie>=10*valor) {
        doce+=valor
        cookie-=10*valor
    }
    else alert('sem grana')
}
function batataadd(){
    if (doce>=100*valor){
        batata+=valor
        doce-=100*valor
    }
    else alert('Sem doce')
}
function coxinhaadd(){
    if (batata>=1000*valor){
        coxinha+=valor
        batata-=1000*valor
    }
    else alert('Sem batata')
}
function pirulitoadd(){
    if (coxinha>=10000*valor){
        pirulito+=valor
        coxinha-=10000*valor
    }
    else alert('Sem coxinha')
}
function kauadd(){
    if (cookie>10000000000000000 && doce>1000000000000000 && batata>100000000000000 && coxinha>10000000000000 && pirulito>1000000000000){
        kau++
        alert('Parabéns,vc tem a Kau')
    }
    else {
        alert("cookie >10000000000000000 \n doce>1000000000000000 \n batata>100000000000000 \n coxinha>10000000000000 \n pirulito>1000000000000")
    }
}

function checado(){
    for(i=0;i<x.length;i++){
        if(x[i].checked==1){
            return parseInt(x[i].value)
        }
    }
}



//intervalos
setInterval(function (){
    p[0].innerHTML=parseFloat(cookie)
    p[1].innerHTML=parseFloat(doce)
    p[2].innerHTML=parseFloat(batata)
    p[3].innerHTML=parseFloat(coxinha)
    p[4].innerHTML=parseFloat(pirulito)
    p[5].innerHTML=parseFloat(kau)
    
    cookie=parseFloat(cookie)
    doce=parseFloat(doce)
    batata=parseFloat(batata)
    coxinha=parseFloat(coxinha)
    pirulito=parseFloat(pirulito)
    kau=parseFloat(kau)

    
},0)


setInterval(function(){
    localStorage.cookie=cookie
    localStorage.doce=doce
    localStorage.batata=batata
    localStorage.coxinha=coxinha
    localStorage.pirulito=pirulito
    localStorage.kau=kau
},500)
//sei la
if(localStorage.getItem('sla2442')!=1){
    var cookie=0
    var doce=0
    var batata=0
    var coxinha=0
    var pirulito=0
    var kau=0
}
localStorage.setItem('sla2442',1)
var aa=0




