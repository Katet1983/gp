import Boot from "./Boot.js";
import MainMenu from "./MainMenu.js";
import AssetPreloader from "./AssetPreloader.js";
import Gameplay from "./Gameplay.js";
import SoundManager from "./SoundManager.js";
import { CONSTATNTS } from "./Constants.js";

// Aspect Ratio 16:9 - Portrait
const MAX_SIZE_WIDTH_SCREEN = 1080;
const MAX_SIZE_HEIGHT_SCREEN = 1920;
const MIN_SIZE_WIDTH_SCREEN = 270;
const MIN_SIZE_HEIGHT_SCREEN = 480;
const SIZE_WIDTH_SCREEN = 540;
const SIZE_HEIGHT_SCREEN = 960;

const config = {
  type: Phaser.AUTO,
  backgroundColor: "0x593DD8",
  autoCenter: 1,
  scale: {
    mode: 3,
    parent: "game",
    width: SIZE_WIDTH_SCREEN,
    height: SIZE_HEIGHT_SCREEN,
    max: {
      width: MAX_SIZE_WIDTH_SCREEN,
      height: MAX_SIZE_HEIGHT_SCREEN,
    },
  },

  scene: [Boot, AssetPreloader, SoundManager, MainMenu, Gameplay],
};
const game = new Phaser.Game(config);
game.location = window.location.href;

var strUrl;
if (CONSTATNTS.IS_SANDBOX) {
strUrl = "/?userId=5844723390&matchId=be62a4c1-40ab-4bb7-aa70-e786880e7338&chatId=BQAAAL5mX1wBAAAAeCQAAGVAAFPITCzp";
}
else{
strUrl  = window.location.href;  //"/?userId=5844723390&matchId=be62a4c1-40ab-4bb7-aa70-e786880e7338&chatId=BQAAAL5mX1wBAAAAeCQAAGVAAFPITCzp" // window.location.href; //"/?userId=5844723390&matchId=be62a4c1-40ab-4bb7-aa70-e786880e7338&chatId=BQAAAL5mX1wBAAAAeCQAAGVAAFPITCzp"; // window.location.search;
}

  var getSearch = strUrl.split("?");
  var getPara = getSearch[1].split("&");

  if (getPara.length > 2) {
    game.gameId = "646c5459490e3bbf30056510";
   game.userId = getPara[0].split("=")[1];
   game.matchId = getPara[1].split("=")[1];
   game.chatId = getPara[2].split("=")[1];
   game.firstName = "";
  }
game.screenBaseSize = {
  maxWidth: MAX_SIZE_WIDTH_SCREEN,
  maxHeight: MAX_SIZE_HEIGHT_SCREEN,
  minWidth: MIN_SIZE_WIDTH_SCREEN,
  minHeight: MIN_SIZE_HEIGHT_SCREEN,
  width: SIZE_WIDTH_SCREEN,
  height: SIZE_HEIGHT_SCREEN,
};
