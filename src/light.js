export default class Light {
    constructor(climber, x, y) {
        this.width = 200;
        this.height = 40;
        this.x = x;
        this.y = y;
        this.lightImage = new Image();
        this.lightImage.src = "./src/images/light/light_off.png";
        this.lightSound = document.createElement("audio");
        this.lightSound.src = "./src/sounds/on.wav";
    }

    drawLight(context) {
        context.drawImage(this.lightImage, this.x, this.y, this.width, this.height);
    }

    handleCollisions(climber) {
        const { x, width, y, height } = this;
        if (
            climber.x < x + width - 5 &&
            climber.x + (climber.width - 12) > x &&
            climber.y < y + height - 25 &&
            climber.y + climber.height > y + 10
        ) {
            this.lightImage.src = "./src/images/light/light_on.png";
            this.lightSound.play();
            alert("Adamant Patience!");
        }
    }
}
