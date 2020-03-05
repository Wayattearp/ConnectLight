import Controller from './controller';

export default class Climber {
    constructor() {
        this.height = 60,
            this.width = 40,
            this.jumping = true,
            this.x = 344,
            this.x_velocity = 0,
            this.y = 720,
            this.y_velocity = 0,
            this.climberImage = new Image();
            this.climberImage.src = "./src/images/climber.png";

    }
    

    drawClimber(context) {
        context.drawImage(this.climberImage, this.x, this.y, this.width, this.height);

    }

    handleMoves() {
        if (Controller.up && this.jumping == false) {
            this.y_velocity -= 26;
            this.jumping = true;

        }

        if (Controller.left) {
            this.climberImage.src = "./src/images/climber-1_flipped.png";
            this.x_velocity -= 0.5;

        }

        if (Controller.right) {
            this.climberImage.src = "./src/images/climber.png";
            this.x_velocity += 0.5;
        }

        if (this.y > 825) {
            this.jumping = false;
            this.y = 825;
            // this.y_velocity = 0;
            // if climber is falling below floor line
        }

        // if climber is going off the left of the screen
        if (this.x < -20) {
            this.x = -20;

        } else if (this.x > 740) {// if climber goes past right
            this.x = 740;

        }

        this.y_velocity += 1.1;// gravity
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9;// friction
        this.y_velocity *= 0.9;// friction
        
    }

}




