export default class Climber {
    constructor() {
        this.height = 92,
            this.width = 82,
            this.jumping = true,
            this.x = 244,
            this.x_velocity = 0,
            this.y = 0,
            this.y_velocity = 0

    }
    

    drawClimber(context) {
        const climberImage = new Image();
        climberImage.src = "./src/images/craftpix-991117-free-fallen-angel-chibi-2d-game-sprites/Fallen_Angels_2/PNG/PNG Sequences/Walking/0_Fallen_Angels_Walking_000.png";
        context.drawImage(climberImage, this.x, this.y, this.width, this.height);

    }

}

// let climber = new Climber;
// window.addEventListener("keydown", climber.controller.keyListener)
// window.addEventListener("keyup", climber.controller.keyListener);



