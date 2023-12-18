let level1;

function initLevel() {
  level1 = new Level(
    creatBackgrounds(),
    creatEnemies(),

    creatPoisons(),
    creatCoins(),
    creatBubbles()
  );

  function creatBackgrounds() {
    return [
      new BackgroundObject("img/3.Background/Layers/5.Water/D2.png", -720),
      new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D2.png", -720),
      new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D2.png", -720),
      new BackgroundObject("img/3.Background/Layers/2.Floor/D2.png", -720),

      new BackgroundObject("img/3.Background/Layers/5.Water/D1.png", 0),
      new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D1.png", 0),
      new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D1.png", 0),
      new BackgroundObject("img/3.Background/Layers/2.Floor/D1.png", 0),
      new BackgroundObject("img/3.Background/Layers/5.Water/D2.png", 720),
      new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D2.png", 720),
      new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D2.png", 720),
      new BackgroundObject("img/3.Background/Layers/2.Floor/D2.png", 720),

      new BackgroundObject("img/3.Background/Layers/5.Water/D1.png", 720 * 2),
      new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D1.png", 720 * 2),
      new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D1.png", 720 * 2),
      new BackgroundObject("img/3.Background/Layers/2.Floor/D1.png", 720 * 2),
      new BackgroundObject("img/3.Background/Layers/5.Water/D2.png", 720 * 3),
      new BackgroundObject("img/3.Background/Layers/4.Fondo 2/D2.png", 720 * 3),
      new BackgroundObject("img/3.Background/Layers/3.Fondo 1/D2.png", 720 * 3),
      new BackgroundObject("img/3.Background/Layers/2.Floor/D2.png", 720 * 3),
    ];
  }

  function creatEnemies() {
    return [
      new Jellyfish(450),
      new Jellyfish(520),
      new Jellyfish(1280),
      new Jellyfish(920),
      new Jellyfish(2600),
      new Jellyfish(2020),
      new Pufferfish(),
      new Pufferfish(),
      new Pufferfish(),
      new Pufferfish(),
      new Pufferfish(),
      new Pufferfish(),
      new Pufferfish(),
      new Pufferfish(),
    ];
  }

  function creatPoisons() {
    return [new Poison(150, 150), new Poison(280, 350), new Poison(280, 350), new Poison(580, 250), new Poison(780, 400)];
  }
  function creatCoins() {
    return [new Coin(250, 150), new Coin(380, 350), new Coin(820, 250),new Coin(950, 150),new Coin(1250, 430),new Coin(650, 280), new Coin(1580, 380), new Coin(1800, 70),new Coin(1220, 180),new Coin(1220, 280)];
  }
  function creatBubbles() {
    return [new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble(), new Bubble()];
  }
}
