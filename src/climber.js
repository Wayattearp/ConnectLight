import Controller from './controller';

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

    handleMoves() {
        if (Controller.up && this.jumping == false) {
            this.y_velocity -= 20;
            this.jumping = true;

        }

        if (Controller.left) {
            this.x_velocity -= 0.5;

        }

        if (Controller.right) {
            this.x_velocity += 0.5;
        }

        if (this.y > 805) {
            this.jumping = false;
            this.y = 805;
            // climber.y_velocity = 0;
            // if climber is falling below floor line
        }

        // if climber is going off the left of the screen
        if (this.x < -20) {
            this.x = -20;

        } else if (this.x > 740) {// if climber goes past right
            this.x = 740;

        }

        this.y_velocity += 1.5;// gravity
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9;// friction
        this.y_velocity *= 0.9;// friction
        
    }

}




