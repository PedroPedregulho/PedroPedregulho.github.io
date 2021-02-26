var canvas=document.querySelector('canvas')
var c=canvas.getContext('2d')
canvas.width=innerWidth
canvas.height=innerHeight
canvas.style.background=getRandomColor()









// setInterval(()=>{

// for(i=0;i<100;i++){
//     var x=Math.random()*innerWidth
//     var y=Math.random()*innerHeight
//     var x1=Math.random()*innerWidth
//     var y1=Math.random()*innerHeight

//     c.beginPath()
//     c.lineTo(x,y)
//     c.lineTo(x1,y1)

//     c.strokeStyle=getRandomColor()
//     c.stroke()
// }
// },000)


var mouse = {
    x:undefined,
    y:undefined
}
addEventListener('mousemove',function(event){
        mouse.x=event.x
        mouse.y=event.y
        console.log(lista)
 
})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



function Bolas(x,y,r,vx,vy){
    this.x=x
    this.y=y
    this.r=r
    this.vx=vx
    this.vy=vy
    this.color=getRandomColor()
    
  
    this.draw = function(){
    c.beginPath()
    
    c.fillStyle=this.color
    c.strokeStyle=this.color
    c.arc(this.x,this.y,this.r,0,Math.PI*2,false)
    c.stroke()
    c.fill()
    }
    this.update = function(){ 
        this.x+=this.vx
        this.y+=this.vy
    if(this.x+this.r>=innerWidth || this.x-this.r<=0){
        this.vx=-this.vx
        
    }
    if(this.y-this.r<=0 || this.y+this.r>=innerHeight){
        this.vy=-this.vy
        
    }
    if(mouse.x - this.x<50 && mouse.x - this.x  >-50 &&
        mouse.y - this.y<50 && mouse.y - this.y  >-50){
        if(this.r<100){
          this.r+=10
        }
    }
    if(mouse.x - this.x>100 || mouse.x-this.x<-100){
        if(this.r>5){
            this.r-=5
        }
    }
    this.draw()
    }
}
var lista=[]
for(i=0;i<500;i++){
    var x=Math.random()*innerWidth
    var y=Math.random()*innerHeight
    var vx=Math.random()*10
    var vy=Math.random()*10
    var r=Math.random()*100
    
 lista.push(new Bolas(x,y,r,vx,vy))
}

var aaa=getRandomColor()
function animar(){
    requestAnimationFrame(animar)
    c.clearRect(0,0,innerWidth,innerHeight)
    for(i=0;i<lista.length;i++){
       lista[i].update()
       
   }
}
animar()

var h1=document.querySelector('h1')




var rad=1

setInterval(()=>{
for(i=0;i<lista.length;i++){
    if(lista[i].r>rad){
        rad=lista[i].r
    }
}
h1.innerHTML=rad
},0)