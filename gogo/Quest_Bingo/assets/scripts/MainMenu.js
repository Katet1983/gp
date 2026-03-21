import { CONSTATNTS, SCENES, FONT_STYLES } from "./Constants.js";
import logAnalytics from "./firebase.js";
import GameController from "./gamePlay/GameController.js";
/**
 * This scene is responsible for creating the main menu UI and
 * other lobby related things if any
 */
export default class MainMenu extends Phaser.Scene {
  constructor() {
    super(SCENES.MAIN_MENU);
  }

  preload() {
    this.width = this.game.screenBaseSize.width;
    this.height = this.game.screenBaseSize.height;

    let bootScene = this.scene.get(SCENES.BOOT);

    bootScene.setLayoutSize(this);
    GameController.Instance = null;
  }

  create() {
    if (CONSTATNTS.IS_SANDBOX) {
      // Border for base resolution. Remove in production
      this.add.image(this.width / 2, this.height / 2, "guide");
    }
    let startGameBg = this.add.image(this.width/2,this.height/2,"startGameBg");
    // let gamelogo = this.add.sprite(this.width/2,this.height/3.5,'startAndContinueUI','start_logo.png');
    let gamelogo = this.add.image(this.width/2,this.height/3.5, 'gameLogo');
    let startImage = this.add.sprite(this.width / 2, this.height / 1.25, 'startAndContinueUI','start_button_01.png');
    startImage.setInteractive();
    let startText = this.add.text(startImage.x,
      startImage.y-10,
      "START",
      {
        fontFamily: FONT_STYLES.FONT_FAMILY_EXTRA_BOLD,
        fontSize: FONT_STYLES.FS36,
        align: FONT_STYLES.ALIGN_CENTER,
        color: "#ffffff"
      }
    ).setOrigin(0.5);
    startImage.on('pointerdown', function (pointer) //taping Hint Button
    {
      startImage.setFrame("start_button_02.png");
    }, this);
    startImage.on('pointerup', function (pointer) //taping Hint Button
    {
      startImage.disableInteractive();
      startImage.setFrame("start_button_03.png");
      this.logAnalyticEvent("start_onclick", {});
      this.scene.start(SCENES.GAMEPLAY);
    }, this);

  }

  logAnalyticEvent(name, params) {
    console.log("EventName, Parameter: ", name, ",", params);
    // window.parent.postMessage({
    //   type: 'logEvent',
    //   log: { "name": name, "params": params }

    // }, '*');
    logAnalytics(name, params);
  }

}