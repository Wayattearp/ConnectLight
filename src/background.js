export default class Background {
    constructor() {

    }

    drawBackground(context) {
        const background = new Image();
        background.src = "./src/images/background.png";
        context.drawImage(background, 0, 0, 1100, 1000);
    }
}