export const SCENES = {
  BOOT: "Boot",
  ASSET_PRELOADER: "AssetPreloader",
  MAIN_MENU: "MainMenu",
  GAMEPLAY: "Gameplay",
  SOUND_MANAGER: "SoundManager",
};

export const CONSTATNTS = {
  IS_SANDBOX: true,
  GAMETIMER: 120, // Game Time
  BALL_TIMER: 3000, // Ball Time for each generated ball
  GAME_TIMER_WARNING: 30, // timer warning for 30 sec
  GAME_LAST_TEN_SEC: 10, // timer warning for 10 sec
  BALL_PRIORITY: 50, //(50%) // how much percentage of balls should generate during whole game
  PERFECT_DAUB_TIMER: 1500, // Timer in sec for perfect duab
  GOOD_DAUB_TIMER: 2500, // timer in sec for good duab
  TOTAL_ELEMENT_IN_ROW: 5, // blocks in row in each ticket
  GAPBETWEENBINGO: 7, // Gap Between the blocks
  POWERUPTIMER: 8,
  TWOXPOWERUPTIMER: 10,
  MAX_BALL_COUNT: 4,
  GOLDEN_BALL_TIMER: 8,
  MAX_POWER_UPS: 3,
  BINGO_TIMER_VALUE :2900,
  GAP_BETWEEN_BALL : 96,
  FIRST_BALL_GAP :122,
  MIN_BINGO_NO : 1,
  MAX_BINGO_NO : 76,
 
};
/**
 * Setting object depths
 */
export const OBJECT_DEPTHS = {
  CIRCULAR_PROGRESS_DEPTH: 10,
};
/**
 * Score type for duabing
 */
export const SCORE_TYPE = {
  NONE: 0,
  CORRECT_DAUB: 1,
  PERFECT_DAUB: 2,
  GOOD_DAUB: 3,
  INCORRECT_DAUB: 9,
 
};
/**
 * BINGO TYPE FOR pattern identification
 */
export const BINGO_TYPE = {
  ROW_BINGO: 0,
  COLUMN_BINGO: 1,
  DIAGONAL_BINGO: 2,
  FOUR_CORNER: 3,
};
/**
 * individual score for each duab
 */
export const DUABSCORE = {
  PerfectDaub: 250,
  GoodDaub: 125,
  CorrectDaub: 100,
  IncorrectDaub: -100,
  FULL_HOUSE: 10000,
};
/**
 * Bingo score
 */
export const BINGO_SCORE = {
  BingoScore: 400,
  ComboScore: 500,
  FullHouse: 1000,
};

/** Bingo Ticket Block status*/
export const TICKET = {
  INITAIL: 0,
  CORRECTDAUB: 1,
  VALIDBINGO: 2,
  INCORRECT: 3,
};

/** Daub percentage*/
export const PERCENT_DAUB = {
  PerfectDaub: 0.2,
  GoodDaub: 0.15,
  CorrectDaub: 0.125,
  IncorrectDaub: -0.4,
  // PerfectDaub: 0.4,
  // GoodDaub: 0.3,
  // CorrectDaub: 0.25,
  // IncorrectDaub: -0.2,
};

/**generating the powerUps */
export const POWER_UPS = {
  STAR_POWER_UP: 0,
  GOLDEN_BALL: 1,
  POWER_2X: 2,
  FREE_2DAUBS: 3,
  FREE_3DAUBS: 4,
  BONUS_TIME: 5,
};

/**
 * font styles used in game
 */
export const FONT_STYLES = {
  //Text alignments
  ALIGN_CENTER: "center",
  ALIGN_LEFT: "left",
  ALIGN_RIGHT: "right",

  //Different colors.
  BLACK_COLOR: 0x232f3e,
  WHITE_COLOR: 0xffffff,
  RED_COLOR: "0xff0000",

  //Font sizes
  FS16: "16px",
  FS18: "18px",
  FS20: "20px",
  FS22: "22px",
  FS24: "24px",
  FS26: "26px",
  FS30: "30px",
  FS32: "32px",
  FS36: "36px",
  FS38: "38px",
  FS40: "40px",
  FS42: "42px",
  FS44: "44px",
  FS50: "50px",
  FS60: "60px",

  //Different sont weights.
  FW1000: "1000",
  FW600: "600",
  FW800: "800",
  FW900: "600",

  //Different font family styles.
  FONT_FAMILY_REGULAR: "Montserrat-Regular",
  FONT_FAMILY_MEDIUM: "Montserrat-Medium",
  FONT_FAMILY_BOLD: "Montserrat-Bold",
  FONT_FAMILY_EXTRA_BOLD: "Montserrat-ExtraBold",
  FONT_FAMILY_SEMI_BOLD: "Montserrat-SemiBold",

  BINGO_FONTS_COLOR: "0X5430a2",
  BINGO_BALL_COLOR: "0X5a4169",
  BINGO_TIMER_COLOR: "0x71be0d",
  WHITE_COLOR: "0xffffff",
  CORRECT_DAUB_COLOR: "0X9a2e2a",
  GAME_OVER_SCORE_COLOR: "0X01ff02",
  GAME_OVER_COUNT_COLOR: "0Xdbd871",
};
/**
 * setting SFX IDS
 */
export const SFX_IDS = {
  BACKGROUND_MUSIC: 0,
  LAST_30_SEC_MUSIC: 1,
  NEW_BALL_GENERATION: 2,
  CORRECT_DAUB: 3,
  WRONG_DAUB: 4,
  POWER_UP_FILLING: 5,
  POWER_UP_GENERATION: 6,
  POWER_UP_CLAIM: 7,
  STAR_POWER_UP_ABILITY_TAP: 8,
  GOLDEN_POWER_UP_BALL: 9,
  BINGO_TAPPING: 10,
  BINGO: 11,
  DOUBLE_BINGO: 12,
  TRIPLE_BINGO: 13,
  EPIC_BINGO: 14,
  FUL_HOUSE: 15,
  LAST_30_SEC_INDICATOR: 16,
  LAST_10_SEC_INDICATOR: 17,
  BONUS_TIME_ADDING: 18,
};
/**
 * Setting SFX_ KEYS
 */
export const SFX_KEYS = {
  BACKGROUND_MUSIC: "backGroundMusic",
  LAST_30_SEC_MUSIC: "last30SecMusic",
  NEW_BALL_GENERATION: "newBallGeneration",
  CORRECT_DAUB: "correctDaub",
  WRONG_DAUB: "wrongDaub",
  POWER_UP_FILLING: "powerUpFilling",
  POWER_UP_GENERATION: "powerUpGeneration",
  POWER_UP_CLAIM: "powerUpClaim",
  STAR_POWER_UP_ABILITY_TAP: "starPowerUpAbilityTap",
  GOLDEN_POWER_UP_BALL: "goldenPowerUpBallSelection",
  BINGO_TAPPING: "bingoTapping",
  BINGO: "bingo",
  DOUBLE_BINGO: "doubleBingo",
  TRIPLE_BINGO: "tripleBingo",
  EPIC_BINGO: "epicBingo",
  FULL_HOUSE: "fullHouse",
  LAST_30_SEC_INDICATOR: "last30SecIndicator",
  LAST_10_SEC_INDICATOR: "last10SecIndicator",
  BONUS_TIME_ADDING: "bonusTimeAdding",
};
/**
 * sfx ids for bingo ball numbers
 */
export const BALL_SFX_IDS = {
  SOUND_01: 0,
  SOUND_02: 1,
  SOUND_03: 2,
  SOUND_04: 3,
  SOUND_05: 4,
  
  SOUND_06: 5,
  SOUND_07: 6,
  SOUND_08: 7,
  SOUND_09: 8,
  SOUND_10: 9,
  
  SOUND_11: 10,
  SOUND_12: 11,
  SOUND_13: 12,
  SOUND_14: 13,
  SOUND_15: 14,
  
  SOUND_16: 15,
  SOUND_17: 16,
  SOUND_18: 17,
  SOUND_19: 18,
  SOUND_20: 19,
  
  SOUND_21: 20,
  SOUND_22: 21,
  SOUND_23: 22,
  SOUND_24: 23,
  SOUND_25: 24,
  
  SOUND_26: 25,
  SOUND_27: 26,
  SOUND_28: 27,
  SOUND_29: 28,
  SOUND_30: 29,
  
  SOUND_31: 30,
  SOUND_32: 31,
  SOUND_33: 32,
  SOUND_34: 33,
  SOUND_35: 34,
  
  SOUND_36: 35,
  SOUND_37: 36,
  SOUND_38: 37,
  SOUND_39: 38,
  SOUND_40: 39,
  
  SOUND_41: 40,
  SOUND_42: 41,
  SOUND_43: 42,
  SOUND_44: 43,
  SOUND_45: 44,
  
  SOUND_46: 45,
  SOUND_47: 46,
  SOUND_48: 47,
  SOUND_49: 48,
  SOUND_50: 49,
  
  SOUND_51: 50,
  SOUND_52: 51,
  SOUND_53: 52,
  SOUND_54: 53,
  SOUND_55: 54,
  
  SOUND_56: 55,
  SOUND_57: 56,
  SOUND_58: 57,
  SOUND_59: 58,
  SOUND_60: 59,
  
  SOUND_61: 60,
  SOUND_62: 61,
  SOUND_63: 62,
  SOUND_64: 63,
  SOUND_65: 64,
  
  SOUND_66: 65,
  SOUND_67: 66,
  SOUND_68: 67,
  SOUND_69: 68,
  SOUND_70: 69,
  
  SOUND_71: 70,
  SOUND_72: 71,
  SOUND_73: 72,
  SOUND_74: 73,
  SOUND_75: 74,
  
};
/**
 * keys for ball numbers
 */
export const BALL_SFX_KEYS = {
  SOUND_01: "sound_1",
  SOUND_02: "sound_2",
  SOUND_03: "sound_3",
  SOUND_04: "sound_4",
  SOUND_05: "sound_5",
  
  SOUND_06: "sound_6",
  SOUND_07: "sound_7",
  SOUND_08: "sound_8",
  SOUND_09: "sound_9",
  SOUND_10: "sound_10",
  
  SOUND_11: "sound_11",
  SOUND_12: "sound_12",
  SOUND_13: "sound_13",
  SOUND_14: "sound_14",
  SOUND_15: "sound_15",
  
  SOUND_16: "sound_16",
  SOUND_17: "sound_17",
  SOUND_18: "sound_18",
  SOUND_19: "sound_19",
  SOUND_20: "sound_20",
  
  SOUND_21: "sound_21",
  SOUND_22: "sound_22",
  SOUND_23: "sound_23",
  SOUND_24: "sound_24",
  SOUND_25: "sound_25",
  
  SOUND_26: "sound_26",
  SOUND_27: "sound_27",
  SOUND_28: "sound_28",
  SOUND_29: "sound_29",
  SOUND_30: "sound_30",
  
  SOUND_31: "sound_31",
  SOUND_32: "sound_32",
  SOUND_33: "sound_33",
  SOUND_34: "sound_34",
  SOUND_35: "sound_35",
  
  SOUND_36: "sound_36",
  SOUND_37: "sound_37",
  SOUND_38: "sound_38",
  SOUND_39: "sound_39",
  SOUND_40: "sound_40",
  
  SOUND_41: "sound_41",
  SOUND_42: "sound_42",
  SOUND_43: "sound_43",
  SOUND_44: "sound_44",
  SOUND_45: "sound_45",
  
  SOUND_46: "sound_46",
  SOUND_47: "sound_47",
  SOUND_48: "sound_48",
  SOUND_49: "sound_49",
  SOUND_50: "sound_50",
  
  SOUND_51: "sound_51",
  SOUND_52: "sound_52",
  SOUND_53: "sound_53",
  SOUND_54: "sound_54",
  SOUND_55: "sound_55",
  
  SOUND_56: "sound_56",
  SOUND_57: "sound_57",
  SOUND_58: "sound_58",
  SOUND_59: "sound_59",
  SOUND_60: "sound_60",
  
  SOUND_61: "sound_61",
  SOUND_62: "sound_62",
  SOUND_63: "sound_63",
  SOUND_64: "sound_64",
  SOUND_65: "sound_65",
  
  SOUND_66: "sound_66",
  SOUND_67: "sound_67",
  SOUND_68: "sound_68",
  SOUND_69: "sound_69",
  SOUND_70: "sound_70",
  
  SOUND_71: "sound_71",
  SOUND_72: "sound_72",
  SOUND_73: "sound_73",
  SOUND_74: "sound_74",
  SOUND_75: "sound_75",
  
};
