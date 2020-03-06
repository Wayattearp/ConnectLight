export default class Light {
    constructor(climber, x, y) {
        this.width = 200;
        this.height = 40;
        this.x = x;
        this.y = y; 
        this.lightImage = new Image();
        this.lightImage.src = "./src/images/light/light_off.png";
        this.lightSound = document.createElement("audio");
        this.lightSound.src = "./src/sounds/on.wav"
    }

    drawLight(context, x, y) {
       
        context.drawImage(this.lightImage, this.x = x, this.y = y, this.width, this.height
        );
    }

    handleCollisions(climber) {

        if ((climber.x) < this.x + this.width - 5 &&
            (climber.x) + (climber.width - 12) > this.x &&
            (climber.y) < this.y + this.height - 25 &&
            (climber.y) + (climber.height) > this.y + 10) {
            this.lightImage.src = "./src/images/light/light_on.png"
            this.lightSound.play();
            // alert("Adamant Patience!")
        }

    }

}