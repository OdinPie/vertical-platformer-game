const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

class Player {
    constructor() {
        this.position = {
            x:0,
            y:0,
        }
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, 100);
    }

    update() {
        this.draw()
        this.position.y++
    }
}
const player = new Player();
let y = 100

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white'; //this is done to clear the canvas for each y change jaate ager gula muche jay, prevents drip effect
    c.fillRect(0,0,canvas.width,canvas.height);
    player.update()
    
   
}

animate();