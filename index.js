const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); //canvas context

canvas.width = 1024;
canvas.height = 576;
const gravity = 0.5
const scaledCanvas = {
    width: canvas.width/4,
    height: canvas.height/4
}
class Sprite {
    constructor ({position, imageSrc}) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
    }

    draw(){
        if(!this.image) return 
       c.drawImage(this.image, this.position.x, this.position.y)
    }
    update(){
        this.draw()
    }
}

class Player {
    constructor(position) {
        this.position = position;
        this.velocity = {
            x:0,
            y:1
        }
        this.height = 100
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, this.height);
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y < canvas.height) this.velocity.y += gravity
        else this.velocity.y = 0
    }
}
const player = new Player({
    x:0,
    y:0
});
const p2 = new Player({
    x: 100,
    y: 100
});

const background = new Sprite({
    position : {
        x: 0,
        y: 0
    },
    imageSrc : '/img/background.png'
})


const keys = {
    d: {
        pressed:false
    },
    a: {
        pressed:false
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white'; //this is done to clear the canvas for each y change jaate ager gula muche jay, prevents drip effect
    c.fillRect(0,0,canvas.width,canvas.height);

    c.save() //the code within save and restore will be only executed once
    c.scale(4,4)
    c.translate(0, -background.image.height+scaledCanvas.height) //because canvas is scaled 4 times
    background.update()
    c.restore()

    player.update()
    p2.update();
    player.velocity.x = 0
    if(keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5
}

animate();
window.addEventListener('keydown', ()=>{
    switch(event.key){
        case 'd' :
            // player.velocity.x = 1
            keys.d.pressed = true
            break
        case 'a' :
            // player.velocity.x = -1
            keys.a.pressed = true
            break
        case 'w' :
            player.velocity.y = -15
            break
    }
})
window.addEventListener('keyup', ()=>{
    switch(event.key){
        case 'd' :
          
            keys.d.pressed = false
            console.log('d key up');
            break
        case 'a' :
       
            keys.a.pressed = false
            break
    }
})