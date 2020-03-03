export default class Background {
    constructor() {

    }

    drawBackground(context) {
        const background = new Image();
        background.src = "./src/images/background.png";
        context.drawImage(background, 0, 0, 1100, 1000);
    }

    drawTower(context) {
        const tower = new Image();
        tower.src = "./src/images/tower.png";
        const column = new Image();
        column.src = "./src/images/Column.png";
        context.drawImage(column, 358, -50, 200, 950)
        const tower_base = new Image();
        tower_base.src = "./src/images/tower_base.png";
        context.drawImage(tower, 385, -35)
        const tower_peg = new Image();
        tower_peg.src = "./src/images/right_peg.png";
        context.drawImage(tower_peg, 480, 720)
        const rock = new Image();
        rock.src = "./src/images/rock.png";
        context.drawImage(rock, 360, 805, 90, 90)
    }
}