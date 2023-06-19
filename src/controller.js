export default class Controller {
    constructor() {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    keyListener(event) {
        var keyState = (event.type === "keydown");

        switch (event.keyCode) {
            case 37: // Left key
                event.preventDefault(); // Prevent default behavior of scrolling when pressing arrow left
                this.left = keyState;
                break;
            case 38: // Arrow up key
                event.preventDefault(); // Prevent default behavior of scrolling when pressing arrow up
                this.up = keyState;
                break;
            case 39: // Right key
                event.preventDefault(); // Prevent default behavior of scrolling when pressing arrow right
                this.right = keyState;
                break;
            case 40: // Arrow down key
                event.preventDefault(); // Prevent default behavior of scrolling when pressing arrow down
                this.down = keyState;
                break;
            case 32: // Space key
                this.up = keyState;
                break;
        }
    }
}
