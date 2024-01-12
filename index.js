const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
const gravity = 0.5
class Player {
    constructor(position) {
        this.position = position;
        this.velocity = {
            x:0,
            y:1,
        }
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, 100);
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.velocity += gravity
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
let y = 100

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white'; //this is done to clear the canvas for each y change jaate ager gula muche jay, prevents drip effect
    c.fillRect(0,0,canvas.width,canvas.height);
    player.update()
    p2.update();
   
}

animate();