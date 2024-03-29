import Controller from './controller';

export default class Climber {
    constructor() {
        this.height = 60;
        this.width = 40;
        this.jumping = true;
        this.x = 344;
        this.x_velocity = 0;
        this.y = 720;
        this.y_velocity = 0;
        this.climberImage = new Image();
        this.climberImage.src = "./src/images/climber.png";
        this.jumpingSound = document.createElement("audio");
        this.jumpingSound.src = "./src/sounds/jump.wav";
        this.jumpingSound.volume = 1;
    }

    drawClimber(context) {
        context.drawImage(this.climberImage, this.x, this.y, this.width, this.height);
    }

    handleMoves() {
        if (Controller.up && !this.jumping) {
            this.y_velocity -= 17;
            this.jumpingSound.play();
            this.jumping = true;
        }

        if (!Controller.up && this.jumping) {
            this.jumping = false;
        }

        if (Controller.left) {
            this.climberImage.src = "./src/images/climber-1_flipped.png";
            this.x_velocity -= 0.5;
        }

        if (Controller.right) {
            this.climberImage.src = "./src/images/climber.png";
            this.x_velocity += 0.5;
        }

        if (this.y > 820) {
            this.jumping = false;
            this.y = 820;
        }

        if (this.x < -20) {
            this.x = -20;
        } else if (this.x > 960) {
            this.x = 960;
        }

        this.y_velocity += 1;
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;
    }
}
