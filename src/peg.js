export default class Peg {
    constructor(climber, x, y) {
        this.width = 55;
        this.height = 20;
        this.x = x;
        // // this.y = this.getRandomInt(100, 700);
        this.y = y;
    }

    drawRightPeg(context, x, y) {
        const pegImage = new Image();
        pegImage.src = "./src/images/right_peg.png";
        context.drawImage(pegImage, this.x = x, this.y = y, this.width, this.height
        );
    }

    drawLeftPeg(context, x, y) {
        const pegImage = new Image();
        pegImage.src = "./src/images/left_peg.png";
        context.drawImage(pegImage, this.x = x, this.y = y, this.width, this.height
        );
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    //  pegPositionsRight() {
    //     let peg_pos = [[480, 920]];
    //         while (peg_pos.length < 7) {
    //             let last = peg_pos.length - 1
    //             peg_pos.push([peg_pos[last][0], peg_pos[last][1] -= 140])
    //         }
    //         return peg_pos
    // }
    //  pegPositionsLeft() {
    //     let peg_pos = [[380, 840]];
    //         while (peg_pos.length < 6) {
    //             let last = peg_pos.length - 1
    //             peg_pos.push([peg_pos[last][0], peg_pos[last][1] -= 140])
    //         }
    //         return peg_pos
    // }

    handleCollisions(climber) {

        if ((climber.x) < this.x + this.width - 5 &&
            (climber.x) + (climber.width - 12) > this.x &&
            (climber.y) < this.y + this.height - 25 &&
            (climber.y) + (climber.height) > this.y + 10) { //bottom
             climber.y_velocity = -1;
             climber.jumping = false;
        }

    }

    // populateRightPegs() {
    //     let pegs = [];
    //     let temp;
    //     for (let i = 0; i < 7; i++) {
    //         temp = "peg" + i;
    //         let pos = this.pegPositionsRight();
    //         pos.forEach((pos) =>
    //            pegs.push(temp = new Peg(pos[0], pos[1])      
    //             )
    //         );
         
    //     }       
    //     return pegs;
    // }

}