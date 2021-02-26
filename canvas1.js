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


c.beginPath()
function animate(){
    requestAnimationFrame(animate)
    var x=Math.random()*innerWidth
    var y=Math.random()*innerHeight
    
    c.strokeStyle=getRandomColor()
    c.lineTo(x,y)
    c.stroke()
}




















function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
