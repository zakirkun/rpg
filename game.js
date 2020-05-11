const config = {

    type: Phaser.AUTO,
    backgroundColor: "ffffff",
    width: 700,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            enableBody: true,
            debug: false
        }
    },
    scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);