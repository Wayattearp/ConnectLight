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
            climber.x < x + width - 5 &&
            climber.x + (climber.width - 12) > x &&
            climber.y < y + height - 25 &&
            climber.y + climber.height > y + 10
        ) {
            climber.y_velocity = -1;
            climber.jumping = false;
        }
    }
}
