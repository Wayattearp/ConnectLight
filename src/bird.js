export default class Bird {
    constructor() {
        this.height = 42,
            this.width = 42,
            this.x = 144,
            this.x_velocity = 0,
            this.y = 400,
            this.y_velocity = 5

    }

    drawBird(context) {
        const bird1 = new Image();
        bird1.src = "./src/images/bird/frame-1.png";
        context.drawImage(bird1, this.x, this.y, this.width, this.height);
        
    }

    // birdMoves() {

    //     bird1.x += 0.75;
    //     bird2.y += 1, bird2.x += 3;
    //     bird3.y += 2, bird3.x += 0.25;
    // }
}