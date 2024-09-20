let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let color = document.getElementById('color')
let lineWidth =  document.getElementById('lineWidth')
let clearBtn=  document.getElementById('clearBtn')

canvas.width = window.innerWidth 
canvas.height = window.innerHeight 

let isPainting = false;

color.addEventListener('change',()=>{
    console.log(color.value)
})

clearBtn.addEventListener('click',(e)=>{
    if(e.target.id === 'clearBtn'){
        ctx.clearRect(0, 0, canvas.width , canvas.height )
    }
})

canvas.addEventListener('mousedown',(e)=>{
    console.log(e)
    ctx.beginPath()
    isPainting = true
})

canvas.addEventListener('mouseup',(e)=>{
    isPainting = false
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPainting){
        console.log('you are drawing')
        ctx.lineTo(e.offsetX , e.offsetY)
        ctx.moveTo(e.offsetX , e.offsetY)
        ctx.stroke()
        ctx.lineCap = 'round'
        ctx.strokeStyle = color.value
        ctx.lineWidth = lineWidth.value

    }
    else{
        isPainting = false
    }
})

