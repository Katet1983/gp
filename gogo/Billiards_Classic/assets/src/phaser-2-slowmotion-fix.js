(function (phaserGameInstance) {

  if (typeof Phaser === 'undefined') {
    return console.error('It seems to be not a Phaser game, huh?');
  }

  const phaserMajorVersion = +Phaser.VERSION.split('.')[0];
  const phaserMinorVersion = +Phaser.VERSION.split('.')[1];

  if (phaserMajorVersion !== 2) {
    return console.error('This game is either too new or too old, the snippet only works with Phaser 2 / Phaser CE');
  }

  if (phaserMinorVersion >= 17) {
    return console.error('Phaser version is new enough, no need to patch it');
  }


  if (!phaserGameInstance) {
    if (typeof game !== 'undefined' && game instanceof Phaser.Game) {
      phaserGameInstance = game;
    } else {
      return console.error('please provide a Phaser game instance as a parameter!');
    }
  }


  let currentDeltaTime = 0.0167;
  let averageFrameTime = currentDeltaTime;
  let lastMeasuredDOMTime = undefined;
  const smoothingFactor = 0.02; /* 0 .. 1 */

  /* linear interpolation helper */
  const lerp = (start, end, t) => start + t * (end - start);

  /* measure actual page FPS */
  const ticker = () => {
    requestAnimationFrame(time => {
      if (!lastMeasuredDOMTime) lastMeasuredDOMTime = time;
      else {
        currentDeltaTime = time - lastMeasuredDOMTime;
        lastMeasuredDOMTime = time;
        averageFrameTime = lerp(averageFrameTime, currentDeltaTime, smoothingFactor);
      }
      ticker();
    });
  }

  //start measurements here
  ticker();

  //adjust game FPS value in realtime
  setInterval(() => {
    const actualFps = (1000 / averageFrameTime) || 60;
    phaserGameInstance.time.desiredFps = Math.max(60, actualFps);
  }, 500);

  famobi.log('[FIX] Phaser 2 / Phaser CE slowmotion fix has been applied');

})();

/* Place this snippet AFTER game code script
*
*  Do not forget to pass the Phaser.Game instance as an argument into the closure above. 
*  The code automatically looks for window.game (this is the variable name that most of developers use) and checks if it's present. 
*  If the game instance named differently, just pass it into the closure, e.g.  ...})(customGameInstanceName);
* 
*  If the game instance variable in not exposed globally, there are 2 ways:
*    1. go into the game code and expose the variable by looking for the `new Phaser.Game(...)` and assigning it to window.game for example.
*    2. easier (but a bit risky) way is to update phaser.js to the latest version, or at least >= 2.17.0 
*/