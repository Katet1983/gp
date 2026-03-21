import { CONSTATNTS, SCENES } from "./Constants.js";

/**
 * This scene is responsible for preloading the asstes
 * required for showing the loading screen and also
 * preloading the configurable data if any
 */
export default class Boot extends Phaser.Scene {
  constructor() {
    super(SCENES.BOOT);
  }

  preload() {
    this.width = this.game.screenBaseSize.width;
    this.height = this.game.screenBaseSize.height;

    this.load.image("guide", "./assets/art/border.png");
    this.load.json("assetsInfo", "./assets/data/assetsInfo.json");
    this.load.plugin(
      "rexcircularprogressplugin",
      "lib/plugins/progressCircle.min.js",
      true
    );
    this.load.plugin(
      "rexlineprogressplugin",
      "lib/plugins/progressLine.min.js",
      true
    );
  }

  /**
   *  Set the screen layout based on width and height
   * @param {*} scene
   */
  setLayoutSize(scene) {
    return;
    let scaleWidth = scene.scale.gameSize.width;
    let scaleHeight = scene.scale.gameSize.height;

    scene.parent = new Phaser.Structs.Size(scaleWidth, scaleHeight);
    scene.sizer = new Phaser.Structs.Size(
      scene.width,
      scene.height,
      Phaser.Structs.Size.FIT,
      scene.parent
    );

    scene.parent.setSize(scaleWidth, scaleHeight);
    scene.sizer.setSize(scaleWidth, scaleHeight);

    this.updateCamera(scene);
  }

  /**
   * Updates the camera settings
   * @param {*} scene
   */
  updateCamera(scene) {
    return;
    let camera = scene.cameras.main;
    let scaleX = scene.sizer.width / this.game.screenBaseSize.width;
    let scaleY = scene.sizer.height / this.game.screenBaseSize.height;

    camera.setZoom(Math.max(scaleX, scaleY));
    camera.centerOn(
      this.game.screenBaseSize.width / 2,
      this.game.screenBaseSize.height / 2
    );
  }

  /**
   * Get the offset height for placing the objects in canvas
   * @param {*} scene
   * @returns
   */
  getOffsetHeight(scene) {
    if (scene.sizer.height > window.innerHeight) {
      return 0;
    }
    const scaleX = scene.sizer.width / this.game.screenBaseSize.width;
    const scaleY = scene.sizer.height / this.game.screenBaseSize.height;
    return (
      (window.innerHeight - scene.sizer.height) / 2 / Math.max(scaleX, scaleY)
    );
  }

  /**
   * Get the offset width for placing the objects in canvas
   * @param {*} scene
   * @returns
   */
  getOffsetWidth(scene) {
    if (scene.sizer.width > window.innerWidth) {
      return 0;
    }
    const scaleX = scene.sizer.width / this.game.screenBaseSize.width;
    const scaleY = scene.sizer.height / this.game.screenBaseSize.height;
    return (
      (window.innerWidth - scene.sizer.width) / 2 / Math.max(scaleX, scaleY)
    );
  }

  create() {
    this.setLayoutSize(this);
    if (CONSTATNTS.IS_SANDBOX) {
      // Border for base resolution. Remove in production
      this.add.image(this.width / 2, this.height / 2, "guide");
    }

    this.scene.start(SCENES.ASSET_PRELOADER);
    GameSnacks.game.firstFrameReady();
    GameSnacks.game.ready();
    console.log("GameSnacks", "Game Ready");
  }
}
