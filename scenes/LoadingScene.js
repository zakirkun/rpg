class LoadingScene extends Phaser.Scene {

    constructor() {
        super("Loading");
    }

    init() {

    }

    preload() {

        //loads all spritesheets
        this.load.spritesheet('player', 'sprites/player_body.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('skeleton', 'sprites/skeleton_body.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('skeletonArmor', 'sprites/skeleton_armor_body.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('skeletonHat', 'sprites/skeleton_hat_body.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('playerHurt', 'sprites/player_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('skeletonCast', 'sprites/skeleton_cast.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('fireball', 'sprites/fireball.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shuriken', 'sprites/throwingstars.png', {frameWidth: 12, frameHeight: 12});
        this.load.spritesheet('hearts', 'sprites/hearts.png', {frameWidth: 121, frameHeight: 38});
        this.load.spritesheet('extraHeart', 'sprites/extra_heart.png', {frameWidth: 41, frameHeight: 38});

        //loadsSingleImages
        this.load.image('singleHeart', 'sprites/single_heart.png');
        this.load.image('dialog', 'images/dialog_box.png');

        //loads tilemap
        this.load.image('terrain', 'maps/assets/overworld.png');
        this.load.tilemapTiledJSON('startingMap', 'maps/starting_map.json');

        //loads tilemap (for first level)
        this.load.tilemapTiledJSON('firstLevel', 'maps/level1.json')
        //loads tilemap (for second level)
        this.load.tilemapTiledJSON('secondLevel', 'maps/level2.json');
        //loads tilemap (for third level)
        this.load.tilemapTiledJSON('thirdLevel', 'maps/level3.json');
        //loads tilemap (for fourth level)
        this.load.tilemapTiledJSON('fourthLevel', 'maps/level4.json');

        //loads tilemap (for endlessmode)
        this.load.tilemapTiledJSON('endlessMap', 'maps/endless.json');

        //loads player with shoes (for second level)
        this.load.spritesheet('playerShoes', 'sprites/player_shoes.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('playerShoesHurt', 'sprites/player_hurt_shoes.png', {frameWidth: 64, frameHeight: 64});

        //loads player with shoes and pants (for third level)
        this.load.spritesheet('playerShoesPants', 'sprites/player_shoes_pants.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('playerShoesPantsHurt', 'sprites/player_hurt_shoes_pants.png', {frameWidth: 64, frameHeight: 64});

        //loads player with clothes (for fourth level)
        this.load.spritesheet('playerClothes', 'sprites/player_clothes.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('playerClothesHurt', 'sprites/player_hurt_clothes.png', {frameWidth: 64, frameHeight: 64});

        //loads menu images
        this.load.image('titleScreen', 'images/title_screen.png');
        this.load.image('playButton', 'images/play_button.png');
        this.load.image('creditsButton', 'images/credits_button.png');
        this.load.image('levelButton', 'images/level_button.png');
        this.load.image('endlessButton', 'images/try_endless.png');

        //loads level selection images and text
        this.load.image('levelSelection', 'images/level_selection.png');
        this.load.image('tutorialScreenFrame', 'screens/tutorial_screenshot_rahmen.png');
        this.load.image('levelOneScreenFrame', 'screens/level_one_screenshot_rahmen.png');
        this.load.image('levelTwoScreenFrame', 'screens/level_two_screenshot_rahmen.png');
        this.load.image('levelThreeScreenFrame', 'screens/level_three_screenshot_rahmen.png');
        this.load.image('levelFourScreenFrame', 'screens/level_four_screenshot_rahmen.png');
        this.load.image('tutorialText', 'screens/tutorial_text.png');
        this.load.image('level1Text', 'screens/level1_text.png');
        this.load.image('level2Text', 'screens/level2_text.png');
        this.load.image('level3Text', 'screens/level3_text.png');
        this.load.image('level4Text', 'screens/level4_text.png');

        //loads items for endless mode
        this.load.image('blueChest', 'items/ChestBlue.png');
        this.load.image('yellowChest', 'items/ChestYellow.png');
        this.load.image('redChest', 'items/ChestRed.png');
        this.load.image('greenChest', 'items/ChestGreen.png');
        this.load.image('coin', 'items/Coin.png');
        this.load.image('gem', 'items/Gem.png');

        //loads clothes for endless mode
        this.load.spritesheet('helmetArmor', 'sprites/clothes/walk/helmet_armor.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('helmetHood', 'sprites/clothes/walk/helmet_hood.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('pantsArmor', 'sprites/clothes/walk/pants_armor.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('pantsGreen', 'sprites/clothes/walk/pants_green.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shield', 'sprites/clothes/walk/shield.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shirtArmor', 'sprites/clothes/walk/shirt_armor.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shirtWhite', 'sprites/clothes/walk/shirt_white.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shoesArmor', 'sprites/clothes/walk/shoes_armor.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shoesBrown', 'sprites/clothes/walk/shoes_brown.png', {frameWidth: 64, frameHeight: 64});

        this.load.spritesheet('helmetArmorHurt', 'sprites/clothes/hurt/helmet_armor_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('helmetHoodHurt', 'sprites/clothes/hurt/helmet_hood_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('pantsArmorHurt', 'sprites/clothes/hurt/pants_armor_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('pantsGreenHurt', 'sprites/clothes/hurt/pants_green_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shirtArmorHurt', 'sprites/clothes/hurt/shirt_armor_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shirtWhiteHurt', 'sprites/clothes/hurt/shirt_white_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shoesArmorHurt', 'sprites/clothes/hurt/shoes_armor_hurt.png', {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet('shoesBrownHurt', 'sprites/clothes/hurt/shoes_brown_hurt.png', {frameWidth: 64, frameHeight: 64});

        //loads pause menu
        this.load.image('pauseMenu', 'images/pause_menu.png');

        //loads back button
        this.load.image('backButton', 'images/back_button.png');

        //creates loading bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        });
        for (let i = 0;i < 100;i++) {
            this.load.spritesheet("cat" + i, "sprites/player_body.png", {frameWidth: 64, frameHeight: 64})
        }
        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0, 250, 700 * percent, 25);
            console.log(percent);
        });
                

    }

    create() {

        this.scene.start('Menu');

    }

    update () {

    }

}