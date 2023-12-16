class Keyboard {
  LEFT = false;
  RIGHT = false;
  SPACE = false;
  UP = false;
  DOWN = false;
  E = false;
  D = false;

  constructor() {
    this.bindKeyPressEvents();
    this.bindBtsPressEvents();
  }

  bindKeyPressEvents() {
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowLeft") {
        keyboard.LEFT = true;
      }
      if (e.key == "ArrowUp") {
        keyboard.UP = true;
      }
      if (e.key == "ArrowRight") {
        keyboard.RIGHT = true;
      }
      if (e.key == "ArrowDown") {
        keyboard.DOWN = true;
      }
      if (e.key == " ") {
        keyboard.SPACE = true;
      }
      if (e.key == "e") {
        keyboard.E = true;
      }
      if (e.key == "d") {
        keyboard.D = true;
      }
    });


    document.addEventListener("keyup", (e) => {
        if (e.key == "ArrowLeft") {
          keyboard.LEFT = false;
        }
        if (e.key == "ArrowUp") {
          keyboard.UP = false;
        }
        if (e.key == "ArrowRight") {
          keyboard.RIGHT = false;
        }
        if (e.key == "ArrowDown") {
          keyboard.DOWN = false;
        }
        if (e.key == " ") {
          keyboard.SPACE = false;
        }
        if (e.key == "e") {
          keyboard.E = false;
        }
        if (e.key == "d") {
          keyboard.D = false;
        }
      });
  }


  bindBtsPressEvents() {
    setTimeout(() => {
        document.getElementById('arrow-btn-mid-left').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.LEFT = true;
        });

        document.getElementById('arrow-btn-mid-left').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.LEFT = false;
        });
        document.getElementById('arrow-btn-mid-right').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.RIGHT = true;
        });
        document.getElementById('arrow-btn-mid-right').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.RIGHT = false;
        });
        document.getElementById('arrow-btn-top').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.UP = true;
        });
        document.getElementById('arrow-btn-top').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.UP = false;
        });
        document.getElementById('arrow-btn-bottom').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.DOWN = true;
        });
        document.getElementById('arrow-btn-bottom').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.DOWN = false;
        });
        document.getElementById('btn-bubble').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.SPACE = true;
        });
        document.getElementById('btn-bubble').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.SPACE = false;
        });
        document.getElementById('btn-slap').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.D = true;
        });
        document.getElementById('btn-slap').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.D = false;
        });
    }, 500)
}

}
