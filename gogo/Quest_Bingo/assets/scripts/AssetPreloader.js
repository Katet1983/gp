import { CONSTATNTS, SCENES } from "./Constants.js";
var canStartGame = false;
var tournamentId = null;


/**
 * This scene is responsible for preloading for the assets required in the
 * main menu and gameplay
 */
export default class AssetPreloader extends Phaser.Scene {
  constructor() {
    super(SCENES.ASSET_PRELOADER);
  }

  preload() {
    this.width = this.game.screenBaseSize.width;
    this.height = this.game.screenBaseSize.height;

    let bootScene = this.scene.get(SCENES.BOOT);
    bootScene.setLayoutSize(this);

    let assetInfo = this.cache.json.get("assetsInfo");

    //It will load all images from assets info.
    assetInfo.images.forEach((element) => {
      this.load.image(element.key, element.path);
    });
    //Will be adding audio files here.
    assetInfo.audio.forEach((element) => {
      this.load.audio(element.key, element.path);
    });

    //it will get the assets of atlas from cache.
    assetInfo.atlas.forEach((element) => {
      this.load.atlas(
        element.key,
        element.path + ".png",
        element.path + ".json"
      );
    });
    this.load.on("progress", function (progress) {
      // progress is a value between 0 and 1
      let percentage = progress;
      // Set here the label with the precentage

      window.parent.postMessage(
        {
          type: "progress",
          progress: percentage,
        },
        "*"
      );

      // console.log("progress", percentage);
    });

   // this.load.plugin('rexxorplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexxorplugin.min.js', true);

  }

  create() {
    if (CONSTATNTS.IS_SANDBOX) {
      // Border for base resolution. Remove in production
      this.add.image(this.width / 2, this.height / 2, "guide");
    }
    if (CONSTATNTS.IS_SANDBOX) {
      this.scene.start(SCENES.SOUND_MANAGER);
      this.scene.start(SCENES.MAIN_MENU);
    }

    window.addEventListener("message", function (event) {
      canStartGame = true;
      tournamentId = event.data;

      console.log("Message received from the parent: " + event.data); // Message received from parent
    });
  }
  update() {
    if (canStartGame) {
      canStartGame = false;
      this.scene.start(SCENES.SOUND_MANAGER);
      this.scene.start(SCENES.MAIN_MENU);
      this.game.tournamentId = tournamentId;
    }
  }
}
