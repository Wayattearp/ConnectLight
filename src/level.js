// import Background from "./background";
// import Bird from "./bird";
// import Controller from './controller';
// import Climber from "./climber";

// export default class Level {
//     constructor(context) {
//         this.context = context;
//         this.climber = new Climber;
//         this.controller = new Controller;
//         let bird1 = new Bird;
//         let bird2 = new Bird;
//         let bird3 = new Bird;
//     }
//     loop = function () {
//         climber.handleMoves();
//         climber.y_velocity += 1.5;// gravity
//         climber.x += climber.x_velocity;
//         climber.y += climber.y_velocity;
//         climber.x_velocity *= 0.9;// friction
//         climber.y_velocity *= 0.9;// friction
//         bird1.x += 0.75;
//         bird2.y += 1, bird2.x += 3;
//         bird3.y += 2, bird3.x += 0.25;

//         if ((climber.x + 30) < bird3.x + bird3.width &&
//             (climber.x + 30) + (climber.width - 60) > bird3.x &&
//             (climber.y + 30) < bird3.y + bird3.height &&
//             (climber.y + 30) + (climber.height + 30) > bird3.y) {
//             alert("GAME OVER");
//         }


//         let background = new Background;
//         background.drawBackground(context);
//         bird1.drawBird(context);
//         bird3.drawBird(context);
//         background.drawTower(context);
//         bird2.drawBird(context);
//         climber.drawClimber(context);
//         window.requestAnimationFrame(loop);

//     };


    
// }
// window.requestAnimationFrame(loop);
// document.addEventListener("keydown", controller.keyListener);
// document.addEventListener("keyup", controller.keyListener);