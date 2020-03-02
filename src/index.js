import "./styles/index.scss";
import Climber from "./climber";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let climber = new Climber(GAME_WIDTH, GAME_HEIGHT);

climber.draw(ctx);

// let lastTime = 0;


// function gameLoop(timestamp) {
//     let deltaTime = timestamp - lastTime;
//     lastTime = timestamp;

//     ctx.clearRect(0, 0, 800, 600);
//     climber.update(deltaTime);
//     climber.draw(ctx);

//     requestAnimationFrame(gameLoop);
//     // climber.update();
// }

// gameLoop();
