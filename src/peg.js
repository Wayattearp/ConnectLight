export default class Peg {
    constructor(x, y) {
        this.width = 55;
        this.height = 20;
        this.x = x;
        this.y = y;
    }

    drawPeg(context, x, y, imageName) {
        const pegImage = new Image();
        pegImage.src = imageName;
        context.drawImage(pegImage, this.x = x, this.y = y, this.width, this.height);
    }

    drawRightPeg(context, x, y) {
        this.drawPeg(context, x, y, "./src/images/right_peg.png");
    }

    drawLeftPeg(context, x, y) {
        this.drawPeg(context, x, y, "./src/images/left_peg.png");
    }

    handleCollisions(climber) {
        const { x, width, y, height } = this;
        if (
            climber.x + climber.width > x &&
            climber.x < x + width &&
            climber.y + climber.height > y &&
            climber.y < y + height
        ) {
            // Adjust climber's position and velocity to prevent overlapping with the peg
            climber.y = y - climber.height;
            climber.y_velocity = 0;
            climber.jumping = false;
        }
    }

}
