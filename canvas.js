var canvas=document.querySelector('canvas')
var c=canvas.getContext('2d')

var aa=c




canvas.width=innerWidth
canvas.height=innerHeight


c.beginPath()

c.lineTo(1000,150)
c.lineTo(0,500)
c.lineTo(300,100)
c.lineTo(1000,150)
c.strokeStyle='red'
c.stroke()
setInterval(()=>{
for(i=0;i<100;i++){
    var x=Math.random()*innerWidth
    var y=Math.random()*innerHeight
    c.beginPath()
    c.lineTo(x,y)
    c.lineTo(innerWidth/2,innerHeight/2)
    c.strokeStyle=getRandomColor()
    c.stroke()
}
},000)


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




  c.beginPath()
  c.arc(x,y,50,0,Math.PI*2,false)
  c.strokeStyle=getRandomColor()
  c.fillStyle=getRandomColor()
  c.stroke()

