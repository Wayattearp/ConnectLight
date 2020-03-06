

export default class Bird {
    constructor(climber) {
        this.height = 42,
            this.width = 42,
            this.x = this.getRandomInt(-400, -50),
            this.y = this.getRandomInt(20, 750),
            this.x_velocity = this.getRandomArbitrary(1, 2.2),
            this.birdImage = new Image(),
            this.birdImage.src = "./src/images/bird/frame-1.png",
            this.swift = document.createElement("audio");
            this.swift.src = "./src/sounds/swift.ogg"

    }       

    handleCollisions(climber) {
        if ((climber.x) < this.x + this.width - 5 &&
            (climber.x) + (climber.width - 12) > this.x &&
            (climber.y) < this.y + this.height - 25 &&
            (climber.y) + (climber.height ) > this.y + 20) { //bottom
                this.swift.play();
                this.x_velocity > 0 ? climber.x += this.x / 5 : climber.x -= this.x /5
                // alert("Game Over")
        }
    }

    drawBird(context) {
        context.drawImage(this.birdImage, this.x, this.y, this.width, this.height
            );
        
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    handleFlight() {
        if (this.x < -100) {
            this.x_velocity = this.getRandomArbitrary(2.9, 4.2)
            this.y = this.getRandomInt(20, 750)
            this.birdImage.src = "./src/images/bird/frame-1.png"

        } else if (this.x > 1040) {
            this.x_velocity = this.getRandomArbitrary(-2.9, -4.5)
            this.y = this.getRandomInt(20, 750)
            this.birdImage.src = "./src/images/bird/frame-1_flipped.png"
        }
        this.x += this.x_velocity
    }

    populateBirds() {
         let birds = [];
         let temp;
        for (let i = 0; i < 15; i++) {
            temp = "bird" + i;
            birds.push(temp = new Bird);
        }
        return birds;
    }
}
