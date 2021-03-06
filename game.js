const config = {

    type: Phaser.AUTO,
    backgroundColor: "000000",
    width: 700,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            enableBody: true,
            debug: false
        }
    },
    scene: [LoadingScene, MenuScene, LevelSelection, TutorialScene, Scene1, Scene2, Scene3, Scene4],
};

const game = new Phaser.Game(config);