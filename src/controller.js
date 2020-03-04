
export default class Controller {
    constructor() {      
        this.left = false,
        this.right = false,
        this.up = false
    }

    keyListener(event) {

        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 37:// left key
                Controller.left = key_state;
                break;
            case 32:// space key
                Controller.up = key_state;
                break;
            case 39:// right key
                Controller.right = key_state;
                break;

        }

    };


}



