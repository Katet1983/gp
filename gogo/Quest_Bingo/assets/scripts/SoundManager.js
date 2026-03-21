import { SCENES, SFX_IDS, SFX_KEYS, BALL_SFX_IDS, BALL_SFX_KEYS } from "./Constants.js";

/**
 * sceneScope refers this particular scene instance.
 */
let sceneScope = null;

export default class SoundManager extends Phaser.Scene {
  /**
   * Default volume of all musics.
   */
  defaultVolume;
  /**
   * Background music
   */
  bgMusic;

  /**
   * All Game related SFX will be added in this list.
   */
  gameSFXList = [];

  /**
   * All ball number sfx will be added in to this list
   */
  ballsSfxList = [];

  onFocus = true;
  isMasterSFXMuted = false;

  /**
   * Internal effects are muted status
   */
  isEffectsMuted = false;
  constructor() {
    super(SCENES.SOUND_MANAGER);
    sceneScope = this;
    this.defaultVolume = 1;
    this.isMasterSFXMuted = false;
    this.onFocus = true;
  }

  /**
   * Resumes audio context and plays background music
   */
  resumeAudioContext() {
    let context = this.game.sound.context;
    if (context.state === 'suspended') {
      context.resume().then(() => {
        if (GameSnacks.audio.isEnabled()) {
          if(this.bgMusic){
            this.bgMusic.play();
          }
          this.isMasterSFXMuted = false;
          this.isEffectsMuted = false;
          this.onFocus = true;
        }
      });
    } else if (GameSnacks.audio.isEnabled()) {
      if(this.bgMusic){
        this.bgMusic.play();
      }
      this.isMasterSFXMuted = false;
      this.isEffectsMuted = false;
      this.onFocus = true;
    }
  }

  preload() {}

  create() {
    this.addSoundEffectsInGame();
    if (this.cache.audio.get("backGroundMusic")) {
      this.bgMusic = this.sound.add("backGroundMusic", {
        loop: true,
        volume: this.defaultVolume,
      });

      if (GameSnacks.audio.isEnabled()) {
        this.resumeAudioContext();
      } else {
        this.isMasterSFXMuted = true;
        this.onFocus = false;
      }
    }

    GameSnacks.audio.subscribe((isEnabled) => {
      if (isEnabled) {
        sceneScope.resumeAudioContext();
      } else {
        if (sceneScope.bgMusic) {
          sceneScope.bgMusic.stop();
        }
        sceneScope.isMasterSFXMuted = true;
        sceneScope.onFocus = false;
      }
    });

    window.addEventListener('focus', () => this.onResume());
    window.addEventListener('blur', () => this.onPause());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.onPause();
      } else {
        this.onResume();
      }
    });

    this.game.events.addListener(Phaser.Core.Events.FOCUS, this.onResume, this);
    this.game.events.addListener(Phaser.Core.Events.BLUR, this.onPause, this);
  }

  onResume() {
    this.onFocus = true;
    if (GameSnacks.audio.isEnabled()) {
      this.resumeAudioContext();
    }
  }

  onPause() {
    this.onFocus = false;
  }

  /**
   * It will add all sounds/ SFX in the game.
   */
  addSoundEffectsInGame() {
    // Initialize arrays if not already initialized
    this.gameSFXList = this.gameSFXList || [];
    this.ballsSfxList = this.ballsSfxList || [];

    Object.keys(SFX_KEYS).forEach((key) => {
      if (!this.cache.audio.get(key)) {
        try {
          let sound = this.sound.add(SFX_KEYS[key]);
          this.gameSFXList.push(sound);
        } catch (error) {
          console.error(`Error adding game SFX ${key}:`, error);
        }
      }
    });
    
    Object.keys(BALL_SFX_KEYS).forEach((key) => {
      if (!this.cache.audio.get(key)) {
        try {
          let sound = this.sound.add(BALL_SFX_KEYS[key]);
          this.ballsSfxList.push(sound);
        } catch (error) {
          console.error(`Error adding ball SFX ${key}:`, error);
        }
      }
    });
  }

  /**
   * to mute sound volume.
   */
  muteVolume(mute) {
    Object.keys(SFX_IDS).forEach((key) => {
      this.gameSFXList[SFX_IDS[key]].mute = mute;
    });
  }

  /**
   * to set sound volume.
   */
  setVoulume(volume) {
    this.bgMusic.setVolume(volume);
    Object.keys(SFX_IDS).forEach((key) => {
      this.gameSFXList[SFX_IDS[key]].volume = volume;
    });
  }

  /**
   * Play SFX which was needed by passing id & to loop it or not.
   * @param id
   * @param loop
   */
  playSfx(id, loop, key) {
    if (!sceneScope.isMasterSFXMuted && !this.isEffectsMuted && this.onFocus) {
      if (this.cache.audio.get(key)) {
        try {
          if (this.gameSFXList[id]) {
            // Stop if already playing to prevent overlapping
            if (this.gameSFXList[id].isPlaying) {
              this.gameSFXList[id].stop();
            }
            this.gameSFXList[id].play({ loop: loop });
          }
        } catch (error) {
          console.error(`Error playing SFX ${key}:`, error);
        }
      }
    }
  }

  /**
   * playing the sfx of ball number
   * @param {id} id 
   * @param {key} key 
   */
  playBallSfx(id, key) {
    if (!sceneScope.isMasterSFXMuted && !this.isEffectsMuted && this.onFocus) {
      if (this.cache.audio.get(key)) {
        try {
          if (this.ballsSfxList[id]) {
            // Stop if already playing to prevent overlapping
            if (this.ballsSfxList[id].isPlaying) {
              this.ballsSfxList[id].stop();
            }
            this.ballsSfxList[id].play();
          }
        } catch (error) {
          console.error(`Error playing ball SFX ${key}:`, error);
        }
      }
    }
  }

  /**
   * Will stop playing sfx when not needed.
   * @param id
   */
  stopSfx(id, key) {
    if (this.cache.audio.get(key)) {
      this.gameSFXList[id].stop();
    }
  }
}
