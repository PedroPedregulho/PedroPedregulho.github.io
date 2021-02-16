var cookie=document.querySelector('#cookie')
var doce=document.querySelector('#doce')
var p=document.querySelectorAll('p')
var x=0
var y=0


cookie.addEventListener('click',adde)
doce.addEventListener('click',addy)


function addy(){
    if (x>=10) {
        y++
        x-=10
    }
    else alert('sem grana')
}
function adde(){
 x++
 console.log(x)
}

setInterval(() => {
    p[0].innerHTML=x
    p[1].innerHTML=y
    console.log(x)
    console.log(y)
}, 0);
setInterval(() => {
    x+=y
}, 1000);