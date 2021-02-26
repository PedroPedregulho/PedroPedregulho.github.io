var canvas=document.querySelector('canvas')
var c=canvas.getContext('2d')
canvas.width=innerWidth
canvas.height=innerHeight
var mouse={
    x:undefined,
    y:undefined
}
addEventListener('mousemove',resetar)

function resetar(event){
    mouse.x=event.x
    mouse.y=event.y
}




function cores(){
    var cor='#'
    var sla='0123456789ABCDEF'
    for(var i=0;i<6;i++){
        cor+=sla[Math.floor(Math.random()*16)]
    }
    return cor
}

var bola=[]
var x,y,dx,dy,r







function Bolas(x,y,r,dx,dy){
    this.x=x
    this.y=y
    this.r=r
    this.dx=dx
    this.dy=dy
    this.cora=cores()
        this.update=function(){
            this.y+=this.dy
            this.x+=this.dx
            if(this.x+this.r>=innerWidth|| this.x-this.r<0){
                this.dx= -this.dx
            }
            if(this.y+this.r+this.dy>=innerHeight || this.y-this.r<0){
                this.dy= -this.dy
            }
            if(this.y+this.r>innerHeight){
                this.dy=0
            }
            else{
                this.dy+=2
                this.dx+=2
            }
            if(mouse.x - this.x<150 && mouse.x - this.x  >-150 &&
                mouse.y - this.y<150 && mouse.y - this.y  >-150){
                if(this.r<100){
                  this.x=mouse.x
                  this.y=mouse.y
                }
            }
            

            c.beginPath()
            c.fillStyle=this.cora
            c.arc(this.x,this.y,this.r,0,Math.PI*2,false)
            c.stroke()
            c.fill()
            
        }
}
for(var i=0;i<40;i++){

   r=Math.random()*50
    dx=Math.random()*30
    dy=Math.random()*30
    x=Math.random()*(innerWidth-r*3)+r*2
    y=Math.random()*(innerHeight-r*5)+r*2
    bola.push(new Bolas(x,y,r,dx,dy))    
    
}



function animar(){
    requestAnimationFrame(animar)
    c.clearRect(0,0,innerWidth,innerHeight)
    bola.forEach(element => {
        element.update()
    });

    setInterval(()=>{
        bola.forEach(element => {
            if(element.y+element.r>innerHeight){
                c.clearRect(element.x,element.y,element.r*2,element.r*2)
            }
        });
    },0)
}

console.log(bola)




var botao=document.querySelector('button')

botao.addEventListener('click',bolinha)


var bolass=[]
function bolinha(){
    
    r=Math.random()*50
    dx=Math.random()*30
    dy=Math.random()*30
    x=Math.random()*(innerWidth-r*3)+r*2
    y=Math.random()*(innerHeight-r*5)+r*2
    bolass.push(new Bolas(x,y,r,dx,dy))    
   
    
}


    function bolinha2(){
        requestAnimationFrame(bolinha2)
        c.clearRect(0,0,innerWidth,innerHeight)
        bolass.forEach(element => {
            element.update()
        });
    }
    bolinha2()

