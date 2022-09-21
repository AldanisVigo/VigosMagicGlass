let mag = document.getElementById('mag')

let dragging = false

window.addEventListener('mousedown',(e)=>{
    dragging = true
})

window.addEventListener('mouseup',(e)=>{
    dragging = false

})

window.addEventListener('mousemove',(e)=>{
    if(dragging){
        let magStyle = window.getComputedStyle(mag)
        let magWidth = Number(magStyle.width.split('px')[0])
        let magHeight = Number(magStyle.height.split('px')[0])
        let newX = e.clientX - mag.offsetLeft - (magWidth / 2)
        let newY = e.clientY + mag.offsetTop - (magHeight / 2)

        const getDistance = (x1, y1, x2, y2) => {
            let y = x2 - x1;
            let x = y2 - y1;
            
            return Math.sqrt(x * x + y * y);
        }    
        
        let distanceMouseFromButton = getDistance(button.offsetLeft,button.offsetTop,e.clientX,e.clientY - magHeight / 3.5)
        console.log(`Distance from button (${distanceMouseFromButton})`) 

        if(distanceMouseFromButton < 70){
            button.style.visibility = 'visible'
        }else{
            button.style.visibility = 'hidden'
        }

        console.log(`Moving to (${newX},${newY})`)
        mag.style.transform = `translateX(${newX}px) translateY(${newY}px)`
    }
})

let button = document.getElementById('hidden_button')
button.style.visibility = 'hidden'
button.onclick = () => {
    alert("You Curious George You!")
}
